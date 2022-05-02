import { View, Text } from 'react-native';
import React from 'react';

const PrimaryButton = (props) => {
  const { children } = props;
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;
