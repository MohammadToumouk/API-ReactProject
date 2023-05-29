import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { InputGroup } from 'react-bootstrap';
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import ApiComments from './Comments';
import ApiUsers from './Users';
import Unsplash from './Unsplash';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import JustifiedExample from './SecondNavbar';


const ApiServer = () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  const [posts, setPosts] = useState([]);
  const editTitle = useRef(null);
  const createTitle = useRef(null);
  const createBody = useRef(null);
  const [newPost, setNewPost] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [buttonName, setButtonName] = useState("Show Comments");
  const [toggle, setToggle] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(baseUrl);
        setPosts(res.data);
        console.log(res.data)
        
      } catch (err) {
        console.log('Error:', err);
      }
    };
    fetchPosts();
  }, []);



  const handleAdd = (e) => {
    e.preventDefault();
    const newPostData = {
      title: createTitle.current.value,
      body: createBody.current.value,
    };
    setNewPost(newPostData);

    axios
      .post(baseUrl, newPostData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleEdit = (postId, updatedTitle) => {

    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    axios
      .put(`${baseUrl}/${postId}`, { title: updatedTitle})
      .then((response) => {
        const updatedTitle = response.data;
        setEditedTitle(updatedTitle)
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
      
  };
  


  const handleEditButtonClick = (postId) => {
    setEditing(postId);
    setEditedTitle(updatedTitle);
    
    

  };

  const handleSaveButtonClick = (postId) => {
    const updatedTitle = editedTitle.trim();
    if (updatedTitle !== ""){
        handleEdit(postId, updatedTitle);
        setEditing(false);
    }
  };



  {/The Input has onChange Attribiut so whenever it changes the title get set/}

  const handleInputChange = (e) => {
    setEditedTitle(e.target.value);
    
  }
  
  const handleDelete = (postId) => {
  
      const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
      axios
        .delete(`${baseUrl}/${postId}`)
        .then((response) => {
          console.log(response);
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
        setEditedTitle("");
    };

   
    useEffect(() => {
      if (editing) {
        editTitle.current.focus();
      }
    }, [editing]);
   
    useEffect(() => {
      if (selectedPostId !== null) {
        setButtonName("Hide Comments");
      }else {
          
        setButtonName("Show Comments")
      }
    }, [selectedPostId]);

    const handleToggleComments = (postId) => {
      if (selectedPostId === postId) {
        
        setSelectedPostId(null)
      }else{
        setSelectedPostId(postId)
      }
    };


    const handleToggleUsers = (postId) => {
      if (selectedUserId === postId) {
        setSelectedUserId(null)
      }else{
        setSelectedUserId(postId)
      }
    };


  return (
    
    <div className='mainContainer'>
     
    <Navbar />
    <JustifiedExample />
    <div className='MainAndSideBar'>
    
    <div>
      <form>
      
        <div className='postingContainer' style={{display:"flex", flexDirection:"row"}}>
          
        <input className='inputfeld' ref={createTitle} placeholder="Title" />
        <input className='inputfeld' ref={createBody} placeholder="Body" />
        <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3254663/component-add-icon-md.png" className='imgBtn1'  width={"50px"} onClick={handleAdd}>
         
        </img>
        </div>
        
        
      </form>
      
      
      <ul className='postContainer'>
      
        {posts.map((post) => (
          <li style={{listStyle:"none"}}  key={post.id}>
            <div className="postFeld">
                {editing === post.id ?(
                  <>
                    <input
                    ref={editTitle}
                    className='editInput'
                    type='text'
                    value={editedTitle}
                    onChange={handleInputChange}
                     />

                     <button onClick={() => handleSaveButtonClick(post.id)}>
                  Save
                </button>
                </>
                ) : (
                  <div className='content'>
                    <Unsplash width={"400px"} height={"250px"} className='userPic' postId={post.id} />
                    <img key={post.id} src='https://cdn.wallpapersafari.com/2/96/Cx7BJP.jpg' width={"400px"} height={"250px"} className='userPic'></img>
                    <div className='titlenBody'>
                    <li className='title' key={post.id}>{"Title: " + post.title}
                    <div className='body' key={post.id}>{post.body}</div></li>
                    <div style={{display:"flex", flexDirection:"row"}}>
                    <button className='showBtn' onClick={() => handleToggleComments(post.id)}>{buttonName}</button>
                    <button className='showBtn' onClick={() => handleToggleUsers(post.id)}>Show Author</button>
                    </div>
                    </div>
                  
                 

                  
                    
                    
                    <img className='imgBtn' onClick={() => handleEditButtonClick(post.id)} src= "https://static.thenounproject.com/png/2473159-200.png" width={"50px"} height={"50px"}></img>
                  
                
                <img className='imgBtn' onClick={() => handleDelete(post.id)} src='https://cdn.onlinewebfonts.com/svg/img_117750.png' width={"50px"} height={"50px"}></img>
                    </div>
                )}
             
             
            </div>
            <div>
            {selectedPostId === post.id && 
            <ul className='commentul'>
             <li className='Commentfeld' key={post.id}> {<ApiComments postId={post.id}/>}
             </li> 
             </ul>
            }
            {selectedUserId === post.id && 
            
             <p className='UserFeld' key={post.id}> {<ApiUsers postId={post.id}/>}
             </p> 
             
            }
            
            
            </div>
          </li> 
        ))}
        {newPost && (
          <li key={newPost.id}>
            <div className="postFeld">
              <li key={newPost.id}>{"Title: "+ newPost.title}</li>
              <div>
                <button onClick={() => handleEdit(newPost.id, 'Updated Title')}>Edit</button>
                <button onClick={() => handleDelete(newPost.id)}>Delete</button>
              </div>
            </div>
            <button>{buttonName}</button>
          </li>
        )}
      </ul>
      </div>
      <Sidebar />
      </div>
    </div>
  );
};



export default ApiServer;