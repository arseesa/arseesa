import React, { Component } from 'react';
import {Progress
  } from 'reactstrap';
  
function Footer() {
    return (
      <div>
    <h4>Skill</h4>
    
    <div className="text-center">html 70%</div>
    <Progress color="warning" value={70} />
    
    <div className="text-center">css 70%</div>
    <Progress color="warning" value={70} />
    
    <div className="text-center">php 50%</div>
    <Progress color="warning" value={50} />
    
    </div>
        
    );
  }
  
  export default Footer;
  
