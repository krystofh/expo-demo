import * as ImagePicker from 'expo-image-picker';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

import Logo from '../../../assets/images/food.png';

export default function HomeScreen() {
  const [done, setDone] = useState(false);
  const [photoUri, setPhotoUri] = useState<string | null>(null); // <-- new state

  // Handle camera launch
  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (permission.granted) {
      const result = await ImagePicker.launchCameraAsync({
        quality: 0.5, // optional: reduce file size
        allowsEditing: false,
      });

      if (!result.canceled) {
        // result.assets is an array; the first element has the URI
        setPhotoUri(result.assets[0].uri);
      }
    } else {
      alert('Camera permission is required!');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={[styles.img, { width: 100, height: 100 }]} />
      <Text style={styles.h2}>Home</Text>
      <Link style={styles.mainText} href="/details">View details</Link>

      <Button title="click me" onPress={() => setDone(true)} />
      {done && <Text>Done</Text>}

      <Button title="Open Camera" onPress={openCamera} />

      {/* Thumbnail */}
      {photoUri && (
        <Image
          source={{ uri: photoUri }}
          style={{ width: 80, height: 80, marginTop: 10, borderRadius: 8 }}
        />
      )}
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
  h1: { fontSize: 30 },
  h2: { fontSize: 25 },
  mainText: { fontSize: 20 }
});
