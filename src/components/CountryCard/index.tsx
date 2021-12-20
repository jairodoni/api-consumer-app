import React from 'react';
import { CountryType } from '../../global/types/types';
import { Country, CountryInfo, CountryText, Info } from './styles';

interface CountryCardProps {
  data: CountryType;
}

export function CountryCard({ data }: CountryCardProps) {
  return (
    <CountryInfo>
      <Country>
        <CountryText>
          <Info>Country:</Info>
          {` ${data.name}`}
        </CountryText>
        <CountryText>
          <Info>Code:</Info>
          {` ${data.code}`}
        </CountryText>
      </Country>

      <CountryText>
        <Info>Frontiers:</Info>
        {` ${data.fronteiras}`}
      </CountryText>
    </CountryInfo>
  );
}
