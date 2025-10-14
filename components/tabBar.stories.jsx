import React from 'react';
import { View } from 'react-native';
import TabBar from './tabBar';

export default {
    title: 'Components/TabBar',
    component: TabBar,
};

const tabs = ['EUR', 'WISE', 'REVOLUT', 'SWIFT', 'PIX', 'CARD'];

export const Default = () => (
    <View style={{ padding: 20 }}>
        <TabBar
            tabs={tabs}
            onTabPress={(tab) => console.log('Selected:', tab)}
        />
    </View>
);
