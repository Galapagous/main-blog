import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Dashboard from "./pages/Dashboard"
import Project from "./pages/Project"
import About from "./pages/About"
import Header from "./component/Header"
import Footer from "./component/Footer"


function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
