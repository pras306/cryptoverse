import React, { useState } from 'react';
import { Row, Card, Col, Typography, Avatar, Select } from 'antd';
import moment from 'moment';

import './News.css';
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import Loader from '../Loader/Loader';

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

const News = ({ simplified }) => {

  const [ newsCategory, setNewsCategory ] = useState('CryptoCurrency');
  const count = simplified ? 6 : 12;
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count });
  const { data: cryptosList } = useGetCryptosQuery(100);

  if(!cryptoNews?.value) return <Loader />

  return (
    <>
      <Row gutter={[ 24, 24 ]}>
        {!simplified && (
          <Col span={24}>
            <Select 
              showSearch
              className='select-news'
              placeholder='Select a Crypto'
              optionFilterProp='children'
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input,option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Select.Option value='Cryptocurrency'>Cryptocurrency</Select.Option>
              {cryptosList?.data?.coins.map((coin) => <Select.Option key={coin.name} value={coin.name}>{coin.name}</Select.Option>)}
            </Select>
          </Col>
        )}
        {cryptoNews?.value.map((news, idx) => (
          <Col xs={24} sm={12} lg={8} key={idx}>
            <Card hoverable className='news-card'>
              <a href={news.url} target='_blank' rel='noreferrer'>
                <div className='news-image-container'>
                  <Typography.Title level={4} className='news-title'>{news.name}</Typography.Title>
                  <img style={{ maxWidth: '200px', maxHeight: '100px' }} src={news?.image?.thumbnail?.contentUrl || demoImage} alt='News' />
                </div>
                <p>
                  {news.description > 100 ? `${news.description.substring(0,100)} ...` : news.description }
                </p>
                <div className='provider-container'>
                  <div>
                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt='news' />
                    <Typography.Text className='provider-name'>{news.provider[0]?.name}</Typography.Text>
                  </div>
                  <Typography.Text>{moment(news.datePublished).startOf('ss').fromNow()}</Typography.Text>        
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
};

export default News;