import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CRUD.css';

function EditItem() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve item data from local storage
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    const item = storedItems.find(item => item.id === id);
    if (item) {
      setTitle(item.title);
      setDescription(item.description);
    }
  }, [id]);

  const handleSave = () => {
    if (title.trim() === '' || description.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    // Update item in local storage
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    const updatedItems = storedItems.map(item =>
      item.id === id ? { ...item, title, description } : item
    );
    localStorage.setItem('items', JSON.stringify(updatedItems));

    navigate('/items');
  };

  return (
    <div className="crud-container">
      <h2>Edit Item</h2>
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
      <button onClick={handleSave} className="crud-button">Save Changes</button>
    </div>
  );
}

export default EditItem;
