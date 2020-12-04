import Aboutme from './components/Aboutme';
import Activity from './components/Activity';
import About from './components/About';
import Projects from './components/Projects';
import React, { useState, useEffect, } from 'react';
import { Card, CardTitle, } from 'reactstrap';
import './App.css';
import 'antd/dist/antd.css';
import 'weather-icons/css/weather-icons.min.css';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
function App() {
  const [data, setdata] = useState(null);
  useEffect(() => {
    
    fetch('https://5ed5b9428769250016e63743.mockapi.io/users')
      .then(response => response.json())
      .then(data => setdata(data));

  }, []);
  
  return (

    <div className="App">
      <Layout>
        <Header>
          <Aboutme />
          <About />
          <Activity />
          <div>
            {data && data.map((item, index) => (
              <Card body className="text-center" key={index}>
                <img className="img" src={item?.avatar}/>
                <h3>Name : {item?.name}</h3>
                <h2>Phone : {item?.phone}</h2>
                <h2>phonemm</h2>
                
              </Card>
            ))}
            
          </div>
          <Projects />
        </Header>

        <Layout>
          <Sider>
            <div>

            </div>
          </Sider>
          <Content></Content>
        </Layout>
        <Footer></Footer>
        <Footer>Footer</Footer>
      </Layout>






    </div>
  );
}


export default App;
