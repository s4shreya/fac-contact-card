import Post from './Post';
import styles from './PostsList.module.css';

const PostsList = props =>  {
    return (
        <ul className={styles.posts}>
            <Post author={props.name} text={props.body} />
            <Post author={props.name} text={props.body} />
        </ul>
    );
};

export default PostsList;