import HomeHeader from '../../components/HomeHeader';
import HomeFooter from '../../components/HomeFooter';
import PostList from '../../components/PostList';

function Home() {
  return (
    <div>
        <HomeHeader/>
        <PostList/>
      <HomeFooter/>
    </div>
  )
}

export default Home;