import {Post, PostsSlider} from '../../components'
import PostImg from '../../assets/images/postPhonePic.png'
import AuthorImg from "../../assets/images/postAuthorPic.png";
import { posts } from 'mock/posts';

  

const index = () => {
  console.log(posts);
  return (
    <div className="Container">
      <h1 className="text-2xl text-center">Home</h1>
      <div>
        <PostsSlider posts={posts}/>
      </div>

      <div className="grid xl:grid-cols-2 gap-4 mt-10">
        {posts.map((post, i) => (
          <Post
            key={i}
            flexDirection="flex-col md:flex-row"
            post={post}
          />
        ))}
      </div>
    </div>
  );
  
};

export default index;