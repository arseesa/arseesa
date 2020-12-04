import React from 'react';
import { Timeline } from 'antd';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const Projacts = (props) => {
  return (
    
      <Card style={{ width: 500, padding:20,height:600}}>
        <h3>Projects</h3>
      <Timeline style={{padding:40,margin:20}}>
    <Timeline.Item>จัดทำฐานข้อมูลเงินเดือนพนักงานให้กับระคำนวนเงินเดือนของพนักงาน 7-11</Timeline.Item>
    <Timeline.Item>จัดทำเว็บไซต์ศิษย์เก่าในส่วยของนักศึกษาปัจจุบันและอาจารย์</Timeline.Item>
    <Timeline.Item>โครงงานเรื่องเว็บไซต์แนะนำเส้นทางการท่องเที่ยวชุมชนจังหวัดสุราษฎร์ธานีได้ทำการรวบรวมและจักทำหน้าเว็บไซต์แนะนำเส้นทางของชุมชนต่างๆในจังหวัดสุราษฎร์ธานี</Timeline.Item>
    <Timeline.Item>จัดทำฐานข้อมูลเงินเดือนพนักงานให้กับระคำนวนเงินเดือนของพนักงาน 7-11</Timeline.Item>
    <Timeline.Item>จัดทำเว็บไซต์ศิษย์เก่าในส่วยของนักศึกษาปัจจุบันและอาจารย์</Timeline.Item>
    <Timeline.Item>โครงงานเรื่องเว็บไซต์แนะนำเส้นทางการท่องเที่ยวชุมชนจังหวัดสุราษฎร์ธานีได้ทำการรวบรวมและจักทำหน้าเว็บไซต์แนะนำเส้นทางของชุมชนต่างๆในจังหวัดสุราษฎร์ธานี</Timeline.Item>
    
  </Timeline>
  </Card>

  );
};

export default Projacts;