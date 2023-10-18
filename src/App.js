import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Version1 from './Views/Pages/Version1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Version1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
