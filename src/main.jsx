import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import BookDetails from './Components/BookDetails/BookDetails';
import ListBooksCard from './Components/ListBooksCard/ListBooksCard';
import Chart from './Components/Chart/Chart';
import ListedBooksPage from './Components/ListedBooksPage/ListedBooksPage';
import WishlistBooksCard from './Components/Wishlist/Wishlist';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/books',
        element: <ListedBooksPage></ListedBooksPage>,
        loader: () => fetch('../Books.json'),
      },
      {
        path: '/read',
        element: <ListBooksCard></ListBooksCard>,
        loader: () => fetch('../Books.json'),
      },
      {
        path: '/wishlist',
        element: <WishlistBooksCard></WishlistBooksCard>,
        loader: () => fetch('../Books.json'),
      },

      {
        path: '/read1',
        element: <Chart></Chart>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../Books.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
