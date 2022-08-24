import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //eslint-disable-line
import './App.css';
import BookList from './components/bookList';
import Header from './header';
import Categories from './components/categories';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
