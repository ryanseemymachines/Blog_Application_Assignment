import HomeHeader from "../../components/HomeHeader";
import HomeFooter from "../../components/HomeFooter";
import styles from "./index.module.css";

const About = () => {
  return (
    <div className={styles.pageWrapper}>
      <HomeHeader />
      <div className={styles.contentWrapper}>
        <div className={styles.aboutContainer}>
          <h1>About BlogIt</h1>
          <p>
            BlogIt is a modern blogging platform designed to make content
            creation simple and enjoyable. Whether you're sharing technical
            knowledge, personal stories, or creative writing, BlogIt provides an
            intuitive interface to express your thoughts.
          </p>
          <h2>Our Mission</h2>
          <p>
            To empower writers and content creators with a clean,
            distraction-free platform that focuses on what matters most -{" "}
            <span>your content.</span>
          </p>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}

export default About;
