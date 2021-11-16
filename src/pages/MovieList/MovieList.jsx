import React from 'react';
import { Layout, Card } from 'antd';

const { Meta } = Card;

export default function MovieList() {
  const mockData = {
    original_title: 'the jungle book',
    genres: [{
      id: 13,
      name: 'Adventure',
    }, {
      id: 18,
      name: 'Drama',
    }, {
      id: 20,
      name: 'Family',
    }, {
      id: 21,
      name: 'Fantasy',
    }],
    vote_average: 4.8,
    runtime: 139,
    overview: 'There are growing dangers in the wizarding world of 1926 New York. Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding',
  };

  return (
    <Layout className="movieList-container">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </Layout>
  );
}
