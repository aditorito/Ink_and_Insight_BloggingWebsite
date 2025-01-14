import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { RighSideAuthPage } from "../components/RighSideAuthPage";
import { useState } from "react";
import { SignupInput } from "@aditorito/medium-clone";
import axios from "axios";



export const Auth = ({ type } : {type: "signup" | "signin" }) => {
    const [postInputs, setpostInputs] = useState<SignupInput>({
        name:"",
        username:"",
        email:"",
        password:""
    })
    
  return (
    <div className="flex flex-col min-h-screen">

    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side - Sign Up Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Create an account</h1>
          <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
            {type === "signup" ? " Already have an account?  " : "Don't Have Account! "}

            <Link to={type === "signin" ? "/signup" : "/signin"} className="text-gray-600 underline">
              { type === "signin" ? "SignUp":"Login"}
            </Link>
          </p>

          <form className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm md:text-base"
                onChange={(e)=>{
                    setpostInputs(c => ({
                        ...c,
                        username: e.target.value
                    }))                    
                }}
              />
            </div>

            { type == 'signup' ? <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm md:text-base"
                onChange={(e)=>{
                    setpostInputs(({
                        ...postInputs,
                        name: e.target.value
                    }))                    
                }}
              />
            </div> : null }
            { type == 'signup' ? <div>
               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="m@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm md:text-base"
                onChange={(e)=>{
                    setpostInputs(c => ({
                        ...c,
                        email: e.target.value
                    }))                    
                }}
              />
            </div> : null }

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm md:text-base"
                onChange={(e)=>{
                    setpostInputs(c => ({
                        ...c,
                        password: e.target.value
                    }))                    
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors text-sm md:text-base"
            >
              {type === "signup" ? "Sign up" : "Sign in"}
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - Testimonial */}
      <RighSideAuthPage/>
    </div>
    <Footer/>
       </div>

  );
};








