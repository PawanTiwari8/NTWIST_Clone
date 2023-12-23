import React from "react";
import './Home.css';
import { useState,useEffect } from "react";
import Read from '../Read_Button/Read';
import Header from '../Header/Header'
import 'typeface-roboto';
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight
import BackOnTop from '../BackTop/BackOnTop';
const Home = () => {
  //This code is for on Scroll change in header
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <>
      <div className="overlay-container">
      <div className={`header ${isSticky ? 'sticky' : ''}`}><Header isScrolled={isSticky} /></div>
      <div className="home">
       <div className="content-container">
        <div className="text-container">
        <h1>Data-powered solutions</h1>
        <h1>for Industrial Excellence</h1>
         <div className="home-read">
         <Read to={'./Home'} color={'#007aff'}/>
         </div>
       </div>
        <div className="image-container">
        <img src="src\assets\n.png" alt="Description" />
        </div>
        </div>
      </div>
     <div className="card_imgright">
      <div className="text-card">
        <h1>Mine-To-Mill-To-Mine Optimization</h1>
        <br></br>
        <p> NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.
        </p>
        <br></br>
        <br></br>
        <div className="home-read">
         <Read to={'./Home'} color={'#FF3A2D'}/>
         </div>
        </div>
      <div className="image-card">
      <img src="https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-2048x1365.jpg" alt="Description" />
      </div>
     </div>

     <div className="card_imgleft">
     <div className="image-card">
      <img src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg" alt="Description" />
      </div>
      <div className="text-card">
        <h1>Sustainability</h1>
        <br></br>
        <p> Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers<br></br><br></br>
        With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.
        </p>
        <br></br>
        <br></br>
        <div className="home-read">
         <Read to={'./Home'} color={'#FF3A2D'}/>
         </div>
        </div>
     </div>

     <div className="card_imgright">
      <div className="text-card">
        <h1>Mineral Processing</h1>
        <br></br>
        <p> NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.</p>
        <br></br>
        <br></br>
        <div className="home-read">
         <Read to={'./Home'} color={'#FF3A2D'}/>
         </div>
        </div>
      <div className="image-card">
      <img src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg" alt="Description" />
      </div>
     </div>

     <div className="card_imgleft">
     <div className="image-card">
      <img src="https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png" alt="Description" />
      </div>
      <div className="text-card">
        <h1>Oil & Gas</h1>
        <br></br>
        <p> Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. <br></br><br></br>
        NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.
        </p>
        <br></br>
        <br></br>
        <div className="home-read">
         <Read to={'./Home'} color={'#FF3A2D'}/>
         </div>
        </div>
     </div>
     <BackOnTop/> 
     </div>
      </>
   
  );
};

export default Home;