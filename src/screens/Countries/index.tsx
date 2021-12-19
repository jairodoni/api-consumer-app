import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { CountryType } from '../../global/types/types';
import { countryApi } from '../../services/countryApi';
import { CountryCard } from '../../components/CountryCard';
import { Loading } from '../../components/Loading';

import { Container, ContryComponentList } from './styles';

export function Countries() {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState(false);

  async function loadCountries() {
    if (loading) {
      return;
    }

    setLoading(true);

    const { data } = await countryApi.get('/countries');

    data.sort((a: CountryType, b: CountryType) => {
      if (b.fronteiras.length > a.fronteiras.length) {
        return 1;
      } else {
        return -1;
      }
      return 0;
    });

    setCountries(data);
    setLoading(false);
  }

  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <Container>
      <ContryComponentList>
        <FlatList
          data={countries}
          keyExtractor={(item) => `${item.code}`}
          renderItem={({ item }) => <CountryCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace(),
          }}
          ListFooterComponent={loading ? <Loading /> : <Text></Text>}
        />
      </ContryComponentList>
    </Container>
  );
}
