import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState();

  useEffect(() => {
    //API Call
   const timer = setInterval(() => {
    console.log("NAMASTE REACT LIVE CLASSY🚀🚀🚀");
   }, 1000);
  console.log("useEffect");

  return() => {
    clearInterval(timer);
     console.log("UseEffect Return");
  };
}, []);
     console.log("render");

  return (
    <div>
      <h2>Profile component</h2>
      <h3>Name: {props.name}</h3>
      <h3>Count:{count}</h3>
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default Profile;
    