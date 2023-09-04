import React from 'react';

import { AudioOutlined } from '@ant-design/icons';

import { Input, Space } from 'antd';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const onSearch = (value: string) => console.log(value);

const InputSearch: React.FC = () => (
  <Space direction="vertical">
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    
  </Space>
);

export default InputSearch;
