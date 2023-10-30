import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts';
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost.jsx'
import Info from './pages/Info'


const App = () => {

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts />
    },
    {
      path:"/edit/:id",
      element: <EditPost />
    },
    {
      path:"/new",
      element: <CreatePost />
    },
    {
      path: "/info/:id",
      element: <Info />
  }
  ]);

  return ( 

    <div className="App">

      <div className="header">
        <h1> Crewmates </h1>
      </div>
        {element}
    </div>

  );
}

export default App;