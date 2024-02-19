import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../graphql/queries';
import { Country, FilterGroupProps } from '../types';
import { Collapse, Spin, Alert, List, Card } from 'antd';

const { Panel } = Collapse;

const CountriesList: React.FC<FilterGroupProps> = ({ filter, groupBy }) => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);
  const [groupedCountries, setGroupedCountries] = useState<Record<string, Country[]>>({});
  const [selectedCountryName, setSelectedCountryName] = useState<string | null>(null);
  const [activeKeys, setActiveKeys] = useState<string[]>([]);

  useEffect(() => {
    if (data && data.countries) {
      let processedCountries: Country[] = filter ? data.countries.filter((country: Country) =>
        country.name.toLowerCase().includes(filter.toLowerCase())) : data.countries;
  
      if (groupBy) {
        const groups = processedCountries.reduce((acc: Record<string, Country[]>, country: Country) => {
          let keys: string[] = [];
          if (groupBy === 'continent') {
            keys.push(country.continent.name);
          } else if (groupBy === 'language') {
            country.languages.forEach(lang => keys.push(lang.name));
          } else if (groupBy === 'currency') {
            keys.push(country.currency);
          }
  
          keys.forEach(key => {
            if (!acc[key]) acc[key] = [];
            acc[key].push(country);
          });
          return acc;
        }, {});
  
        setGroupedCountries(groups);
        setActiveKeys(Object.keys(groups));
      } else {
        setGroupedCountries({ 'All': processedCountries });
        setActiveKeys(['All']);
      }
    }
  }, [data, filter, groupBy]);
  useEffect(() => {
    const allCountries = Object.values(groupedCountries).flat();
    if (allCountries.length > 0) {
      const autoSelectIndex = Math.min(9, allCountries.length)-1;
      setSelectedCountryName(allCountries[autoSelectIndex].name);
    }
  }, [groupedCountries]);
  useEffect(() => {
    if (groupedCountries['All']) {
      setActiveKeys(['All']);
    }
  }, [groupedCountries]);

  const handlePanelChange = (keys: string[] | string) => {
    setActiveKeys(typeof keys === 'string' ? [keys] : keys);
  };


  if (loading) return <Spin tip="Loading..."></Spin>;
  if (error) return <Alert message="Error" description="An error occurred while fetching the countries." type="error" showIcon />;

  return (
    <Collapse activeKey={activeKeys} onChange={handlePanelChange}>
      {Object.entries(groupedCountries).map(([groupName, countries]) => (
        <Panel header={groupName} key={groupName}>
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={countries}
            renderItem={country => (
              <List.Item>
                <Card
                  size="small"
                  style={{
                    cursor: 'pointer',
                    borderColor: country.name === selectedCountryName ? '#1890ff' : '#f0f0f0',
                  }}
                  onClick={() => setSelectedCountryName(country.name)}
                >
                  <div style={{ textAlign: 'center' }}>
                    {country.name} {country.emoji}
                  </div>
                </Card>
              </List.Item>
            )}
          />
        </Panel>
      ))}
    </Collapse>
  );
};

export default CountriesList;
