import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./pages/SignIn"

import Blog from "./pages/Blog"
import SignUp from "./pages/signup"
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signin" element={ <SignIn />} />
      <Route path="/signup" element={ <SignUp />} />
      <Route path="/blog/:id" element={ <Blog />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
