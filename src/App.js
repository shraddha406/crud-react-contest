import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
// import Dashboard from './components/Dashboard';
import CreateItem from './components/CRUD/CreateItem';
import ItemList from './components/CRUD/ItemList';
import EditItem from './components/CRUD/EditItem';
import ItemDetails from './components/CRUD/ItemDetails';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const updateItem = (updatedItem) => {
    setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
  };

  const deleteItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/"/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/items/new" element={<CreateItem addItem={addItem} />} />
          <Route path="/items" element={<ItemList items={items} deleteItem={deleteItem} />} />
          <Route path="/items/:id/edit" element={<EditItem />} />
          <Route path="/items/:id" element={<ItemDetails items={items} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
