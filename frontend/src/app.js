import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const calculate = async (operation) => {
    try {
      setError(null);
      const response = await fetch(`http://webtools.local/${operation}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ num1: parseFloat(num1), num2: parseFloat(num2) }),
      });
      
      const data = await response.json();
      if (response.ok) {
        setResult(data.result);
      } else {
        setError(data.error || 'Calculation failed');
      }
    } catch (err) {
      setError('Service unavailable');
    }
  };

  return (
    <div className="App">
      <h1>Kubernetes Webtools</h1>
      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second number"
        />
      </div>
      <div>
        <button onClick={() => calculate('add')}>Add</button>
        {/* Add more operation buttons as services are implemented */}
      </div>
      {result !== null && <div>Result: {result}</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}