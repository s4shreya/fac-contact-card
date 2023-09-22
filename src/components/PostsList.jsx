import Post from './Post';
import styles from './PostsList.module.css';

const PostsList = () =>  {
    return (
        <ul className={styles.posts}>
            <Post author="Shreya" text="Hello"/>
            <Post author="Akshay" text="Heyyyy"/>
        </ul>
    );
};

export default PostsList;