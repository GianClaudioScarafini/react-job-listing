import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Router,
} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobLIstings from "./components/JobLIstings";
import ViewAllJobs from "./components/ViewAllJobs";

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>my App</h1>} />)
);

const App = () => {
  return  <RouterProvider router={router} /> ;
};

export default App;