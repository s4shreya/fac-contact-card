import styles from './Post.module.css';

const Post = props => {
    return (
        <li className={styles}>
            <p>{props.author}</p>
            <p>{props.text}</p>
        </li>
    );
};

export default Post;