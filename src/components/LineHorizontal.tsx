import React from 'react';
import {StyleSheet, View} from 'react-native';

type PropsLineHorizontal = {
  height: number;
};

export const LineHorizontal: React.FC<PropsLineHorizontal> = ({height}) => {
  // @ts-ignore
  return <View style={styles.lineHorizontal({height})} />;
};

const styles = StyleSheet.create({
  // @ts-ignore
  lineHorizontal: ({height = 0}: {height: number}) => ({
    height: height,
    backgroundColor: '#C4C4C4',
  }),
});
