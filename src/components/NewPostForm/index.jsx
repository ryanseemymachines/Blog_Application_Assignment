import { useState } from "react";
import Input from "../Input";
import TextArea from "../TextArea";
import AddPostButton from "../AddPostButton";

function NewPostForm() {
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
    }
    addPost(newPost);
    setNewPost({ title: "", author: "", content: "" });
  };

  const addNewPost = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new Blog Post</h2>
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

      <AddPostButton type="submit" title="Add Task" onSubmit={addNewPost} />
    </form>
  );
}

export default NewPostForm;
