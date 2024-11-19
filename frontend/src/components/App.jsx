import '../styles/App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<div>Root element</div>
    },
    {
      path:"/quiz",
      element:<div>Quiz Component</div>
    },
    {
      path:"/result",
      element:<div>Result Component</div>
    }
  ])
  return (
   <>
   <RouterProvider router={router}>

   </RouterProvider>
   </>
  )
}

export default App
