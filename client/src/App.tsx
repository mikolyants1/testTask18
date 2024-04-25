import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './App.css';
import MainRoute from './views/paths/MainRoute';
import Home from './views/ui/home/Home';
import Personal from './views/ui/Personal/Personal';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {ChakraProvider, theme} from '@chakra-ui/react';

const query:QueryClient = new QueryClient({
  defaultOptions:{
     queries:{
       refetchOnWindowFocus:false
     }
  }
});

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainRoute />,
    children:[
      {
        index:true,
        element:<Home />
      },
      {
        path:"/:id",
        element:<Personal />
      }
    ]
  }
]);

function App():JSX.Element {
  return (
     <ChakraProvider theme={theme}>
       <QueryClientProvider client={query}>
         <RouterProvider router={router} />
       </QueryClientProvider>
     </ChakraProvider>
  );
}

export default App;
