import { View, Text, StyleSheet } from 'react-native';
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
    borderWidth: 2,
    borderColor: Colors.primary600,
    padding: 12,
  },
});
