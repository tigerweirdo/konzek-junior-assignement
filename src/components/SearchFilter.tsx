import React, { useState } from 'react';
import { Input, Select, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;

interface SearchFilterProps {
    onFilterChange: (filter: string) => void;
    onGroupByChange: (groupBy: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onFilterChange, onGroupByChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [groupBy, setGroupBy] = useState('');

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                suffix={<SearchOutlined />}
                style={{ width: 180, marginRight: '8px', borderRadius: '15px' }}
            />
            <Select
  value={groupBy}
  onChange={(value) => setGroupBy(value)}
  style={{ width: 140, marginRight: '8px', borderRadius: '15px' }}
  placeholder="Group by"
>
  <Option value="">None</Option>
  <Option value="continent">Continent</Option>
  <Option value="language">Language</Option>
  <Option value="currency">Currency</Option> 
</Select>
            <Button
                type="primary"
                shape="round"
                onClick={() => { onFilterChange(searchTerm); onGroupByChange(groupBy); }}
                style={{ borderRadius: '15px' }}
            >
                Apply
            </Button>
        </div>
    );
};

export default SearchFilter;
