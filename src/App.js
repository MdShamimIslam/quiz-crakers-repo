import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import TopicDetails from './components/TopicDetails/TopicDetails';
import NotFound from './components/NotFound/NotFound';

function App() {
  const router=createBrowserRouter([
   {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/topics',
        loader: async()=> fetch(' https://openapi.programming-hero.com/api/quiz'),
        element:<Topics></Topics>
      },
      {
        path:'/topic/:topicId',
        loader:async({params}) =>fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`),
        element:<TopicDetails></TopicDetails>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
    ],
    
   },
   {
    path:'*',
    element:<NotFound></NotFound>
  }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
