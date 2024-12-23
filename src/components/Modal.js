import React from "react";

const Modal = () => {
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>買い物カゴを全て空にしますか？</h4>
        <div className="btn-container">
          <button className="btn confirm-btn">OK</button>
          <button className="btn clear-btn">キャンセル</button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
