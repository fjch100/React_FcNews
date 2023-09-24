import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Headlines from './pages/Headlines';
import Business from './pages/Business';
import Entertainment from './pages/Entertainment';
import Science from './pages/Science';
import Technology from './pages/Technology';
import Sports from './pages/Sports';
import Health from './pages/Health';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './utils/http';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,

    children: [
      {
        index: true,
        element: <Headlines />
      },
      {
        path: 'Business',
        element: <Business />
      },
      {
        path: 'Technology',
        element: <Technology />
      },
      {
        path: 'Science',
        element: <Science />
      },
      {
        path: 'Entertainment',
        element: <Entertainment />
      },
      {
        path: 'Health',
        element: <Health />
      },
      {
        path: 'Sports',
        element: <Sports />
      },
      {
        path: '*',
        element: <Sports />
      }
    ]
  }
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
