import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Root } from './pages/Root';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
