import React from "react"
import '../App.css';


export default function Sidebar() {
    return(
        <div className="sidebar-container">
            <h3 className="header-sidebar">Recommended for you</h3>
            <div className="button-bar">
                <button className="button-one">Local</button>
                <button className="button-2-3">Recent</button>
                <button className="button-2-3">User</button>
            </div>
            <div className="post-preview">
                <img src='https://cdn.wallpapersafari.com/2/96/Cx7BJP.jpg' width={"100px"}></img>
                <div className="text-preview">
                    <h5 className="title-preview">sunt aut facere repellat</h5>
                    <p className="p-preview">January 23, 2022</p>
                </div>
            </div>
            <div className="post-preview">
                <img src='https://cdn.wallpapersafari.com/2/96/Cx7BJP.jpg' width={"100px"}></img>
                <div className="text-preview">
                    <h5 className="title-preview">sunt aut facere repellat</h5>
                    <p className="p-preview">January 23, 2022</p>
                </div>
            </div>
            <div className="post-preview">
                <img src='https://cdn.wallpapersafari.com/2/96/Cx7BJP.jpg' width={"100px"}></img>
                <div className="text-preview">
                    <h5 className="title-preview">sunt aut facere repellat</h5>
                    <p className="p-preview">January 23, 2022</p>
                </div>
            </div>
        </div>
    )
}
