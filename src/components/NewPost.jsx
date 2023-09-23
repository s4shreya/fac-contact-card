import styles from './NewPost.module.css';

const NewPost = props => {
    return (
        <form className={styles.form}>
            <p>
            <label htmlFor="name">Name</label>
            <input type="text"id="name" required onChange={props.onNameChange} />
            </p>
            <p>
                <label htmlFor="text">Text</label>
                <textarea id="text" required rows={3} onChange={props.onBodyChange} />
            </p>
        </form>
    );
};

export default NewPost;