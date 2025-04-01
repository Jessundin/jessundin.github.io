import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App';
import Checkout from './Checkout2';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
