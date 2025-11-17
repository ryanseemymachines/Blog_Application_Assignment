import styles from "./index.module.css";

function BlogHeader({ posts, selectedId, selectedPost }) {
  return (
    <div className={styles.blogTitleHeader}>
      <div className={styles.headerList}>
        {posts.map((post) => (
          <div
            key={post.id}
            className={`${styles.postCard} ${
              selectedId === post.id ? styles.activeCard : ""
            }`}
            onClick={() => {
              selectedPost(post.id);
            }}
          >
            <h3>{post.title}</h3>
            <h5>
              By:{post.author} <span>{post.date}</span>
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogHeader;
