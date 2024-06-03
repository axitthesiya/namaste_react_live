import { useState, useEffect } from 'react';


const useOnline = () => {
  //Online state
    const [isOnline, setIsOnline] = useState(true);
    // Update network status
   useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };                            
    // Listen to the online status
    const handleOffline = () => {
      setIsOnline(false);
    };
     // Specify how to clean up after this effect for performance improvment
   window.addEventListener("online", handleOnline);
   window.addEventListener("offline", handleOffline);
 
   return() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline); 
  };
  },[]);
   
  return isOnline; // boolean return true of false // clean up code because we use addEventListener
};

export default useOnline;