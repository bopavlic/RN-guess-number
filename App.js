import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constants/colors';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(true);
  const [roundsNumber, setRoundsNumber] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  };

  const gameOverHandler = (numberOfRounds) => {
    setIsGameOver(true);
    setRoundsNumber(numberOfRounds);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setRoundsNumber(0);
  };

  let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler} />
    );
  }

  if (isGameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumer={roundsNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient
        colors={[Colors.accent500, Colors.primary700]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeModel='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.4,
  },
});
