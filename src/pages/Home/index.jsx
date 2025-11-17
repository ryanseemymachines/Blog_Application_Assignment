import HomeHeader from '../../components/HomeHeader';
import HomeFooter from '../../components/HomeFooter';
import PostList from '../../components/PostList';
import styles from'./index.module.css';

function Home() {
  return (
    <div className={styles.pageWrapper}>
      <HomeHeader/>
      <div className={styles.contentWrapper}>
        <PostList/>
      </div>
      <HomeFooter/>
    </div>
  )
}

export default Home;