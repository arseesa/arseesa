import React from 'react';
import { UncontrolledCollapse, Button, Col, Card,CardTitle,CardText,Row} from 'reactstrap';

const Project = () => (
  <div>
    <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
    ปี 2
    </Button>
    <Button color="primary" id="toggler1" style={{ marginBottom: '1rem' }}>
    ปี 3
    </Button>
    <Button color="primary" id="toggler2" style={{ marginBottom: '1rem' }}>
    ปี 4
    </Button>
    <UncontrolledCollapse toggler="#toggler">
    <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>ระบบฐานข้อมูลเงินเดือนพนักงาน</CardTitle>
                <CardText>จัดทำฐานข้อมูลเงินเดือนพนักงานให้กับระคำนวนเงินเดือนของพนักงาน 7-11</CardText>
                
              </Card>
            </Col>
          </Row>
    </UncontrolledCollapse>
    <UncontrolledCollapse toggler="#toggler1">
    <Row>
            <Col sm="6">
              <Card body>
              <CardTitle>เว็บไซต์ศิษย์เก่า</CardTitle>
                <CardText>จัดทำเว็บไซต์ศิษย์เก่าในส่วยของนักศึกษาปัจจุบันและอาจารย์</CardText>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <Card body>
              <CardTitle>โครงงานเรื่องเว็บไซต์แนะนำเส้นทางการท่องเที่ยวชุมชนจังหวัดสุราษฎร์ธานี</CardTitle>
                <CardText>โครงงานเรื่องเว็บไซต์แนะนำเส้นทางการท่องเที่ยวชุมชนจังหวัดสุราษฎร์ธานีได้ทำการรวบรวมและจักทำหน้าเว็บไซต์แนะนำเส้นทางของชุมชนต่างๆในจังหวัดสุราษฎร์ธานี</CardText>
              </Card>
            </Col>
          </Row>
    </UncontrolledCollapse>
    <UncontrolledCollapse toggler="#toggler2">
    <Row>
            <Col sm="6">
              <Card body>
              <CardTitle>โครงงานเรื่องเว็บไซต์แนะนำเส้นทางการท่องเที่ยวชุมชนจังหวัดสุราษฎร์ธานี</CardTitle>
                <CardText>โครงงานเรื่องเว็บไซต์แนะนำเส้นทางการท่องเที่ยวชุมชนจังหวัดสุราษฎร์ธานีได้ทำการรวบรวมและจักทำหน้าเว็บไซต์แนะนำเส้นทางของชุมชนต่างๆในจังหวัดสุราษฎร์ธานี</CardText>
                
              </Card>
            </Col>
          </Row>
    </UncontrolledCollapse>
  </div>
);

export default Project;