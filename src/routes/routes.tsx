import App from '@/App';
import AddBook from '@/pages/AddBook';
import AllBooks from '@/pages/AllBooks';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Register from '@/pages/Register';
import SingleBook from '@/pages/SingleBook';
import { createBrowserRouter } from 'react-router-dom';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/all-books',
        element: <AllBooks />,
      },
      {
        path: '/single-book',
        element: <SingleBook />,
      },
      {
        path: '/add-book',
        element: <AddBook />,
      },
      /* {
        path: '/checkout',
        element: (
          <PrivateRoute>
            <Checkout />,
          </PrivateRoute>
        ),
      }, */
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
