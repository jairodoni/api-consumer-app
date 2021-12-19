import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { UserType } from '../../global/types/types';
import { UserCard } from '../../components/UserCard';
import { UsersList, Title, CardList } from './styles';
import { userApi } from '../../services/userApi';
import { ActivityIndicator, View, Text } from 'react-native';


export function Users() {
  const [users, setUsers] = useState<UserType[]>([])
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  async function loadUsers() {
    if (loading) {
      return;
    }

    if (total > 0 && users.length === total) {
      return;
    }

    setLoading(true);

    const response = await userApi.get(`/api/users?page=${page}`);

    const data = response.data.data;

    setUsers([...users, ...data]);
    setTotal(response.data.total);
    setPage(page + 1);

    await new Promise((r) => setTimeout(r, 1500));

    setLoading(false);
  }

  useEffect(() => {
    loadUsers()
  }, [])

  const Loading = () => {
    return (
      <View style={{ marginVertical: 20 }}>
        <ActivityIndicator size={27} color="#a9afc5" />
      </View >
    )
  }

  return (
    <Container>
      <UsersList>
        <Title>User List:</Title>
        <CardList
          data={users}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => <UserCard data={item} />}
          showsVerticalScrollIndicator={false}
          onEndReached={loadUsers}
          onEndReachedThreshold={0.05}
          ListFooterComponent={loading ? Loading() : <Text></Text>}
        />
      </UsersList>
    </Container>
  );
}
