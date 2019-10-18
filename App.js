import React, {useState} from 'react';
import Torch from 'react-native-torch';
import { Platform } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  ActivityIndicator,
  Image,
  ToastAndroid
} from 'react-native';

export default function App() {
  const [text, setText] = useState('Hello Olka!!!');
  const [light, setLight] = useState(false);
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Image
        style={{width: 66, height: 58}}
        source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
      />
      <Text style={styles.hello}>{text}</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, marginBottom: 10, width: 200 }}
        onChangeText={value => setText(value)}
        value={text}
      />
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed', 'hi')}
      />
      <Button
        title="Light on / off"
        onPress={async () => {
          try {
            await Torch.switchState(true);
          } catch (e) {
            ToastAndroid.show(
              'We seem to have an issue accessing your torch',
              ToastAndroid.SHORT
            );
          }
          setLight(!light);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello: {
    color: 'red',
    fontSize: 40
  }
});
