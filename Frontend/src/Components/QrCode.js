import { useLocation } from 'react-router-dom';
import Web3 from 'web3';
import { useNavigate } from 'react-router-dom';
import USDT_ABI from './USDT_ABI.json';
import Navbar from './Navbar';
 // Update the path accordingly

// Parse the JSON string into an array
const parsedUSDT_ABI = JSON.parse(USDT_ABI);

export default function QrCode() {
  const navigate = useNavigate();
  const location = useLocation();
  const { amt, add, src, asset } = location.state;

  const openMetamaskWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const fromAddress = window.ethereum.selectedAddress;
        const toAddress = add;
        const amount = amt;

        const usdtContractAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7';

        const web3 = new Web3(window.ethereum);

        // Use the parsed ABI
        const usdtContract = new web3.eth.Contract(parsedUSDT_ABI, usdtContractAddress);

        const transferResult = await usdtContract.methods.transfer(toAddress, amount).send({ from: fromAddress });

        if (transferResult.status) {
          window.alert('USDT Transfer Successful');
        } else {
          window.alert('USDT Transfer Failed');
        }
      } catch (error) {
        console.log("Error: ",error)
        window.alert(`Error sending transaction: ${error.message}`);
      }
    } else {
      alert('Please install and log in to Metamask to initiate the transaction.');
    }
  };

  const copyImage = () => {
    // Create a canvas element and draw the QR code image on it
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const image = document.getElementById('qrcode');
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);

    // Convert the canvas to a blob and write it to the clipboard
    canvas.toBlob((blob) => {
      navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])
        .then(() => {
          window.alert('QR code image copied to clipboard.');
        })
        .catch((error) => {
          window.alert(`Error copying image: ${error.message}`);
        });
    });
  };

  const copyUrl = () => {
    // Get the URL from the QR code image source
    const url = src.replace(/^data:image\/png;base64,/, '');

    // Write the URL to the clipboard
    navigator.clipboard.writeText(url)
      .then(() => {
        window.alert('QR code URL copied to clipboard.');
      })
      .catch((error) => {
        window.alert(`Error copying URL: ${error.message}`);
      });
  };

  return (
    <>
    <Navbar/>
      <h1 style={{"marginTop":"9rem"}}><span>S</span>can and <span>P</span>ay</h1>
      <p>Amount to Receive : {amt} {asset}</p>
      <p>Receiver's Account : {add}</p>
      <div className="qrcode-container">
        <img id="qrcode" src={src} alt="qrcode" />
        <div className="qrcode-overlay"></div>
      </div>
      <br />
      <div className='text-center'>
      <button style={{"marginInline":"auto"}} className="metamask-button" onClick={openMetamaskWallet}>Pay Using Metamask</button>
      </div>
      <style>
        {`:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-family: Arial, sans-serif;
  --font-size: 16px;
}

h1 {
  font-family: var(--font-family);
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
}

h1 span {
  color: var(--primary-color);
}

p {
  font-family: var(--font-family);
  font-size: var(--font-size);
  text-align: center;
  margin-bottom: 10px;
}

.qrcode-container {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
}

.qrcode-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.qrcode-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.1), transparent),
    linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1), transparent);
  background-size: 50% 100%, 100% 50%;
  background-position: left top, left top;
  background-repeat: no-repeat;
  animation: scan 3s infinite;
}

@keyframes scan {
  0% {
    background-position: left top, left top;
  }
  50% {
    background-position: right top, left bottom;
  }
  100% {
    background-position: left top, left top;
  }
}

.buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

button, a {
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: bold;
  color: white;
  background-color: var(--primary-color);
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
}

button:focus, button:hover, a:focus, a:hover {
  background-color: orange;
}

.metamask-button {
  margin-top: 20px;
}

@media (max-width: 400px) {
  h1 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.8rem;
  }

  .qrcode-container {
    width: 200px;
    height: 200px;
  }

  button, a {
    font-size: 0.8rem;
    padding: 5px;
  }
}
`}
      </style>
    </>
  )
}
