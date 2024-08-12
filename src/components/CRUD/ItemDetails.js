import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CRUD.css';

function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    const foundItem = storedItems.find(item => item.id === id);
    setItem(foundItem);
  }, [id]);

  if (!item) {
    return <p>Item not found.</p>;
  }

  return (
    <div className="crud-container">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
}

export default ItemDetails;
