import BlogPost from "../BlogPost";
import Header from "../Header";

function PostList() {
  const posts = [
    {
      title: "React Basics",
      author: "Jane Doe",
      date: "18-07-2024",
      content: (
        <>
          <p>
            React is a popular JavaScript library developed by Facebook for
            building user interfaces, especially single-page applications
            (SPAs). It helps developers create fast and interactive web apps by
            breaking the UI into reusable components. Instead of reloading an
            entire page every time something changes, React updates only the
            parts of the page that need to change — making it efficient and
            responsive.
          </p>
          <p>
            The core idea of React revolves around components. A component is a
            small, reusable piece of UI — for example, a button, header, or
            form. Components can be either class components or functional
            components, though functional components are now preferred with
            React Hooks. React uses a syntax called JSX (JavaScript XML), which
            allows you to write HTML-like code inside JavaScript. JSX makes it
            easier to visualize and structure UI elements directly within the
            logic.
          </p>
        </>
      ),
    },
    {
      title: "State and Props",
      author: "John Smith",
      date: "19-07-2024",
      content: (
        <>
          <p>
            React components often need to share or manage data. This is where
            props and state come in. Props (properties) are used to pass data
            from a parent component to a child component — similar to function
            parameters. State, on the other hand, represents data that belongs
            to a component itself and can change over time. When a component's
            state changes, React automatically re-renders that part of the UI to
            reflect the new data
          </p>
        </>
      ),
    },
    {
      title: "Lifecycle Methods",
      author: "Emily Johnson",
      date: "20-07-2024",
      content: (
        <>
          <p>
            In React, lifecycle methods are special functions that run
            automatically at different stages of a component's life — from when
            it is created (mounted) to when it is removed (unmounted) from the
            UI. They allow developers to perform specific actions at these
            stages, such as fetching data, updating the DOM, or cleaning up
            resources. Lifecycle methods are mainly used in class components,
            while React Hooks serve a similar purpose in functional components.
          </p>
        </>
      ),
    },
  ];
  return (
    <div>
      <section>
        {posts.map((post, index) => (
            <Header title={post.title} />
        ))}
        {posts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              author={post.author}
              date={post.date}
              content={post.content}
            />
        ))}
      </section>
    </div>
  );
}

export default PostList;

// import React, { useState } from "react";

// function NewPostForm({ addPost }) {
//   // Step 1: Manage local form state
//   const [newPost, setNewPost] = useState({
//     title: "",
//     author: "",
//     content: "",
//   });

//   // Step 2: Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewPost((prev) => ({ ...prev, [name]: value }));
//   };

//   // Step 3: Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!newPost.title || !newPost.author || !newPost.content) {
//       alert("Please fill out all fields.");
//       return;
//     }
//     addPost(newPost); // Send data to parent
//     setNewPost({ title: "", author: "", content: "" }); // Clear form
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
//       <h2>Add a New Post</h2>
//       <div>
//         <input
//           type="text"
//           name="title"
//           placeholder="Post Title"
//           value={newPost.title}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           name="author"
//           placeholder="Author"
//           value={newPost.author}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <textarea
//           name="content"
//           placeholder="Write your content..."
//           value={newPost.content}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">Add Post</button>
//     </form>
//   );
// }

// export default NewPostForm;
