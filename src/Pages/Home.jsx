import React from 'react'
import NavbarComponent from '../Components/Navbar'
import './Home.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
function Home() {
    const categories = [
        { name: 'Engine', icon: 'https://i.postimg.cc/vZd7Wgqz/7188c353f3379f392f606fcd9c3ecc40.png' },
        { name: 'Gearbox', icon: 'https://i.postimg.cc/Dy5fcR5M/66f0e5af51608283fcd62cb726f62d36.png' },
        { name: 'Suspension', icon: 'https://i.postimg.cc/SRN3Q18n/aa814e653d5a5e256e126a768a99b9fa.png' },
        { name: 'Wheels and brakes', icon: 'https://i.postimg.cc/0jQX1MRm/214c1ef898098108ef0290847b6e070f.png' },
        { name: 'Battery', icon: 'https://i.postimg.cc/PrCV6wMn/dc26c6ec2897007ee4dc513a71e46820.png' },
        { name: 'Lights', icon: 'https://i.postimg.cc/Xvb27D6n/193297155c48f35f06bbd7632dfe482d.png' },
        { name: 'Starter motor', icon: 'https://i.postimg.cc/Xvb27D6n/193297155c48f35f06bbd7632dfe482d.png' },
        { name: 'Wheels and brakes', icon: 'https://i.postimg.cc/0jQX1MRm/214c1ef898098108ef0290847b6e070f.png' },
        
      ];

      const settings = {
        dots: true,
        infinite: true,
        speed: 1000, // Adjust speed here
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable automatic sliding
        autoplaySpeed: 1000 // Adjust autoplay speed here
      };
    
      const cards = [
        {
          imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
          title: "Car Break light",
          subtitle: "45% OFF"
        },
        {
          imgSrc: "https://i.postimg.cc/W3z7fRPb/9b43ff92fb9625bc0cf59a822a6d63ca.png",
          title: "Gorf Mobile Holder",
          subtitle: "Grab Now"
        },
        {
          imgSrc: "https://i.postimg.cc/B6hPktBd/2b9e2de85bb754de38a14b3886366f52.png",
          title: "Car Body Cover",
          subtitle: "From $200"
        },
        {
          imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
          title: "Car Break light",
          subtitle: "Shop Now!"
        },
        {
          imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
          title: "Car Break light",
          subtitle: "45% OFF"
        },
        {
          imgSrc: "https://i.postimg.cc/W3z7fRPb/9b43ff92fb9625bc0cf59a822a6d63ca.png",
          title: "Gorf Mobile Holder",
          subtitle: "Grab Now"
        },
        {
          imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
          title: "Car Break light",
          subtitle: "45% OFF"
        },
        {
          imgSrc: "https://i.postimg.cc/W3z7fRPb/9b43ff92fb9625bc0cf59a822a6d63ca.png",
          title: "Gorf Mobile Holder",
          subtitle: "Grab Now"
        },
        {
          imgSrc: "https://i.postimg.cc/B6hPktBd/2b9e2de85bb754de38a14b3886366f52.png",
          title: "Car Body Cover",
          subtitle: "From $200"
        },
        {
          imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
          title: "Car Break light",
          subtitle: "Shop Now!"
        },
        {
          imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
          title: "Car Break light",
          subtitle: "45% OFF"
        },
        {
          imgSrc: "https://i.postimg.cc/W3z7fRPb/9b43ff92fb9625bc0cf59a822a6d63ca.png",
          title: "Gorf Mobile Holder",
          subtitle: "Grab Now"
        }
        
        // Add more card data as needed
      ];
      const secondcards = [
        {
          imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
          title: "Car Break light",
          subtitle: "45% OFF"
        },
        {
          imgSrc: "https://i.postimg.cc/W3z7fRPb/9b43ff92fb9625bc0cf59a822a6d63ca.png",
          title: "Gorf Mobile Holder",
          subtitle: "Grab Now"
        },
        {
          imgSrc: "https://i.postimg.cc/B6hPktBd/2b9e2de85bb754de38a14b3886366f52.png",
          title: "Car Body Cover",
          subtitle: "From $200"
        },
        {
          imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
          title: "Car Break light",
          subtitle: "Shop Now!"
        },
        {
          imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
          title: "Car Break light",
          subtitle: "45% OFF"
        },
        {
          imgSrc: "https://i.postimg.cc/W3z7fRPb/9b43ff92fb9625bc0cf59a822a6d63ca.png",
          title: "Gorf Mobile Holder",
          subtitle: "Grab Now"
        },
        {
          imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
          title: "Car Break light",
          subtitle: "45% OFF"
        },
        {
          imgSrc: "https://i.postimg.cc/W3z7fRPb/9b43ff92fb9625bc0cf59a822a6d63ca.png",
          title: "Gorf Mobile Holder",
          subtitle: "Grab Now"
        },
        {
          imgSrc: "https://i.postimg.cc/B6hPktBd/2b9e2de85bb754de38a14b3886366f52.png",
          title: "Car Body Cover",
          subtitle: "From $200"
        },
        {
          imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
          title: "Car Break light",
          subtitle: "Shop Now!"
        },
        {
          imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
          title: "Car Break light",
          subtitle: "45% OFF"
        },
        {
          imgSrc: "https://i.postimg.cc/W3z7fRPb/9b43ff92fb9625bc0cf59a822a6d63ca.png",
          title: "Gorf Mobile Holder",
          subtitle: "Grab Now"
        }
        
        // Add more card data as needed
      ];
// const recentlyViewedItems = [
//     { title: 'Car Break light', subtitle: '45% OFF' },
//     { title: 'Gorf Mobile Holder', subtitle: 'Grab Now' },
//     { title: 'Car Body Cover', subtitle: 'From $200' },
//     { title: 'Car Break light', subtitle: 'Shop Now!' },
//     { title: 'Car Break light', subtitle: '45% OFF' },
//     { title: 'Gorf Mobile Holder', subtitle: 'Grab Now' },
//   ];
  
//   const ItemCard = ({ title, subtitle }) => (
//     <div className="item-card">
//       <img src="https://i.postimg.cc/NF98x1vN/backlight.png" alt={title} />
//       <div className="item-info">
//         <p className="item-title">{title}</p>
//         <p className="item-subtitle">{subtitle}</p>
//       </div>
//     </div>
//   );
  
//   const RecentlyViewedSection = ({ title, items }) => (
//     <div className="section">
//       <h2 className="section-title">{title}</h2>
//       <div className="item-list">
//         {items.map((item, index) => (
//           <ItemCard key={index} title={item.title} subtitle={item.subtitle} />
//         ))}
//       </div>
//     </div>
//   );


  return (
    
    <div style={{overflow:"hidden"}}>
        {/* navbar */}
        <div>   
               <NavbarComponent/>
        </div>
        {/*  */}
        {/* carousel */}

     <center> <div className="carousel-container mt-5">
        <Slider {...settings}>
          <div className='slid'>
          <center>  <img className='mainimg'  src="https://i.postimg.cc/DZ9rz8RR/dd27ff13f17623b463c00b07971a794c.jpg" alt="" /></center>
          </div>
          <div className='slid'>
          <center>  <img className='mainimg'  src="https://i.postimg.cc/HLCrQQVV/de06b376842c42f0c404726cd9c4c79e.jpg" alt="" /></center>
          </div>
          <div className='slid'>
          <center>  <img className='mainimg'  src="https://i.postimg.cc/cLfH4rXZ/7165427ca77deed9db56253c3c7c5bf5.jpg" alt="" /></center>
          </div>
          <div className='slid'>
          <center>  <img className='mainimg'  src="https://i.postimg.cc/pTLXZkxX/c7b1e48cca6b994561cf6e76325f4088.jpg" alt="" /></center>
          </div>
        </Slider>
       
      </div></center>
      {/*  */}

{/* cards */}
<Row className='mt-5 ms-4 container-fluid'>
<Col md={3} className='mmm'>   <Card style={{ width: '20rem',padding:"20px" ,border:"1px solid white"}}>
      <Card.Img variant="top"  src="https://i.postimg.cc/5yp8SnXW/bikee.jpg" />
      <Card.Body>
       <center> <Card.Title>Bike Spare</Card.Title></center>
       
      </Card.Body>
    </Card></Col>
<Col md={3} className='mmm'><Card style={{ width: '20rem',padding:"20px" ,border:"1px solid white"}}>
      <Card.Img variant="top"  src="https://i.postimg.cc/dQzFqw3d/lkkkkkkkkkkkkkkkkkkk.jpg" />
      <Card.Body>
      <center> <Card.Title>Car Spare</Card.Title></center>
      </Card.Body>
    </Card></Col>
<Col md={3} className='mmm'><Card style={{ width: '20rem',padding:"20px" ,border:"1px solid white"}}>
      <Card.Img variant="top" src="https://i.postimg.cc/02gTTnX0/a-llllllllllls.jpg" />
      <Card.Body>
      <center> <Card.Title>Accessories</Card.Title></center>
      </Card.Body>
    </Card></Col>
<Col md={3} className='mmm'><Card style={{ width: '20rem',padding:"20px" ,border:"1px solid white"}}>
      <Card.Img variant="top" src="https://i.postimg.cc/fTK88fGL/a-KMSSMLSssssaa.jpg" />
      <Card.Body>
      <center> <Card.Title>My Vehicles</Card.Title></center>
      </Card.Body>
    </Card></Col>
</Row>

{/* categories */}
<h3 className='ms-5'>Categories</h3>
      <div className="categories">
       
      {categories.map((category, index) => (
        <div className="category" key={index}>
          <div className="iconss">
            <img src={category.icon} alt={category.name} />
          </div>
          <div className="name">{category.name}</div>
        </div>
      ))}
    </div>
    <div className="categories">
      {categories.map((category, index) => (
        <div className="category" key={index}>
          <div className="iconss">
            <img src={category.icon} alt={category.name} />
          </div>
          <div className="name">{category.name}</div>
        </div>
      ))}
    </div>
    <div className="categories">
      {categories.map((category, index) => (
        <div className="category" key={index}>
          <div className="iconss">
            <img src={category.icon} alt={category.name} />
          </div>
          <div className="name">{category.name}</div>
        </div>
      ))}
    </div>
    <div className="categories">
      {categories.map((category, index) => (
        <div className="category" key={index}>
          <div className="iconss">
            <img src={category.icon} alt={category.name} />
          </div>
          <div className="name">{category.name}</div>
        </div>
      ))}
    </div>
{/*  */}

    {/* <div className="apps">
    <RecentlyViewedSection title="Recently Viewed" items={recentlyViewedItems} />
  </div> */}

  {/* Recently Viewed */}
  <div>
  <h3 className='ms-5'>Recently Viewed</h3>
  <div className="scroll-container mt-5">
      <Row className='recviewed' style={{ flexWrap: 'nowrap', overflowX: 'auto' }}>
        <div className="scrolling-wrapper">
          {cards.map((card, index) => (
            <Col xs={6} sm={4} md={2} key={index} className="card-style">
              <Card style={{ width: '12rem', padding: "14px", border: "1px solid white", boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)" }}>
                <Card.Img variant="top" src={card.imgSrc} />
                <Card.Body>
                  <center><Card.Title style={{ fontSize: "16px" }}>{card.title}</Card.Title></center>
                  <center><Card.Title style={{ fontSize: "18px" }}><b>{card.subtitle}</b></Card.Title></center>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      </Row>
    </div>

  </div>

  {/*  */}
  {/*   Top sales */}
  <div>
  <h3 className='ms-5 mt-5'>Top Sales</h3>
  <div>

  <div className="scroll-container mt-5 mb-5">
      <Row className='recviewed' style={{ flexWrap: 'nowrap', overflowX: 'auto' }}>
        <div className="scrolling-wrapper">
          {secondcards.map((card, index) => (
            <Col xs={6} sm={4} md={2} key={index} className="card-style">
              <Card style={{ width: '12rem', padding: "14px", border: "1px solid white", boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)" }}>
                <Card.Img variant="top" src={card.imgSrc} />
                <Card.Body>
                  <center><Card.Title style={{ fontSize: "16px" }}>{card.title}</Card.Title></center>
                  <center><Card.Title style={{ fontSize: "18px" }}><b>{card.subtitle}</b></Card.Title></center>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      </Row>
    </div>

  </div>

  </div>

  {/*  */}

    </div>
  )
}

export default Home
