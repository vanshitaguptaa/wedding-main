import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "../Blog/blog.css";
import Navbar from "../Navbar/Navbar";

const Blog = () => {
  const imageFileRef = useRef(null);
  const detailsRef = useRef(null);
  const navigate = useNavigate();
  
  const [limit, setLimit] = useState(6)
  const [token, setToken] = useState(null);
  const [blogs, setBlogs] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    let tokenData = localStorage.getItem("token");
    let tokenExpiry;

    if (tokenData) {
      tokenExpiry = new Date(JSON.parse(tokenData).expireTokenDate);
      setToken(JSON.parse(tokenData).token);
    }

    let currentDate = new Date();

    if (currentDate > tokenExpiry) {
      localStorage.removeItem("token");
    }

    fetchBlogs(); // Fetch blogs when the component mounts
  }, []);
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/getallblog?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.data.status) {  
        setBlogs([ ...blogs, ...response.data.savedBlog])
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    }
  };
  

  useEffect(() => {
      fetchBlogs();
  }, [page]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imageFile = imageFileRef.current.files[0];
      const details = detailsRef.current.value;

      if (!imageFile || !details) {
        toast.error("Please provide all the requested fields properly");
        return;
      }
      const formData = new FormData();
      formData.append("Image", imageFile);
      formData.append("details", details);

      const response = await axios.post(
        "http://localhost:5000/api/createBlog",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.status) {
        console.log(response.data.message);
        imageFileRef.current.value = null;
        detailsRef.current.value = "";
        toast.success("Blog created successfully");
        fetchBlogs(); // Fetch blogs again after creating a new one
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    }
  };
  const handleDelete = async (blogId) => {
    try {
      if (!blogId) {
        toast.error("Invalid blog ID");
        return;
      }
  
      const response = await axios.delete(`http://localhost:5000/api/deleteBlog?blogId=${blogId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (response.data.status) {
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== blogId));
        toast.success("Blog deleted successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete blog.");
    }
  };
  
  
  

  return (
    <>
      <Navbar />
      <div  className="create_blog">
        {token && (
          <>
            <h1 className="blog">Create Blog</h1>
            <form className="form1" onSubmit={handleSubmit}>
              <div >
                <label htmlFor="imageFile" className="ipt1">Image File</label>
                <input
                className="ipt"
                  type="file"
                  id="imageFile"
                  accept="image/jpeg, image/png"
                  ref={imageFileRef}
                />
              </div>
              <div>
                <label htmlFor="details" className="ipt1">Details</label>

                <textarea
                className="ipt3"
                  id="details"
                  ref={detailsRef}
                  style={{ color: "black" }}
                ></textarea>
              </div>
              <button type="submit" className="btn2">Create</button>
            </form>
            <hr />
          </>
        )}
        <h1 className="blog">All Blogs</h1>
        <div>
          {blogs.map((blog) => (
            <div key={blog.id}>
              <img
                src={`http://localhost:5000/${blog.ImagePath.substring(
                  blog.ImagePath.indexOf("compressed")
                )}`}
                alt="Blog" className="blg"
              />
              <h2>{blog.Details}</h2>
              {token && (
              <button onClick={() => handleDelete(blog._id)}>Delete</button>
            )}
            </div>
          ))}
        </div>
        {blogs.length >= limit ? (
            <div className="buttons fn_desc">
            <button
              onClick={() => {
                setPage(page + 1);
                setLimit(limit + 6);
              }}
              className="neoh_fn_buttons only_text"
            >
              Load more
            </button>
            </div>
          ) : null}
        <ToastContainer />
      </div>
    </>
  );
};

export default Blog;






// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
// import "../Blog/blog.css";
// import Navbar from "../Navbar/Navbar";

// const Blog = () => {
//   const imageFileRef = useRef(null);
//   const detailsRef = useRef(null);
//   const navigate = useNavigate();

  
//   const [token, setToken] = useState(null);
//   const [blogs, setBlogs] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   useEffect(() => {
//     let tokenData = localStorage.getItem("token");
//     let tokenExpiry;

//     if (tokenData) {
//       tokenExpiry = new Date(JSON.parse(tokenData).expireTokenDate);
//       setToken(JSON.parse(tokenData).token);
//     }

//     let currentDate = new Date();

//     if (currentDate > tokenExpiry) {
//       localStorage.removeItem("token");
//     }

//     fetchBlogs(); // Fetch blogs when the component mounts
//   }, []);
//   const fetchBlogs = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/getallblog", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         params: {
//           page: currentPage,
//         },
//       });
  
//       if (response.data.status) {
//         setBlogs([])
//         setBlogs([...blogs, ...response.data.savedBlog]);
//         setTotalPages(response.data.totalPages);
//         console.log([...blogs, ...response.data.savedBlog]);
       

//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong. Please try again.");
//     }
//   };
  
//   const handleScroll = () => {
//     const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
//     if (scrollTop + clientHeight >= scrollHeight - 20 && currentPage < totalPages) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [currentPage, totalPages]);
  
//   useEffect(() => {
//     if (currentPage > 1 && currentPage <= totalPages) {
//       fetchBlogs();
//     }
//   }, [currentPage, totalPages]);

//   // const fetchBlogs = async () => {
//   //   try {
//   //     const response = await axios.get("http://localhost:5000/api/getallblog", {
//   //       headers: {
//   //         Authorization: `Bearer ${token}`,
//   //       },
//   //     });

//   //     if (response.data.status) {
//   //       setBlogs(response.data.savedBlog);
//   //     }
//   //     console.log(blogs);
//   //   } catch (error) {
//   //     console.log(error);
//   //     toast.error("Something went wrong. Please try again.");
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const imageFile = imageFileRef.current.files[0];
//       const details = detailsRef.current.value;

//       if (!imageFile || !details) {
//         toast.error("Please provide all the requested fields properly");
//         return;
//       }
//       const formData = new FormData();
//       formData.append("Image", imageFile);
//       formData.append("details", details);

//       const response = await axios.post(
//         "http://localhost:5000/api/createBlog",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.data.status) {
//         console.log(response.data.message);
//         imageFileRef.current.value = null;
//         detailsRef.current.value = "";
//         toast.success("Blog created successfully");
//         fetchBlogs(); // Fetch blogs again after creating a new one
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div  className="create_blog">
//         {token && (
//           <>
//             <h1 className="blog">Create Blog</h1>
//             <form className="form1" onSubmit={handleSubmit}>
//               <div >
//                 <label htmlFor="imageFile" className="ipt1">Image File</label>
//                 <input
//                 className="ipt"
//                   type="file"
//                   id="imageFile"
//                   accept="image/jpeg, image/png"
//                   ref={imageFileRef}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="details" className="ipt1">Details</label>

//                 <textarea
//                 className="ipt3"
//                   id="details"
//                   ref={detailsRef}
//                   style={{ color: "black" }}
//                 ></textarea>
//               </div>
//               <button type="submit" className="btn2">Create</button>
//             </form>
//             <hr />
//           </>
//         )}
//         <h1 className="blog">All Blogs</h1>
//         <div>
//           {blogs.map((blog) => (
//             <div key={blog.id}>
//               <img
//                 src={`http://localhost:5000/${blog.ImagePath.substring(
//                   blog.ImagePath.indexOf("compressed")
//                 )}`}
//                 alt="Blog" className="blg"
//               />
//               <h2>{blog.Details}</h2>
//             </div>
//           ))}
//         </div>
//         <ToastContainer />
//       </div>
//     </>
//   );
// };

// export default Blog;
