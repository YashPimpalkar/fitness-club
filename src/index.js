import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home' 
import Login from './pages/Login' 
import ExerciseDetail from './pages/ExerciseDetail' 
import Protected from './components/Protected' 
import {createBrowserRouter, createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import Pricing from './components/Pricing';

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path='login' element={<Login />} />
      <Route path='/'  element={<Protected />} >
      <Route path='/'index element={<Home />} />
  <Route path='/' element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/pricing/" element={<Pricing />} />
      </Route>
    </Route>

)
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
