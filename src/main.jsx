import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
import ListedBooksPage from './Components/ListedBooksPage/ListedBooksPage';
import RenderBarChart from './Components/Chart/Chart';

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
        element: <RenderBarChart></RenderBarChart>
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

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById('root')
);