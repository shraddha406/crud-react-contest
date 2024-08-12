import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CRUD.css';

function CreateItem() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleCreate = () => {
    if (title.trim() === '' || description.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    const newItem = {
      id: Date.now().toString(), // Unique ID for the item
      title,
      description
    };

    storedItems.push(newItem);
    localStorage.setItem('items', JSON.stringify(storedItems));

    setTitle('');
    setDescription('');
    navigate('/items');
  };

  return (
    <div className="crud-container">
      <h2>Create New Item</h2>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        className="crud-input"
      />
      <textarea 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        className="crud-input"
      />
      <button onClick={handleCreate} className="crud-button">Create Item</button>
    </div>
  );
}

export default CreateItem;
