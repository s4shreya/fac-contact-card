import { MdPostAdd, MdMessage } from "react-icons/md";
import styles from './Header.module.css';

const Header = ({onCreatePost}) => {
  return (
    <header className={styles.header}>
      <h1>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button onClick={onCreatePost}>
            <MdPostAdd size={20} />
            New Post
        </button>
      </p>
    </header>
  );
};

export default Header;
