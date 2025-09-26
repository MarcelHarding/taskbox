
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getPeachColor } from '../utils/colors/getPeachColor';
import { getPeachFontSize } from '../utils/textSize/getPeachTextSize';
import { useThemeStore } from './themeStore';
import { Ionicons } from '@expo/vector-icons';
import { StatusType } from '../utils/types/statusType';


type LabelProps = {
  status: StatusType;
  text: string;
};

export default function LabelHint({ status, text, }: LabelProps) {


  let color = getPeachColor('Black 65%');

  if (status === 'error') {
    color = getPeachColor('Error Main');
  } else if (status === 'success') {
    color = getPeachColor('Success Main');
  } else if (status === 'disabled') {
    color = getPeachColor('Black 5%');
  } else if (status === 'placeholder' || status === 'typing' || status === 'filled') {
    color = getPeachColor('Black 65%');
  }
  const iconName = status === "success" ? "checkmark-circle" : (status === "error" ? "alert-circle" : undefined)

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { fontSize: getPeachFontSize('small'), color }]}>
        {iconName && <Ionicons name={iconName} color={color} />}
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, alignItems: 'flex-start', width: '100%' },
  label: { fontWeight: '600' },
});

//  const labelColors: Record<StatusType, string> = {
//     placeholder: 'Background Main',
//     typing: 'Success Background Dark',
//     error: 'Error Main',
//     success: 'Success Main',
//     disabled: 'Black 5%',
//     filled: 'Black 65%',
//     normal: 'Primary Main',
//    };

// const colorKey = labelColors[status];
// const color = getPeachColor(colorKey);
