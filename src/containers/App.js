import React from 'react';
import { Layout, Typography, Space } from 'antd';
import { Route, Routes, Link } from 'react-router-dom';

import './App.css';
import { Navbar, HomePage, CryptoDetails, Cryptocurrencies, News } from '../components';

const App = () => {
  return (
        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <Routes>
                        <Route exact path='/' element={<HomePage />} />
                        <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
                        <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
                        <Route exact path='/news' element={<News />} />
                    </Routes>
                </Layout>
                <div className='footer'>
                    <Typography.Title level={5} style={{'color': 'white'}}>
                        Cryptoverse <br />
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/news'>News</Link>
                    </Space>
                
                </div>
            </div>
        </div>
    );
};

export default App;
