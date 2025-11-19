import { useState } from "react";
import BlogPost from "../BlogPost";
import BlogHeader from "../BlogHeader";
import CreateBlogButton from "../CreateBlogButton";
import NewPostForm from "../NewPostForm";
import Modal from "../Modal";

const PostList = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "React Basics",
      author: "Jane Doe",
      date: "18/07/2024",
      content:
        "React is a popular JavaScript library developed by Facebook for building user interfaces, especially single-page applications (SPAs). It helps developers create fast and interactive web apps by breaking the UI into reusable components. Instead of reloading an entire page every time something changes, React updates only the parts of the page that need to change — making it efficient and responsive.\n\nThe core idea of React revolves around components. A component is a small, reusable piece of UI — for example, a button, header, or form. Components can be either class components or functional components, though functional components are now preferred with React Hooks. React uses a syntax called JSX (JavaScript XML), which allows you to write HTML-like code inside JavaScript. JSX makes it easier to visualize and structure UI elements directly within the logic.",
    },
    {
      id: 2,
      title: "State and Props",
      author: "John Smith",
      date: "19/07/2024",
      content:
        "React components often need to share or manage data. This is where props and state come in. Props (properties) are used to pass data from a parent component to a child component — similar to function parameters. State, on the other hand, represents data that belongs to a component itself and can change over time. When a component's state changes, React automatically re-renders that part of the UI to reflect the new data.",
    },
    {
      id: 3,
      title: "Lifecycle Methods",
      author: "Emily Johnson",
      date: "20/07/2024",
      content:
        "In React, lifecycle methods are special functions that run automatically at different stages of a component's life — from when it is created (mounted) to when it is removed (unmounted) from the UI. They allow developers to perform specific actions at these stages, such as fetching data, updating the DOM, or cleaning up resources. Lifecycle methods are mainly used in class components, while React Hooks serve a similar purpose in functional components.",
    },
  ]);

  const [selectedId, setSelectedId] = useState(posts[0].id);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayPost = posts.find((post) => post.id === selectedId);

  const handleAddPost = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
    setSelectedId(newPost.id);
  };

  return (
    <section>
      <BlogHeader
        posts={posts}
        selectedId={selectedId}
        selectedPost={setSelectedId}
      />
      <CreateBlogButton
        type="button"
        title="+ Create New Blog"
        onClick={() => setIsModalOpen(true)}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NewPostForm
          onAddPost={handleAddPost}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>

      {displayPost && (
        <BlogPost
          title={displayPost.title}
          author={displayPost.author}
          date={displayPost.date}
          content={displayPost.content}
        />
      )}
    </section>
  );
};

export default PostList;
