import { useState } from "react";

import "./App.css";
import PostsList from "./components/PostsList";
import NewPost from "./components/NewPost";
import Modal from "./components/Modal";

function App() {
  const [enteredBodyText, setEnteredBodyText] = useState("");
  const [enteredName, setEnteredName] = useState("");

  const changeBodyHandler = (event) => {
    setEnteredBodyText(event.target.value);
  };

  const changeNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  return (
    <main className="App">
      Hello World
      <PostsList body={enteredBodyText} name={enteredName} />
      <div>
        <Modal>
          <NewPost
            onBodyChange={changeBodyHandler}
            onNameChange={changeNameHandler}
          />
        </Modal>
      </div>
    </main>
  );
}

export default App;
