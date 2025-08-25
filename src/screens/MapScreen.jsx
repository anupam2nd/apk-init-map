import { Text, Button, View } from 'react-native';

function MapScreen() {

const fetchLocation = () => {
    console.log('location')
}

  return (
    <View>
      <Text>Map Screen</Text>
      <Button title='Fetch Location' onPress={fetchLocation} />
    </View>
  );
}

export default MapScreen;
