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
          <Info>Pais:</Info>
          {` ${data.name}`}
        </CountryText>
        <CountryText>
          <Info>Code:</Info>
          {` ${data.code}`}
        </CountryText>
      </Country>

      <CountryText>
        <Info>Fronteiras:</Info>
        {` ${data.fronteiras}`}
      </CountryText>
    </CountryInfo>
  );
}
