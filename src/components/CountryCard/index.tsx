import React from 'react';
import { CountryInfo, CountryText, Info } from './styles';

export function CountryCard() {
  return (
    <CountryInfo>
      <CountryText>
        <Info>
          Name:
        </Info>
        {/* {` ${data.first_name} ${data.last_name}`} */}
      </CountryText>

      <CountryText>
        <Info>
          Email:
        </Info>
        {/* {` ${data.email}`} */}
      </CountryText>
    </CountryInfo>
  );
}