const Modal = ( {isOpen, onClose, rating} ) => {
  if (!isOpen) return null
  return (
    <div>
      <div className="modal-overlay">
        <div className="modal">
          <h2>thank you</h2>
          <p>
            you rated us {rating} star{rating > 1 ? "s" : ""}
          </p>
          <button className="close-btn" onClick={onClose}>
            Close{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal
