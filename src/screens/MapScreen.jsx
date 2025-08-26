import { use, useState } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

function MapScreen() {
  const [location, setLocation] = useState(null);

  const fetchLocation = () => {
    Geolocation.getCurrentPosition(postion => {
      console.log(postion.coords);
    });
    console.log('location');
  };

  return (
    <View style={styles.container}>
      <Text>Map Screen</Text>
      <Button title="Fetch Location" onPress={fetchLocation} />
      <View
        style={{
          borderColor: 'black',
          borderWidth: 1,
          width: '100%',
          height: 700,
        }}
      >
        <MapView
          style={[styles.map, StyleSheet.absoluteFill]}
          initialRegion={{
            latitude: 22.5726,
            longitude: 88.3639,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          showsMyLocationButton={true}
          toolbarEnabled={true}
          zoomControlEnabled={Platform.OS === 'android'}
        >
          <Marker coordinate={{ latitude: 22.5726, longitude: 88.3639 }} />
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
