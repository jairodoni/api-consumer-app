import React, { useEffect, useState } from 'react';
import { Text, FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { UserType } from '../../global/types/types';
import { userApi } from '../../services/userApi';
import { UserCard } from '../../components/UserCard';
import { Loading } from '../../components/Loading';

import { Container, UsersList, Title } from './styles';

export function Users() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function loadUsers() {
    if (loading) {
      return;
    }

    if (total > 0 && users.length === total) {
      return;
    }

    setLoading(true);

    const response = await userApi.get(`/users?page=${page}`);

    const contentList = response.data.data;

    setUsers([...users, ...contentList]);
    setTotal(response.data.total);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Container>
      <UsersList>
        <Title>User List:</Title>
        <FlatList
          data={users}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => <UserCard data={item} />}
          onEndReached={loadUsers}
          onEndReachedThreshold={0.1}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace(),
          }}
          ListFooterComponent={loading ? <Loading /> : <Text></Text>}
        />
      </UsersList>
    </Container>
  );
}
