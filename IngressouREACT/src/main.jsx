import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/Login.jsx'
import Home from './routes/Home.jsx'
import Register from './routes/Register.jsx'
import Search from './routes/Search.jsx'
import InsertEvent from './components/InsertEvent.jsx'
import EventPage from './routes/EventPage.jsx'
import Compra from "./routes/Compra.jsx";
import { UserProvider } from './context/UserContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'search', element: <Search /> },
      { path: 'insert', element: <InsertEvent /> },
      { path: 'event/:id', element: <EventPage /> },
      { path: 'compra/:id', element: <Compra /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
)
