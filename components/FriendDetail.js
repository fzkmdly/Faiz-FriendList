import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const FriendDetail = ({ route }) => {
  const { friend } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{friend.name}</Text>
      <Image source={friend.Image} style={styles.image} />
      <Text style={styles.description}>{friend.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  name: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default FriendDetail;
