import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase"
import {useState,useRef} from "react"
import {checkValidData} from "../utils/validate"
import {updateProfile} from "firebase/auth"
import {BG_IMG} from "../utils/constants"
const Login=()=>{
    const [isSignInForm,setisSignInForm]=useState(true)
    const [errormsg,setErrorMsg]=useState(null)
    const navigate=useNavigate()
    const email=useRef(null)
    const password=useRef(null)
    const handleButtonClick=()=>{
        const msg=checkValidData(email.current.value,password.current.value)
        setErrorMsg(msg)
        if(msg) return;
        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    
    updateProfile(auth.user, {
      displayName: "Lokesh", photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
    }).catch((error) => {
      setErrorMsg(error)
    });
    navigate("/home")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode+"-"+errorMessage)
  });

        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    navigate("/home")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode+"-"+errorMessage)
  });
        }
    }
    const toggleSignInForm=()=>{
        setisSignInForm(!isSignInForm)
    }
    return(
        <div>
            <div className="absolute">
            <img className="h-screen bg-cover w-screen" src={BG_IMG}
            alt="bgimage"/>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} 
            className="w-3/12 absolute p-12 bg-transparent shadow-2xl shadow-rose-950 ml-[800px] my-36 mx-auto rounded-lg bg-opacity-80">
                <h1 className="font-bold m-3 text-2xl">{isSignInForm ? "Sign In":"Sign Up"}</h1>
                {!isSignInForm && (
                    <input
                    type="text"
                    placeholder="Full Name"
                    className="p-4 my-4 w-full bg-lime-500 text-black rounded-lg placeholder-black"
                  />
                    )}
                <input ref={email} type="text" placeholder="Email" 
                className="p-4 my-4 w-full bg-lime-500 text-black rounded-lg placeholder-black"/>
                <input ref={password} type="password" placeholder="Password" 
                className="p-4 my-4 w-full bg-lime-500 text-black rounded-lg placeholder-black"/>
                <p className="text-red-500 font-bold">{errormsg}</p>
                <button 
                className="p-4 my-6 bg-red-700 w-full rounded-lg text-black font-semibold"
                 onClick={handleButtonClick}>{isSignInForm ? "Sign In":"Sign Up"}</button>
                <p className="p-2 text-center">{isSignInForm&& "OR"}</p>
                <p className="text-center cursor-pointer m-2 p-2" onClick={toggleSignInForm}>
                {isSignInForm ? "New to Food App❔Sign Up":"Already A User,  Sign In"}</p>
            </form>
        </div>
    )
}
export default Login