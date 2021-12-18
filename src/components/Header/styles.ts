import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const HeaderContainer = styled.View`
  background: ${({ theme }) => theme.colors.primary};

  width: 100%;
  padding: 0 24px;

  height: ${RFPercentage(25)}px;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

export const LogoTitle = styled.Text`
  width: 100%;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;

  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Text = styled.Text`
  width: 100%;
  margin-bottom: 10px;

  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFValue(19)}px;
  font-family: ${({ theme }) => theme.fonts.light};
`;
