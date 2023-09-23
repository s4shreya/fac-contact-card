import styles from './Modal.module.css';

const Modal = ({ children }) => {
  return (
    <>
    <div className={styles.backdrop}></div>
      <dialog open className={styles.modal}>{children}</dialog>
    </>
  );
};

export default Modal;
