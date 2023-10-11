import React from 'react';
import {Text, View, StyleSheet, useColorScheme, Image} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.darkText : styles.whiteText}>
        Hello World!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  darkText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AppPro;
