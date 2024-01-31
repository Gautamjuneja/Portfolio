import React from 'react';
import Card from './card';
import "./styles/card.css";

const CardContainer = () => {
  // Example data
  const cardsData = [
    {
      title: "Wallpy",
      content: 'It is a wallpaper downloading Website specially designed for anime lovers. To provide them high quality wallpapers for their laptop screens.',
      imageUrl: 'https://imgs.search.brave.com/PA-wunCn1CAWmEJrGxnf4eTAaq8g-mBwLLsep47hF-g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYW5pbWUtcHJv/ZmlsZS1zOHd1Yno4/MnR1NnltY2VkLmpw/Zw',
      websiteLink: 'https://wallpygj.netlify.app/'
    },
    {
      title: "G4's Mobiles",
      content: 'This website is made in order for you find the best Smartphone for you and where you can buy them with proper specification.',
      imageUrl: 'https://imgs.search.brave.com/j6cxzbjPEB7b0CZ5Y1uLvBaP3Ue9zwc26OBv3N_q58I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y25ldC5jb20vYS9p/bWcvcmVzaXplL2Rm/OWE4NzJiODFiZTNl/ZjE0Y2MzZGY1NDI5/M2JmZjllYjJjZGE5/YjMvaHViLzIwMjMv/MDUvMDQvYmY4YWU2/ZjktMTY4My00NTg4/LWIyMWMtYjgwYTUy/NDc5NjdkL21vdG9y/b2xhLXRoaW5rcGhv/bmUtMjIuanBnP2F1/dG89d2VicCZmaXQ9/Y3JvcCZoZWlnaHQ9/NTc2JndpZHRoPTc2/OA',
      websiteLink: 'https://gautamjunejamobiles.netlify.app/',
    },
    {
        title: "ZomiCrypto",
        content: 'This website gives you the graphical representation of the some famous cryptocurrencies that are available in the market',
        imageUrl: 'https://imgs.search.brave.com/TxUOcn4UyoEA89ptuK-yWeT-fZhEZGVjh_sWV1zj25M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLmZv/b2xjZG4uY29tL21l/ZGlhL2R1YnMvaW1h/Z2VzL0V0aGVyZXVt/X0JpdGNvaW5fQ3J5/cHRvY3VycmVuY3lf/RGlnaXRhbF9CbG9j/a2Mud2lkdGgtNjAw/LmpwZw',
        websiteLink: 'https://gautamjuneja.github.io/Zomi_Clone/dashbord.html',
    },
  ];

  return (
    <div className="cardCont">
    <div className="projHead"><h1>Projects</h1></div>
    
    <div className="card-container" id='pro'>
      
      
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          content={card.content}
          imageUrl={card.imageUrl}
          websiteLink={card.websiteLink}
        />
      ))}
    </div>
    </div>
  );
};

export default CardContainer;
