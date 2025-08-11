import React from "react";
import './Header.css'


const Header = ({black}) => {
    return (
      <header className={black ? 'black' : ''}>
         <div className="netflix--logo">
            <a href="">
              <img src="https://img.icons8.com/color/500/netflix.png" alt=""/>      
            </a>
         </div>
         <div className="user--icon">
            <a href="">
               <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
            </a>
         </div>
      </header>
    );
};

export default Header;
