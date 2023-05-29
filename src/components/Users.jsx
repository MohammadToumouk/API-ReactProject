import React, { useEffect, useState } from "react";
import axios from "axios";
import ApiServer from "./Api";


const ApiUsers = ({postId}) => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/users';
    const [users, setUsers] = useState([]);



/*    Fetching without axios
 
  fetch('https://jsonplaceholder.typicode.com/posts/2/comments')
  .then((response) => response.json())
  .then((json) => console.log(json));   */ 

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios
                .get(`${baseUrl}/${postId}`);
                setUsers(response.data);
                console.log(response.data);
            } catch (err) {
                console.log("error: ", err);
            }
        };
        fetchUsers();
    }, [postId]);

     return (
       <p className="userName">{users.name}</p>
    )


     
}; export default ApiUsers
