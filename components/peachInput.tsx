import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import Label from './label';
import TextBox from './textBox';
import LabelHint from './labelHint';

type IoniconName = React.ComponentProps<typeof Ionicons>['name'];
type StatusType =
  | 'normal'
  | 'placeholder'
  | 'typing'
  | 'error'
  | 'success'
  | 'disabled'
  | 'filled';

type PeachInputProps = {
  labelText: string;
  placeholder: string;
  status: StatusType;
  iconType: IoniconName;
  otherLabelText: string;
};

export default function PeachInput({
  labelText,
  placeholder,
  status: initialStatus,
  iconType,
  otherLabelText,
}: PeachInputProps) {
  const [text, setText] = useState('');
  const [status, setStatus] = useState<StatusType>(initialStatus);

  const handleChange = (value: string) => {
    setText(value);
    if (value.length === 0) {
      setStatus('placeholder');
    } else {
      setStatus('typing');
    }
  };

  return (
    <View style={styles.container}>
      <Label status={status} text={labelText} />
      <TextBox
        status={status}
        placeholderValue={placeholder}
        iconType={iconType}
        value={text}
        onChangeText={handleChange}
      />
      <LabelHint status={status} text={otherLabelText} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, alignItems: 'flex-start', width: '100%' },
});

