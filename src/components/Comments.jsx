import React, { useEffect, useState } from "react";
import axios from "axios";
import ApiServer from "./Api";


const ApiComments = ({postId}) => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    const [comments, setComments] = useState([]);



/*    Fetching without axios
 
  fetch('https://jsonplaceholder.typicode.com/posts/2/comments')
  .then((response) => response.json())
  .then((json) => console.log(json));   */ 

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios
                .get(`${baseUrl}/${postId}/comments`);
                setComments(response.data);
                console.log(response.data);
            } catch (err) {
                console.log("error: ", err);
            }
        };
        fetchComments();
    }, [postId]);



    return (
        <div>
        
            <ul>
            {comments.map((comment) => (
                <li key={comment.id}> {comment.body} </li>
            ))}
            </ul>
        </div>
    )

}; export default ApiComments
