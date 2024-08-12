import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CRUD.css';

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items from local storage
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  const deleteItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    setItems(updatedItems);
  };

  return (
    <div className="crud-container">
      <h2>Item List</h2>
      {items.length === 0 ? (
        <p>No items available.</p>
      ) : (
        <ul className="item-list">
          {items.map(item => (
            <li key={item.id} className="item">
              <Link to={`/items/${item.id}`} className="item-link">
                <h3>{item.title}</h3>
              </Link>
              <div className='delete-edit'>
                <button onClick={() => deleteItem(item.id)} className="crud-button item-delete">Delete</button>
                <Link to={`/items/${item.id}/edit`} className="crud-button item-edit">Edit</Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemList;
