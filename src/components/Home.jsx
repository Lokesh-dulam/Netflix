import { LOGO_URL } from "../utils/constants"
import Footer from "./Footer"

const Home = () => {
  return (
    <div>
      <div className="h-20 w-screen bg-fuchsia-200 flex justify-between">
        <img 
        className="h-20 w-20 cursor-pointer"
        src={LOGO_URL}
        alt="logo"/>
        <ul className="flex items-center mr-1">
          <li className="p-2 font-semibold mr-4 hover:underline hover:decoration-2 hover:text-purple-500">Home</li>
          <li className="p-2 font-semibold mr-4 hover:underline hover:decoration-2 hover:text-purple-500">About Us</li>
          <li className="p-2 font-semibold mr-4 hover:underline hover:decoration-2 hover:text-purple-500">Contact Us</li>
        </ul>
      </div>
      <div className="flex flex-wrap">
      <div className="h-60 w-40 rounded-lg bg-slate-200 shadow-xl m-4">
        <img src={LOGO_URL} alt="logo" className="h-20 w-20 p-4"/>
        <h1 className="p-2 font-semibold">Name of the Resturant</h1>
        <p className="p-2">Cost: $230</p>
        <p className="p-2">Rating: 4</p>
      </div>
      <div className="h-60 w-40 rounded-lg bg-slate-200 shadow-xl m-4"></div>
      <div className="h-60 w-40 rounded-lg bg-slate-200 shadow-xl m-4"></div>
      <div className="h-60 w-40 rounded-lg bg-slate-200 shadow-xl m-4"></div>
      <div className="h-60 w-40 rounded-lg bg-slate-200 shadow-xl m-4"></div>
      <div className="h-60 w-40 rounded-lg bg-slate-200 shadow-xl m-4"></div>
      <div className="h-60 w-40 rounded-lg bg-slate-200 shadow-xl m-4"></div>
      <div className="h-60 w-40 rounded-lg bg-slate-200 shadow-xl m-4"></div>
      <div className="h-60 w-40 rounded-lg bg-slate-200 shadow-xl m-4"></div>
      <div className="h-60 w-40 rounded-lg bg-slate-200 shadow-xl m-4"></div>
      <div className="h-60 w-40 rounded-lg bg-slate-200 shadow-xl m-4"></div>
      <div className="h-60 w-40 rounded-lg bg-slate-200 shadow-xl m-4"></div>
      <div className="h-60 w-40 rounded-lg bg-slate-200 shadow-xl m-4"></div>
      <div className="h-60 w-40 rounded-lg bg-slate-200 shadow-xl m-4"></div>
      </div>
      <Footer/>
    </div>
  )
}
export default Home