import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { UserType } from '../../global/types/types';

export const Users = styled.View`
  flex: 1%;
  padding: 0 24px;

  margin-top: ${RFPercentage(2)}px;
`;

export const CardList = styled(
  FlatList as new (props: FlatListProps<UserType>) => FlatList<UserType>
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
