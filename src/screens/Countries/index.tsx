import React from 'react';
import { Container } from './styles';
import { CountryCard } from '../../components/CountryCard';
import { CardList, ContryComponentList } from './styles';
import { CountryType } from '../../global/types/types';

export function Countries() {
  const data: CountryType[] = [
    {
      code: "COL",
      name: "COLOMBIA",
      fronteiras: [
        "BRA",
        "ECU",
        "PAN",
        "PER",
        "VEN"
      ]
    },
    {
      code: "BRA",
      name: "BRASIL",
      fronteiras: [
        "ARG",
        "BOL",
        "COL",
        "GUF",
        "GUY",
        "PRY",
        "PER",
        "SUR",
        "URY",
        "VEN"
      ]
    },
    {
      code: "ECU",
      name: "EQUADOR",
      fronteiras: [
        "COL",
        "PER"
      ]
    }
  ]
  return (
    <Container>
      <ContryComponentList>
        <CardList
          data={data}
          keyExtractor={item => `${item.code}`}
          renderItem={({ item }) => <CountryCard data={item} />}
        />
      </ContryComponentList>
    </Container >
  );
}
