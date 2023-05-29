import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Unsplash = ({postId}) => {
  const baseUrl = 'https://jsonplaceholder.typicode.com/photos';
  const [photos, setPhotos] = useState([]);



/*    Fetching without axios

fetch('https://jsonplaceholder.typicode.com/posts/2/comments')
.then((response) => response.json())
.then((json) => console.log(json));   */ 

  useEffect(() => {
      const fetchUsers = async () => {
          try {
              const response = await axios
              .get(`${baseUrl}/${postId}`);
              setPhotos(response.data)
              console.log(response.data.url);

          } catch (err) {
              console.log("error: ", err);
          }
      };
      fetchUsers();
  }, [postId]);

  return (
    <div>
      <image src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8fDA%3D&w=1000&q=80"></image>
    </div>
    

  );
};

export default Unsplash;