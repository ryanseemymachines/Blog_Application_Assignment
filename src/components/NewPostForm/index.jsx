import styles from "./index.module.css";
import { useState } from "react";
import Input from "../Input";
import TextArea from "../TextArea";
import AddPostButton from "../AddPostButton";
import CloseButton from "../CloseButton";

function NewPostForm({ onAddPost, onClose }) {
  const [newPost, setNewPost] = useState({
    title: "",
    author: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.author || !newPost.content) {
      alert("Please fill out all fields.");
      return;
    } else {
      onAddPost({
        id: Date.now(),
        title: newPost.title,
        author: newPost.author,
        date: new Date().toLocaleDateString(),
        content: newPost.content,
      });
    }
    setNewPost({ title: "", author: "", content: "" });
    onClose();
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.formGrp}>
        <div className={styles.titleGrp}>
          <h2>Add new Blog Post</h2>
          <CloseButton type="button" onClick={onClose} />
        </div>

        <Input
          type="text"
          name="title"
          placeholder="Post Title"
          value={newPost.title}
          onChange={handleChange}
        />

        <Input
          type="text"
          name="author"
          placeholder="Author"
          value={newPost.author}
          onChange={handleChange}
        />

        <TextArea
          name="content"
          placeholder="Enter the content"
          value={newPost.content}
          onChange={handleChange}
        />

        <AddPostButton
          type="submit"
          title="Publish Post"
        />
      </div>
    </form>
  );
}

export default NewPostForm;
