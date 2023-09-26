import { useState } from 'react';

import styles from './NewPost.module.css';

const NewPost = props => {
    const [enteredBodyText, setEnteredBodyText] = useState("");
    const [enteredName, setEnteredName] = useState("");

    const submitHandler = event => {
        event.preventDefault();
        let postData = {
            author: enteredName,
            body: enteredBodyText
        };
        props.onAddPost(postData);
        props.onCancel();
    };

  const changeBodyHandler = (event) => {
    setEnteredBodyText(event.target.value);
  };

  const changeNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <p>
            <label htmlFor="name">Name</label>
            <input type="text"id="name" required onChange={changeNameHandler} />
            </p>
            <p>
                <label htmlFor="text">Text</label>
                <textarea id="text" required rows={3} onChange={changeBodyHandler} />
            </p>
            <p>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    );
};

export default NewPost;