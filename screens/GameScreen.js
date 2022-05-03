import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Title from '../components/Title';

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponents guess</Title>
      <View>{/* <Text>Higher or lower?</Text>+ - */}</View>
      {/* <View>LOG rounds</View> */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
