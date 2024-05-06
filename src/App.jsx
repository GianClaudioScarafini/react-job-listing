import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import HomePage from './pages/HomaPage';
import MainLayout from './layout/MainLayout'
import JobsPage from './pages/JobsPage';
import NotFounPage from './pages/NotFounPage';
import JobPage from './pages/JobPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<JobPage />} />
      <Route path='*' element={<NotFounPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;