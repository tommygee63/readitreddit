import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={Root} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
