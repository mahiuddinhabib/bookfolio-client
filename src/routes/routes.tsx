import App from '@/App';
import AddBook from '@/pages/AddBook';
import AllBooks from '@/pages/AllBooks';
import EditBook from '@/pages/EditBook';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Register from '@/pages/Register';
import BookDetail from '@/pages/SingleBook';
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
        path: '/single-book/:id',
        element: <BookDetail />,
      },
      {
        path: '/add-book',
        element: <AddBook />,
      },
      {
        path: '/edit-book/:id',
        element: <EditBook />,
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
