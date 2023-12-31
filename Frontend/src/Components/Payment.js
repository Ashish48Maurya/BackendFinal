import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import qrCode from 'qrcode';
import Navbar from './Navbar';

export default function Payment() {
  const navigate = useNavigate();
  const [amt, setAmt] = useState('');
  const [add, setAdd] = useState('');
  const [asset, setAsset] = useState('USDT');
  const [error, setError] = useState('');

  const generateQRCode = async () => {
    if (!amt || !add || !asset) {
      setError("All Fields Are Required!");
      return;
    }

    const queryString = `amt=${encodeURIComponent(amt)}&add=${encodeURIComponent(add)}&asset=${encodeURIComponent(asset)}`;

    const url = await qrCode.toDataURL(`http://localhost:3000/pay?${queryString}`);
    navigate('/qrCode', { state: { amt, add, asset, src: url } });
  };

  const formatAmount = (e) => {
    const value = e.target.value;
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });
    setAmt(formatter.format(value));
  };

  const validateInput = (e) => {
    const input = e.target;
    if (input.validity.valid) {
      setError('');
    } else {
      setError(input.validationMessage);
    }
  };

  return (
    <div className="form-container">
      <Navbar/>
      <form className='form '>
        <div className="form-group">
          <label htmlFor="address">Your Address</label>
          <input id="address"
            placeholder="Wallet Address"
            value={add}
            onChange={(e) => setAdd(e.target.value)}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input id="amount"
            placeholder="Amount"
            value={amt}
            onChange={formatAmount}
            onInput={validateInput}
            min="0"
            step="0.01"
            required />
        </div>
        <div className="form-group">
          <label htmlFor="asset">Asset</label>
          <select id="asset" value={asset} onChange={(e) => setAsset(e.target.value)}>
            <option value="USDT">USDT</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
          </select>
        </div>
        <button onClick={generateQRCode}>Continue</button>
        {error && <span className="error">{error}</span>}
      </form>
      <style>
      {`:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-family: Arial, sans-serif;
  --font-size: 16px;
}

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.form {
  width: 500px;
  max-width: 90%;
  padding: 20px;
  border: 1px solid var(--secondary-color);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
  margin-bottom: 20px;
}

label {
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: bold;
  color: var(--secondary-color);
  text-align: right;
}

input, select {
  font-family: var(--font-family);
  font-size: var(--font-size);
  padding: 10px;
  border: 1px solid var(--secondary-color);
  border-radius: 5px;
  outline: none;
}

input:focus, input:hover, select:focus, select:hover {
  border-color: var(--primary-color);
}

button {
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: bold;
  color: white;
  background-color: var(--primary-color);
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:focus, button:hover {
  background-color: orange;
}

.error {
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: red;
  margin-top: 10px;
}

`}
      </style>
    </div>
  );
}
