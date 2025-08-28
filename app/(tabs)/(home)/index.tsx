import { Link } from 'expo-router';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

import Logo from '../../../assets/images/food.png';
export default function HomeScreen() {
  const [done, setDone] = useState(false);
  return (
    <View style={styles.container}>
      <Image source={Logo} style={[styles.img, { width: 100, height: 100 }]} />
      <Text style={styles.h2} >Home</Text>
      <Link style={styles.mainText} href="/details">View details</Link>
      <Button title="click me" onPress={() => setDone(true)} />
      {done && <Text>Done</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 5
  },

  img: {
    marginVertical: 20
  },

  h1: {
    fontSize: 30
  }, 

  h2: {
    fontSize: 25
  }, 

  mainText: {
    fontSize: 20
  }
});
