import './App.css';
import HomeHeader from './components/HomeHeader';
import HomeFooter from './components/HomeFooter';
import PostList from './components/PostList';
import NewPostForm from './components/NewPostForm';

function App() {

  return (
    <>
      <NewPostForm/>
      <HomeHeader/>
        <PostList/>
      <HomeFooter/>
    </>
  )
}

export default App;
