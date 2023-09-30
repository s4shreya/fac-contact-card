import { useState } from "react";

import Post from "./Post";
import Header from "./Header";
import Modal from "./Modal";
import NewPost from "./NewPost";
import styles from "./PostsList.module.css";

const PostsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const addPostHandler = (data) => {
    setPosts((existingPosts) => [data, ...existingPosts]);
    console.log(posts);
  };

  const showModalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      {/* <Header onCreatePost={showModalHandler} /> */}
      <div>
        {isModalOpen ? (
          <Modal onClose={showModalHandler}>
            <NewPost onCancel={showModalHandler} onAddPost={addPostHandler} />
          </Modal>
        ) : null}
      </div>
      {posts.length > 0 ? (
        <ul className={styles.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} text={post.body} />
          ))}
        </ul>
      ) : (
        <div>No posts yet!</div>
      )}
    </>
  );
};

export default PostsList;
