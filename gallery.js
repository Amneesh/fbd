window.addEventListener('load', () => {
  fetchAndShowGallery();
});


async function fetchAndShowGallery() {
  try {
    // Step 1: Get media list
    const res = await fetch(`https://aura-snap-backend.vercel.app/api/media?bucket=${encodeURIComponent('fanbhangrede')}`);
    const files = await res.json();

    // Select gallery container
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) {
      console.error('No element with class "gallery-grid" found');
      return;
    }
    galleryGrid.innerHTML = ''; // Clear existing images

    // Step 2: For each file, fetch real signed URL
    const mediaWithUrls = await Promise.all(
      files.map(async (file) => {
        const signedRes = await fetch(`https://aura-snap-backend.vercel.app${file.signedUrl}`);
        const signedData = await signedRes.json();
        return {
          key: file.key,
          title: file.title,
          url: signedData.signedUrl,
        };
      })
    );

    // Append images to gallery-grid
    mediaWithUrls.forEach((item) => {
      const img = document.createElement('img');
      img.src = item.url;
      img.alt = item.title || 'Image';
      img.style.width = '100%';
      img.style.height = 'auto';
      img.style.objectFit = 'cover';
      galleryGrid.appendChild(img);
    });
  } catch (error) {
    console.error('Error fetching gallery:', error);
  }
}