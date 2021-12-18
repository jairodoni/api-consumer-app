import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const CountryInfo = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
  padding: 16px;
  margin-bottom: 16px;
`;

export const Country = styled.View`
  justify-content: center;
`;

export const Info = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};

  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const CountryText = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
