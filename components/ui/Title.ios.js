import { Text, StyleSheet, Platform } from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';

const Title = (props) => {
  const { children } = props;

  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary600,
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderWidth: 0,
    borderColor: Colors.primary600,
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});
