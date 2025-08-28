import { Link } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [done, setDone] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link href="/details">View details</Link>
      <Button title="click me" onPress={() => setDone(true)} />
      {done && <Text>Done</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
