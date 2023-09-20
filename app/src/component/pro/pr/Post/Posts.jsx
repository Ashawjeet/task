import React from 'react';
import './Posts.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Comment from '../../../comment/Comment';

const Posts = ({ posts }) => {
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  const handleEditPost = (postId) => {
    navigate(`/updatePost/${postId}`);
  };

  console.log(posts)
  const handleDeletePost = async (postId) => {
    try {
      console.log(postId);
      const response = await axios.delete(`http://192.34.63.158:4000/user/post/delete/${postId}`);
      console.log(response.data);
      if (response.data.status == true) {
        window.alert(response.data.message);
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Your Posts:</h1>
      <div className="post-container">
        {posts.map((post) => (
          <div key={post._id} className="card">
            <img src={`http://192.34.63.158:4000/posts/${post.postUrl}`} alt={post.caption} />
            <h2>{post.caption}</h2>
            <button onClick={() => handleEditPost(post._id)}>Edit</button>
            <button onClick={() => handleDeletePost(post._id)}>Delete</button>
            <Comment postId={post._id} />
          </div>
        ))}
      </div>
    </div>
  );
};



export default Posts;


///////////////----------before 3june----------///////////////////////////////
// http://192.34.63.158:4000/profile_images/profile_image_1685380245019_CSS%20DEMO1.png
// PROFILE PHOTO
// -----------------------------------------------------------------
// mahesh mhaske3:13 PM
// http://192.34.63.158:4000/posts/profile_image_1685380245019_CSS%20DEMO1.png

// post
// http://192.34.63.158:4000/posts
// mahesh mhaske3:19 PM
// http://192.34.63.158:4000/profile_images/





///////////////----------3june----------///////////////////////////////
// http://192.34.63.158:4000/profile_images/profile_image_1685380245019_CSS%20DEMO1.png
// PROFILE PHOTO
// -----------------------------------------------------------------
// mahesh mhaske3:13 PM
// http://192.34.63.158:4000/posts/profile_image_1685380245019_CSS%20DEMO1.png

// post
// http://192.34.63.158:4000/posts
// mahesh mhaske3:19 PM
// http://192.34.63.158:4000/profile_images/