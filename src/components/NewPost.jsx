import styles from './NewPost.module.css';

const NewPost = () => {
    return (
        <form className={styles.form}>
            <p>
            <label htmlFor="name">Name</label>
            <input type="text"id="name" required />
            </p>
            <p>
                <label htmlFor="text">Text</label>
                <textarea id="text" required rows={3} />
            </p>
        </form>
    );
};

export default NewPost;