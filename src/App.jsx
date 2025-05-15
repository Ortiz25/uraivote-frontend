import VoterEducationPortal from "./pages/home"
import ElectivePositionsPortal from "./pages/positions"
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <VoterEducationPortal/>, 
   
  },

  { 
    path: "/positions", 
    element: <ElectivePositionsPortal/>, 
  
  },
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}
export default App
