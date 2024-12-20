import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./pages/SignIn"

import Blog from "./pages/Blog"
import SignUp from "./pages/signup"
import { Blogs } from "./pages/Blogs"
import { Publish } from "./pages/Publish"
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signin" element={ <SignIn />} />
      <Route path="/signup" element={ <SignUp />} />
      <Route path="/blogs" element={ <Blogs />} />
      <Route path="/blog/:id" element={ <Blog />} />
      <Route path="/blog/publish" element={ <Publish /> } />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
