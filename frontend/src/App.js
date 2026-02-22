import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  // This is the "Delivery Boy" going to the Backend to get data
  useEffect(() => {
    axios.get('https://potential-disco-jj6qpq6x4rx5fqwvp-5000.app.github.dev//products') // We will fix this URL in a second
      .then(response => setProducts(response.data))
      .catch(err => console.log("Bridge error:", err));
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center' }}>
      <nav style={{ background: '#004a99', color: 'white', padding: '10px' }}>
        <h1>Amigo Bangladesh Portfolio</h1>
      </nav>

      <h2>Our Real-Time Products:</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        {products.map(item => (
          <div key={item._id} style={{ border: '2px solid #004a99', padding: '20px', borderRadius: '10px' }}>
            <h3>{item.name}</h3>
            <p>Price: {item.price} BDT</p>
            <span style={{ background: '#28a745', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;