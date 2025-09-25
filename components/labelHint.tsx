
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getPeachColor } from '../utils/colors/getPeachColor';
import { getPeachFontSize } from '../utils/textSize/getPeachTextSize';
import { useThemeStore } from './themeStore';

type StatusType = 'normal' | 'placeholder' | 'typing' | 'error' | 'success' | 'disabled' | 'filled';

type LabelProps = {
  status: StatusType;
  text: string;
};

export default function LabelHint({ status, text, }: { status: string, text: string }) {
  const { darkMode } = useThemeStore();

  const labelColors: Record<StatusType, string> = {
    placeholder: 'Background Main',
    typing: 'Success Background Dark',
    error: 'Error Main',
    success: 'Success Main',
    disabled: 'Black 5%',
    filled: 'Black 65%',
    normal: 'Primary Main',
  };

  const colorKey = labelColors[status];
  const color = getPeachColor(colorKey);

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { fontSize: getPeachFontSize('small'), color }]}>
        {text}
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { padding: 10, alignItems: 'flex-start', width: '100%' },
  label: { fontWeight: '600' },
});

