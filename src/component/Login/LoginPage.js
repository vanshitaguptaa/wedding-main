import React, { useState } from "react";
import "./LoginPage.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

// import image from '../Images/wallpaper.jpg'

const LoginPage = () => {

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const emailInput = document.querySelector('input[type="text"]');
      const passwordInput = document.querySelector('input[type="password"]');

      const response = await axios.post("http://localhost:5000/api/login", {
        email: emailInput.value,
        password: passwordInput.value,
      });

      const { status, message, token } = response.data;
        // Store the token in local storage
        
      if (status) {
        // Login successful
        localStorage.setItem("token", JSON.stringify(token));
        console.log(message);
        console.log(token);
        // Handle any additional actions after successful login
        toast.success("Login Successfully");
        setTimeout(() => {
          navigate("/blog")
        },2000);
      } 
    } catch (error) {
      console.error(error);
      toast.error("Username or Password incorrect")
     
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="cover1">
        <div className="container">
          <div className="row">
            <div className="cover">
              <h1>Login</h1>
              <input type="text" placeholder="username" />
              <input type="password" placeholder="Password" />
              <div className="login-button" onClick={handleLogin}>
                Login
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="touch-container">
        <div className="bold">
          <h1>Get in touch</h1>
        </div>
        <h2>mail@domain.com</h2>
        <p>
          Feel free to write us. We'll consider all suggestions, ideas and
          projects.
        </p>
      </div>
      <div className="footer">
        <hr />
        <p>Copyright @ Ajileminds </p>
      </div>
    </>
  );
};

export default LoginPage;








// import React, { useState } from "react";
// import "./LoginPage.css";
// import Navbar from "../Navbar/Navbar";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// // import image from '../Images/wallpaper.jpg'

// const LoginPage = () => {

//   const navigate = useNavigate()

//   const handleLogin = async () => {
//     try {
//       const emailInput = document.querySelector('input[type="text"]');
//       const passwordInput = document.querySelector('input[type="password"]');

//       const response = await axios.post("http://localhost:5000/api/login", {
//         email: emailInput.value,
//         password: passwordInput.value,
//       });

//       const { status, message, token } = response.data;

//       if (status) {
//         // Login successful
//         console.log(message);
//         console.log(token);
//         // Handle any additional actions after successful login
//         toast.success("Login Successfully");
//         setTimeout(() => {
//           navigate("/blog")
//         },2000);
//       } 
//     } catch (error) {
//       console.error(error);
//       toast.error("Username or Password incorrect")
     
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <ToastContainer />
//       <div className="cover1">
//         <div className="container">
//           <div className="row">
//             <div className="cover">
//               <h1>Login</h1>
//               <input type="text" placeholder="username" />
//               <input type="password" placeholder="Password" />
//               <div className="login-button" onClick={handleLogin}>
//                 Login
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="touch-container">
//         <div className="bold">
//           <h1>Get in touch</h1>
//         </div>
//         <h2>mail@domain.com</h2>
//         <p>
//           Feel free to write us. We'll consider all suggestions, ideas and
//           projects.
//         </p>
//       </div>
//       <div className="footer">
//         <hr />
//         <p>Copyright @ Ajileminds </p>
//       </div>
//     </>
//   );
// };

// export default LoginPage;














// // import React, { useState } from "react";
// // import "./LoginPage.css";
// // import Navbar from "../Navbar/Navbar";
// // // import image from '../Images/wallpaper.jpg'
// // const LoginPage = () => {
// //   const [popupStyle, showPopup] = useState("hide");
// //   const popup = () => {
// //     showPopup("login-popup");
// //     setTimeout(() => showPopup("hide"), 3000);
// //   };
// //   return (
// //     <>
// //       <Navbar />
// //       <div className="cover1">
// //         <div className="container">
// //           <div className="row">
// //             <div className="cover">
// //               <h1>Login</h1>
// //               <input type="text" placeholder="username" />
// //               <input type="password" placeholder="Password" />
// //               <div className="login-button" onClick={popup}>
// //                 Login
// //               </div>
// //               <div className={popupStyle}>
// //                 <h3>Login Failed</h3>
// //                 <p>Username or Password incorrect</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="touch-container">
// //         <div className="bold">
// //           <h1>Get in touch</h1>
// //         </div>
// //         <h2>mail@domain.com</h2>
// //         <p>
// //           Feel free to write us. We’ll consider all suggestions, ideas and
// //           projects.
// //         </p>
// //       </div>
// //       <div className="footer">
// //         <hr />
// //         <p>Copyright @ Ajileminds </p>
// //       </div>
// //     </>
// //   );
// // };

// // export default LoginPage;
