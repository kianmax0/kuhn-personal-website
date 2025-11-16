import React, { useState, useEffect } from "react";
import avatar from "../../assets/avatar.png";

const MomentCard = ({ timestamp, text, imageUrl, images = [], location }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 创建完整的图片数组
  const allImages = images.length > 0 ? images : imageUrl ? [imageUrl] : [];
  const isMultipleImages = allImages.length > 1;

  // Helper function to determine grid layout based on image count
  const getGridClass = (count) => {
    if (count <= 1) return "moment-grid-single";
    if (count <= 4) return "moment-grid-quad";
    return "moment-grid-nine";
  };

  const handleImageClick = (imageSrc) => {
    const imageIndex = allImages.findIndex((img) => img === imageSrc);
    setCurrentImageIndex(imageIndex);
    setSelectedImage(imageSrc);
  };

  const closePreview = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const navigateImage = (direction) => {
    if (allImages.length <= 1) return;

    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % allImages.length
        : currentImageIndex === 0
        ? allImages.length - 1
        : currentImageIndex - 1;

    setCurrentImageIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  // 键盘事件监听
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyPress = (event) => {
      const keyActions = {
        ArrowLeft: () => navigateImage("prev"),
        ArrowUp: () => navigateImage("prev"),
        ArrowRight: () => navigateImage("next"),
        ArrowDown: () => navigateImage("next"),
        Escape: closePreview,
      };

      if (keyActions[event.key]) {
        event.preventDefault();
        keyActions[event.key]();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage, currentImageIndex, allImages]);

  return (
    <article className="moment-card" aria-label="Moment card">
      <header className="moment-header">
        <img className="moment-avatar" src={avatar} alt="Kuhn avatar" />
        <div className="moment-meta">
          <div className="moment-name">Kuhn</div>
          <time className="moment-time" aria-label={`Posted ${timestamp}`}>
            {timestamp}
          </time>
          {location && (
            <div className="moment-location" aria-label="Location">
              {location}
            </div>
          )}
        </div>
      </header>

      {text && (
        <p className="moment-text" style={{ whiteSpace: "pre-line" }}>
          {text}
        </p>
      )}

      {/* Image display */}
      {allImages.length > 0 && (
        <div className="moment-media">
          {isMultipleImages ? (
            <div
              className={`moment-image-grid ${getGridClass(allImages.length)}`}
            >
              {allImages.slice(0, 9).map((img, idx) => (
                <div key={idx} className="moment-grid-item">
                  <img
                    className="moment-grid-image"
                    src={img}
                    alt={`Image ${idx + 1}`}
                    onClick={() => handleImageClick(img)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <img
              className="moment-image"
              src={allImages[0]}
              alt="Moment media"
              onClick={() => handleImageClick(allImages[0])}
            />
          )}
        </div>
      )}

      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="image-preview-overlay" onClick={closePreview}>
          <div className="image-preview-container">
            <img
              className="image-preview"
              src={selectedImage}
              alt="Preview"
              onClick={closePreview}
            />

            {/* Navigation controls - only show for multiple images */}
            {isMultipleImages && (
              <>
                <button
                  className="image-nav-arrow image-nav-prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage("prev");
                  }}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  className="image-nav-arrow image-nav-next"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage("next");
                  }}
                  aria-label="Next image"
                >
                  ›
                </button>
                <div className="image-counter">
                  {currentImageIndex + 1} / {allImages.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </article>
  );
};

export default MomentCard;
