import { useState, useContext } from "react";
import logo from "../assets/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline"
import UserContext from "./utils/UserContext";
 

// SPA = Single Page Application
// Client Side Server

const Title = () => ( 
  <img className="h-24 p-0 m-1" alt="logo" src={logo} />
);

const Header = () => {
  //state variable and function
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const {user} = useContext(UserContext);

  return (
    <div className="m-7 flex justify-between bg-green-400 shadow-lg sm:bg-lime-100 md:bg-amber-300">
      <Title />
      <div className="nav-items">
      <ul className="flex py-10">
      <li className="px-2">
          <Link to="/">HOME</Link>   
      </li>
          <Link to="/about">
            <li className="px-2">ABOUT</li>
          </Link>

          <Link to="/contact">
            <li className="px-2">CONTACT</li>
          </Link>

          <Link to="/cart">
            <li className="px-2">CART</li>
          </Link>
          
          <Link to="/Instamart">
          <li className="px-2">INSTAMART</li>
          </Link>
        </ul>
      </div>
      <h1>{isOnline?"🟢" : "🔴"}</h1>
       <span className="p-10 font-bold text-green-600">{user.name} - {user.email}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>LOGIN</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>LOGOUT</button>
      )}
    </div>
  );
};

export default Header;
