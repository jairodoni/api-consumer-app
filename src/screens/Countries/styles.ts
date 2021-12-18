import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { CountryType } from '../../global/types/types';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const ContryComponentList = styled.View`
  flex: 1%;
  padding: 0 24px;

  margin-top: ${RFPercentage(2)}px;
`;

export const CardList = styled(
  FlatList as new (props: FlatListProps<CountryType>) => FlatList<CountryType>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
})``;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
