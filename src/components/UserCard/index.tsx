import React from 'react';
import { UserType } from '../../global/types/types';
import {
  UserInfo,
  UserText,
  Photo,
  User,
  Info
} from './styles';

interface UserCardProps {
  data: UserType;
}

export function UserCard({ data }: UserCardProps) {
  return (
    <UserInfo>
      <User>
        <UserText>
          <Info>
            Name:
          </Info>
          {` ${data.first_name} ${data.last_name}`}
        </UserText>

        <UserText>
          <Info>
            Email:
          </Info>
          {` ${data.email}`}
        </UserText>
      </User>

      <Photo source={{ uri: data.avatar }} />
    </UserInfo>
  );
}