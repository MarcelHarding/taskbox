import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { getPeachColor } from '../utils/colors/getPeachColor';
import { StatusType } from '../utils/types/statusType';

type IoniconName = React.ComponentProps<typeof Ionicons>['name'];

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

  let borderColor = getPeachColor('Black 65%');

  if (status === 'filled' || status === 'placeholder') {
    borderColor = getPeachColor('Black 10%');
  } else if (status === 'typing') {
    borderColor = getPeachColor('Primary Mild 2');
  } else if (status === 'error') {
    borderColor = getPeachColor('Error Main');
  } else if (status === 'success') {
    borderColor = getPeachColor('Success Main');
  } else if (status === 'disabled') {
    borderColor = getPeachColor('Black 5%');
  }

  const iconColor = status === 'disabled' ? getPeachColor('Black 10%') : getPeachColor('Black 100%')
  const bgColor = status === 'disabled' ? getPeachColor('Black 5%') : getPeachColor('Primary Background');

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputWrapper,
          {
            borderColor: borderColor,
            backgroundColor: bgColor,
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
          placeholderTextColor={getPeachColor('Black 65%')}
          editable={status !== 'disabled'}
          multiline
          onContentSizeChange={(event) =>
            setInputHeight(event.nativeEvent.contentSize.height)
          }
        />

        <TouchableOpacity >
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

