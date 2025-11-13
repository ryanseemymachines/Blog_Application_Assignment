import { Component } from "react";
import styles from './index.module.css';

class BlogPost extends Component {
  render() {
    const { title, author, date, content } = this.props;
    return (
        <div className={styles.blogContainer}>
            <article className={styles.blogPostCard}>
        <h2>{title}</h2>
        <p><strong>By:</strong> <big>{author}</big> | <i>{date}</i></p>
        <p>{content}</p>
      </article>
        </div>
      
    );
  }
}

export default BlogPost;
