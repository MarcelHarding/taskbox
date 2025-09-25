import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { getPeachColor } from '../utils/colors/getPeachColor';
import { useThemeStore } from './themeStore';

type IoniconName = React.ComponentProps<typeof Ionicons>['name'];
type StatusType = 'normal' | 'placeholder' | 'typing' | 'error' | 'success' | 'disabled' | 'filled';

type TextBoxProps = {
  status: StatusType;
  placeholderValue: string;
  iconType: IoniconName;
  value: string;
  onChangeText: (text: string) => void;
};

export default function TextBox({
  status,
  placeholderValue,
  iconType,
  value,
  onChangeText,
}: TextBoxProps) {
  const [inputHeight, setInputHeight] = useState(40);
  const { darkMode } = useThemeStore();

  const borderColors: Record<StatusType, string> = {
    placeholder: 'Background Main',
    typing: 'Success Background Dark',
    error: 'Error Main',
    success: 'Success Main',
    disabled: 'Black 5%',
    filled: 'Black 65%',
    normal: 'Primary Main',
  };

  const selectedColor = borderColors[status];
  const iconColor = status === 'disabled' ? getPeachColor('Black 5%') : getPeachColor('Black 100%')

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputWrapper,
          {
            borderColor: getPeachColor(selectedColor),
            backgroundColor: getPeachColor('Primary Background'),
            height: Math.max(40, inputHeight),
          },
        ]}
      >
        <TextInput
          style={[
            styles.input,
            { color: getPeachColor('Primary Background') },
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholderValue}
          placeholderTextColor={getPeachColor(selectedColor)}
          editable={status !== 'disabled'}
          multiline
          onContentSizeChange={(event) =>
            setInputHeight(event.nativeEvent.contentSize.height)
          }
        />

        <TouchableOpacity onPress={() => console.log('Ícone pressionado')}>
          <Ionicons
            name={iconType}
            size={24}
            color={iconColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
    width: '90%',
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#000',
    textAlignVertical: 'center',
    textAlign: 'left',
    paddingVertical: 2,
  },
});

