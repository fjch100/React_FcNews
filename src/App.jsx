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

// const newsColecctions = [
//   {
//     category: 'Headlines',
//     colecctiondb: 'Headlines',
//     url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=16c97751c4254e3eb593aa7a7975a3b2`,
//     id: 'headlineNewsId'
//   },
//   {
//     category: 'Business',
//     colecctiondb: 'Business',
//     url: `https://newsapi.org/v2/top-headlines?country=us&category=Business&apiKey=16c97751c4254e3eb593aa7a7975a3b2`,
//     id: 'businessNewsId'
//   },
//   {
//     category: 'Technology',
//     colecctiondb: 'Technology',
//     url: `https://newsapi.org/v2/top-headlines?country=us&category=Technology&apiKey=16c97751c4254e3eb593aa7a7975a3b2`,
//     id: 'technologyNewsId'
//   },
//   {
//     category: 'Science',
//     colecctiondb: 'Science',
//     url: `https://newsapi.org/v2/top-headlines?country=us&category=Science&apiKey=16c97751c4254e3eb593aa7a7975a3b2`,
//     id: 'scienceNewsId'
//   },
//   {
//     category: 'Entertainment',
//     colecctiondb: 'Entertainment',
//     url: `https://newsapi.org/v2/top-headlines?country=us&category=Entertainment&apiKey=16c97751c4254e3eb593aa7a7975a3b2`,
//     id: 'entertainmentNewsId'
//   },
//   {
//     category: 'Health',
//     colecctiondb: 'Health',
//     url: `https://newsapi.org/v2/top-headlines?country=us&category=Health&apiKey=16c97751c4254e3eb593aa7a7975a3b2`,
//     id: 'healthNewsId'
//   },
//   {
//     category: 'Sports',
//     colecctiondb: 'Sports',
//     url: `https://newsapi.org/v2/top-headlines?country=us&category=Sports&apiKey=16c97751c4254e3eb593aa7a7975a3b2`,
//     id: 'SportsNewsId'
//   }
// ];

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
