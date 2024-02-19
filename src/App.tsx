// App.js
import React, { useState } from 'react';
import { Layout, Typography, Space } from 'antd';
import SearchFilter from './components/SearchFilter';
import CountriesList from './components/CountriesList';

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  const [filter, setFilter] = useState('');
  const [groupBy, setGroupBy] = useState('');

  return (
    <Layout className="layout">
      <Header style={{ padding: 0, background: '#fff' }}>
        <Title level={2} style={{ margin: '10px 10px', textAlign: 'center' }}>
          Countries List
        </Title>
      </Header>
      <Content style={{ padding: '24px', marginTop: '4px' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <SearchFilter onFilterChange={setFilter} onGroupByChange={setGroupBy} />
          <CountriesList filter={filter} groupBy={groupBy} />
        </Space>
      </Content>
    </Layout>
  );
}

export default App;
