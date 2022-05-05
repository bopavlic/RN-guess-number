import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import generateRandomBetween from '../helpers/generateRandomBetween';

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = (props) => {
  const { userNumber, gameOverHandler } = props;

  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [computerGuess, setComputerGuess] = useState(initialGuess);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && computerGuess < userNumber) ||
      (direction === 'greater' && computerGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = computerGuess;
    } else {
      minBoundary = computerGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      computerGuess
    );
    setComputerGuess(newRandomNumber);
  };

  useEffect(() => {
    if (computerGuess === userNumber) {
      gameOverHandler();
    }
  }, [computerGuess, userNumber, gameOverHandler]);

  return (
    <View style={styles.screen}>
      <Title>Opponents guess</Title>
      <NumberContainer>{computerGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            +
          </PrimaryButton>
        </View>
      </View>
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
