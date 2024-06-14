import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Service.css'
import { Grid, Typography } from '@mui/material';


function Services() {
  return (
    <div className='p-2'>
      <h2 style={{color:"#143d82"}}>Maintainace Service <span style={{color:"#00a2ff"}}>Part</span></h2>

      <div><Row>
        <Col md={2}>
        <div className='mt-4' style={{justifyContent:"space-between",display:"flex"}}>
            <h2 style={{color:"#143d82"}}>Filters</h2>
                <Link  className='mt-3' style={{fontSize:"14px"}}>RESET</Link>
        </div>
        <div className="filter-container mt-3">
        <label htmlFor="car-maker" style={{fontWeight:"600",color:"#231962"}}>Vehicle</label>
          <div className="filter mt-3">
           
            <select id="car-maker" style={{padding:"10px",fontSize:"14px",color:"#231962",width:"100%"}}>
              <option style={{}}>Choose car maker</option>
            </select>
          </div>
           </div>
           <div className="filter-container mt-3">
        <label htmlFor="car-maker" style={{fontWeight:"600",color:"#143d82"}}>Vehicle</label>
          <div className="filter mt-3">
           
            <select id="car-maker" style={{padding:"10px",fontSize:"14px",color:"#143d82",width:"100%"}}>
              <option style={{}}>Choose car maker</option>
            </select>
          </div>
           </div>
        </Col>
        <Col md={8} className='ms-5 mt-5'>
        <Grid container spacing={4} sx={{ margin: '40px 0' }}>
      <Grid item xs={12}>
      <Typography variant="h4" style={{ color: "#143d82" }}>
          Maintainace Service Part
        </Typography>      </Grid>

      {[
        { title: 'Belt', src: 'https://i.postimg.cc/MpPBmRjf/ddbeb81.jpg' },
        { title: 'Brake', src: 'https://i.postimg.cc/BnqyKWxQ/437bfd0.jpg' },
        { title: 'Catalogue Service manual', src: 'https://i.postimg.cc/FKzBTjWM/140c4a2.jpg' },
        { title: 'Clutch', src: 'https://i.postimg.cc/pTn1HPtk/e8cb288.jpg' },
        { title: 'Engine Oil', src: 'https://i.postimg.cc/gjFtc1zp/4614ecf.webp' },
        { title: 'Filter', src: 'https://i.postimg.cc/mZC6pZjg/33d30ef.jpg' },
        { title: 'Glow Plug', src: 'https://i.postimg.cc/9Q8xwDmJ/d6d71f0.jpg' },
        { title: 'Horn', src: 'https://i.postimg.cc/Bb0NfDpQ/d5b3ac7.jpg' },
        { title: 'Light', src: 'https://i.postimg.cc/6p3cKBrR/53380d3.webp' },
        { title: 'Repair Service Kit', src: 'https://i.postimg.cc/FKb7nLYx/5f75a07.jpg' },
        { title: 'Shock Absorber and strut', src: 'https://i.postimg.cc/V6YdykMP/f26073e.jpg' },
        { title: 'Spark Plug', src: 'https://i.postimg.cc/X7yNzChy/acd0058.jpg' },
        { title: 'Wiper blade and sets', src: 'https://i.postimg.cc/RCpq89Z2/1053d82.jpg' },
      ].map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index} sx={{ marginTop: '16px' }}>
          <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" style={{ padding: '15px', height: '9rem' }} src={item.src} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Grid>
      ))}
    </Grid>
        </Col>
        

        </Row></div>
    </div>
  )
}

export default Services
