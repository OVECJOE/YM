import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'
import ErrorPage from './pages/ErrorPage';

import AdminPage from './pages/AdminPage'
import IndexPage from './pages/IndexPage'
import Overview from './components/Overview';

const router = createBrowserRouter([
  {
    path: '/admin',
    element: <AdminPage />,
    children: [
      {
        path: '',
        element: <Overview />
      },
      {
        path: 'profile',
        element: <div>Profile</div>
      },
      {
        path: 'new',
        element: <div>Create New Chapter or Book</div>
      },
      {
        path: 'chapters',
        element: <div>Chapters</div>
      },
      {
        path: 'books',
        element: <div>Books</div>
      }
    ]
  },
  {
    path: '/',
    element: <IndexPage />,
    errorElement: <ErrorPage />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
