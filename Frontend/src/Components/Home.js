import React from "react";
import Navbar from "./Navbar"
// import ChatBot from "./Chatbot";

const Home = () => {
  return (
    <>

     {/* <ChatBot/> */}
    <Navbar/>
      <main style={{"display":"flex","justifyContent":"center","alignItems":"center"}}>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div style={{marginLeft:"75px"}} className="hero-content">
              <p>Simple Swift Secure</p>
              <h1>Revolutionize Transactions with Blockchain QR Code Technology!</h1>
              <p>
              No more waiting for bank confirmations – enjoy swift and efficient transactions that keep your revenue flowing seamlessly
              </p>
              <div className="btn btn-group">
                <button >Login</button>
                <button>SignUp</button>
              </div>
            </div>

            <div className="hero-image">
              <img 
             
                src="/images/Home.svg"
                alt="coding together"
                width="500"
                height="500"
                
              />
            </div>
          </div>
        </section>
      </main>
      <style>
        {`
          :root {
            --primary-color: #007bff;
            --secondary-color: #6c757d;
            --font-family: Arial, sans-serif;
            --font-size: 16px;
          }
          
          .section-hero {
            background-color: var(--primary-color);
            color: white;
            padding: 40px;
          }

          .hero-content p {
            font-size: 1.2rem;
            font-weight: bold;
          }

          .hero-content h1 {
            font-size: 2.5rem;
            margin-top: 20px;
            margin-bottom: 20px;
          }

          .btn {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
          }

          .btn button {
            font-size: 1.2rem;
            font-weight: bold;
            color: white;
            background-color: var(--secondary-color);
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .btn button:hover {
            background-color: darken(var(--secondary-color), 10%);
          }

          .hero-image {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .hero-image img {
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          @media (max-width: 800px) {
            .grid {
              display: block;
            }

            .hero-content h1 {
              font-size: 2rem;
            }

            .hero-content p {
              font-size: 1rem;
            }

            .btn button {
              font-size: 1rem;
              padding: 5px 10px;
            }

            .hero-image img {
              width: 300px;
              height: 375px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
