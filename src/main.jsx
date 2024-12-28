import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './Components/Github/Github.jsx'
// const router = createBrowserRouter( [{
//   path:'/',
//   element:<Layout/>,
// children: [
//   {
//     path:"",
//     element:<Home/>
//   },
//   {
// path:"about",
// element:  <About/>

//   },

//  { path:"contact",
// element:  <Contact/>

//   },

//   { path:"github",
//     element:  <Github/>
    
//       }
// ]
// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route
      loader={githubInfoLoader}
       path='github'
        element={<Github />}
         />
    </Route>
  )
);  
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
