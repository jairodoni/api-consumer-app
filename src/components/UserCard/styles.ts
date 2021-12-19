import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const UserInfo = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
  padding: 16px;
  margin-bottom: 16px;
`;

export const User = styled.View`
  justify-content: center;
`;

export const Info = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};

  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const UserText = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Photo = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;

  border-radius: 10px;
`;
