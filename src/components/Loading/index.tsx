import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export function Loading() {
  return (
    <View style={{ marginVertical: 20 }}>
      <ActivityIndicator size={27} color="#a9afc5" />
    </View>
  );
}
