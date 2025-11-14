import styles from "./index.module.css";

function BlogHeader({ posts,selectedPost }) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerList}>
      {posts.map((post) => (
        <div className={styles.postCard} onClick={() => {selectedPost(post.id);}}>
          <h3>{post.title}</h3>
          <h5>By:{post.author} <span>{post.date}</span></h5>
        </div>
      ))}
    </div>
    </div>
    
  );
}

export default BlogHeader;
