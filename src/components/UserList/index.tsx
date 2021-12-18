import React from 'react';
import { UserType } from '../../global/types/types';
import { UserCard } from '../UserCard';
import { Users, Title, CardList } from './styles';

export function UserList() {
  const data: UserType[] = [
    {
      "id": 1,
      "email": "george.bluth@reqres.in",
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
      "id": 2,
      "email": "janet.weaver@reqres.in",
      "first_name": "Janet",
      "last_name": "Weaver",
      "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    {
      "id": 3,
      "email": "emma.wong@reqres.in",
      "first_name": "Emma",
      "last_name": "Wong",
      "avatar": "https://reqres.in/img/faces/3-image.jpg"
    },
  ]
  return (
    <Users>
      <Title>User List:</Title>
      <CardList
        data={data}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => <UserCard data={item} />}
      />
    </Users>
  );
}