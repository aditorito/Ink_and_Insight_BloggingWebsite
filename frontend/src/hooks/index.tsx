import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface Blog  {
    id: number;
    title: string;
    content: string;
    author: {
        name : string
    }
    // Add more fields based on your blog API response structure
};

type ErrorType = AxiosError | null; // Error can be an AxiosError or null

export const useBlog =({ id }: {id:string}) => {
    const [loading, setLoading] = useState<boolean>(true); // Tracks loading state
    const [Blog, setBlog] = useState<Blog >(null); // Stores blogs data

    useEffect(() => {
        const fetchBlogs = async () => {
            console.log("Starting fetchBlogs...");
            try {
                const token = localStorage.getItem("token"); // Retrieve token from localStorage
                console.log("Authorization Token:", token);

                // Axios POST request
                const response = await axios.post(
                    `${BACKEND_URL}/api/v1/blog/${id}`,{},
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
    
                );

                // Log full response
                if (response.data && response.data.blog) {
                    setBlog(response.data.blog); // Update blogs state
                } else {
                    console.warn("Unexpected response format:", response.data);
                }
            } catch (error) {
                console.error("Error occurred while fetching blogs:", error);
            } finally {
                setLoading(false); // Set loading to false in all cases
                console.log("Finished fetchBlogs.");
            }
        };

        fetchBlogs(); // Call fetchBlogs inside useEffect
    }, [id]);

    return {
        loading,
        Blog,
    };

}

export const useBlogs = () => {
    const [loading, setLoading] = useState<boolean>(true); // Tracks loading state
    const [blogs, setBlogs] = useState<Blog[]>([]); // Stores blogs data
    const [error, setError] = useState<ErrorType>(null); // Tracks error state

    useEffect(() => {
        const fetchBlogs = async () => {
            console.log("Starting fetchBlogs...");
            try {
                const token = localStorage.getItem("token"); // Retrieve token from localStorage
                console.log("Authorization Token:", token);

                // Axios POST request
                const response = await axios.put(
                    `${BACKEND_URL}/api/v1/blog/allposts`,
                    {}, // Pass an empty object as the request body (if needed)
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                );

                // Log full response
                if (response.data && response.data.blogs) {
                    setBlogs(response.data.blogs); // Update blogs state
                } else {
                    console.warn("Unexpected response format:", response.data);
                }
            } catch (error) {
                console.error("Error occurred while fetching blogs:", error);
                // Type guard to ensure error is an AxiosError
                if (axios.isAxiosError(error)) {
                    setError(error); // Set AxiosError
                    console.error("Error Response Data:", error.response?.data);
                } else {
                    setError(error as AxiosError); // Handle generic errors
                    console.error("Unknown Error:", error);
                }
            } finally {
                setLoading(false); // Set loading to false in all cases
                console.log("Finished fetchBlogs.");
            }
        };

        fetchBlogs(); // Call fetchBlogs inside useEffect
    }, []);

    return {
        loading,
        blogs,
        error, // Return error state for further handling in components
    };
};

// import axios from "axios";
// import { useEffect, useState } from "react"
// import { BACKEND_URL } from "../config";


// export const useBlogs = () => {
//     const [loading, setLoading] = useState(true);
//     const [blogs, setblogs] = useState([]);

    
//     useEffect(()=>{
//         axios.post(`${BACKEND_URL}/api/v1/blog/allposts`, {
//             headers: {
//                 Authorization:localStorage.getItem("token")
//             }
//         })
//         .then(response => {
            
//             console.log(response);
//             setblogs(response.data.blogs);
//             setLoading(false);
//         }).catch()
//     },[])

//     return {
//         loading,
//         blogs
//     }

