// import React from 'react'
// import { toast } from 'react-toastify'
// import "./NetworkStatus.scss"


// const NetworkStatus = (isOnline : boolean, message : string) => {
//   // if(isOnline){
//   //     toast.success(message, {
//   //         position: "bottom-center", autoClose: 4000, hideProgressBar: false,
//   //         closeOnClick: true, pauseOnHover: false, draggable: true, progress: undefined
//   //     });
//   // }
//   // else{
//   //     toast.error(message, {
//   //         position: "bottom-center", autoClose: 4000, hideProgressBar: false,
//   //         closeOnClick: true, pauseOnHover: false, draggable: true, progress: undefined
//   //     });
//   // }

//   const netload = {
//     color : isOnline == true ? "blue" : "red",
//     border: isOnline == true ? "8px solid green" : "8px solid red"
//   }

//   const networkStatus = () => {
//     window.addEventListener("load", () => {
//       // 1st, we set the correct status when the page loads
//       navigator.onLine
//         ? NetworkStatus(true, "You are online")
//         : NetworkStatus(false, "You are offline");
  
//       // now we listen for network status changes
//       window.addEventListener("online", () => {
//         NetworkStatus(true, "You are online back !!");
//       });
  
//       window.addEventListener("offline", () => {
//         NetworkStatus(false, "Lost Network Connection !!");
//       });
//     });
  
//   };
  
//   return <div className="status" style={netload}>
//     {isOnline == true ? "Online" : "Offline"}
//   </div>;
// }

// export default NetworkStatus