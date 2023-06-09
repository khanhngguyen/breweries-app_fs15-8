import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

//pages
import Home, { breweriesLoader } from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
//styles
import './App.css';

//layouts
import RootLayout from './layouts/RootLayout';
import BreweryDetails, { breweryDetailsLoader } from './pages/BreweryDetails';
import BreweryError from './pages/BreweryError';
import Contact, { contactSubmit } from './pages/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route 
      path='/' 
      element={<Home />} 
      loader={breweriesLoader}
      >
      </Route>
      <Route
      path='brewery/:id'
      element={<BreweryDetails />}
      loader={breweryDetailsLoader}
      errorElement={<BreweryError />}
      />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} action={contactSubmit}/>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
   <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
