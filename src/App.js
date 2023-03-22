import ReactDOM from "react-dom/client"
import {createBrowserRouter, RouterProvider, Route,} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Form from "./pages/Form"
import Experiences from "./pages/Experiences"
import Signup from "./pages/Signup"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/form",
    element: <Form/>
  },
  {
    path: "/experiences",
    element: <Experiences/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },

])

function App() {
  return (
    <div className="h-full overflow-auto">
      <div>
        <Header/>
        <RouterProvider router={router}/>
        <Footer/>
      </div>
  
    </div>
  );
}

export default App;
