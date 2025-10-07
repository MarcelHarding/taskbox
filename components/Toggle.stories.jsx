import React, { useState } from 'react';
import { View } from 'react-native';
import { TradeToggle as Toggle } from './Toggle';

export default {
  title: 'Components/TradeToggle',
  component: Toggle,
  args: {
    onPress: () => console.log('Pressed'),
  },
};

export const SellEnabled = () => {

  const [isSelected1, setIsSelected1] = useState(false)
  const press1 = () => setIsSelected1(!isSelected1)

  const [isSelected2, setIsSelected2] = useState(true)
  const press2 = () => setIsSelected2(!isSelected2)

  return <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
    <Toggle type="sell" selected={isSelected1} disabled={false} onPressCallback={press1} />
    <Toggle type="sell" selected={isSelected2} disabled={false} onPressCallback={press2} />
  </View >
}

export const SellDisabled = () => {

  const [isSelected1, setIsSelected1] = useState(false)
  const press1 = () => { setIsSelected1(!isSelected1) }

  const [isSelected2, setIsSelected2] = useState(true)
  const press2 = () => setIsSelected2(!isSelected2)

  return <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
    <Toggle type="sell" selected={isSelected1} disabled={true} onPressCallback={press1} />
    <Toggle type="sell" selected={isSelected2} disabled={true} onPressCallback={press2} />
  </View>
};

export const BuyEnabled = () => {

  const [isSelected1, setIsSelected1] = useState(false)
  const press1 = () => setIsSelected1(!isSelected1)

  const [isSelected2, setIsSelected2] = useState(true)
  const press2 = () => setIsSelected2(!isSelected2)

  return <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
    <Toggle type="buy" selected={isSelected1} disabled={false} onPressCallback={press1} />
    <Toggle type="buy" selected={isSelected2} disabled={false} onPressCallback={press2} />
  </View >

};

export const BuyDisabled = () => {

  const [isSelected1, setIsSelected1] = useState(false)
  const press1 = () => { setIsSelected1(!isSelected1) }

  const [isSelected2, setIsSelected2] = useState(true)
  const press2 = () => setIsSelected2(!isSelected2)

  return <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
    <Toggle type="buy" selected={isSelected1} disabled={true} onPressCallback={press1} />
    <Toggle type="buy" selected={isSelected2} disabled={true} onPressCallback={press2} />
  </View>
};
