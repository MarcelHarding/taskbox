import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getPeachColor } from '../utils/colors/getPeachColor';
import { getPeachFontSize } from '../utils/textSize/getPeachTextSize';
import { useThemeStore } from './themeStore';
import { StatusType } from '../utils/types/statusType';


type LabelProps = {
  status: StatusType;
  text: string;
};

export default function Label({ status, text }: LabelProps) {

  let color = getPeachColor('Black 100%');

  if (status === 'disabled') {
    color = getPeachColor('Black 5%');
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { fontSize: getPeachFontSize('medium'), color }]}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, alignItems: 'flex-start', width: '100%' },
  label: { fontWeight: '600' },
});
