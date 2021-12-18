import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const CountryInfo = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;

  padding: 16px;
  margin-bottom: 16px;
`;

export const Country = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Info = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-left: 5px;
`;

export const CountryText = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
