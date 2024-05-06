import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Router,
} from 'react-router-dom';
import HomePage from './pages/HomaPage';
import MainLayout from './layout/MainLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;