import React from "react";

const Lightbox = ({ src, alt, onClose }) => {
  if (!src) return null;
  return (
    <div style={overlayStyle} onClick={onClose} role="dialog" aria-modal="true">
      <div style={containerStyle} onClick={(e) => e.stopPropagation()}>
        <img
          src={src}
          alt={alt}
          style={{ maxWidth: "90vw", maxHeight: "80vh" }}
        />
        <button style={closeBtnStyle} onClick={onClose} aria-label="Close">
          ✕
        </button>
      </div>
    </div>
  );
};

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.75)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const containerStyle = {
  position: "relative",
  padding: 12,
  borderRadius: 8,
};

const closeBtnStyle = {
  position: "absolute",
  top: 6,
  right: 6,
  background: "transparent",
  border: "none",
  color: "white",
  fontSize: 24,
  cursor: "pointer",
};

export default Lightbox;
