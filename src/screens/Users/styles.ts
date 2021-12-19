import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const UsersList = styled.View`
  flex: 1%;
  padding: 0 24px;

  margin-top: ${RFPercentage(2)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ContainerTransparent = styled.View`
  background: rgba(0, 0, 0, 0);
  margin: 20px 0;
`;

export const Loader = styled.ActivityIndicator`
  background: rgba(0, 0, 0, 0);
`;
