import React, { useRef, useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Animated,
    StyleSheet,
} from 'react-native';

interface TabBarProps {
    tabs: string[];
    onTabPress?: (tab: string) => void;
    tabWidth?: number;
}

const TabBar: React.FC<TabBarProps> = ({ tabs, onTabPress, tabWidth = 100 }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<ScrollView>(null);
    const indicator = useRef(new Animated.Value(0)).current;

    const handlePress = (index: number) => {
        setActiveIndex(index);
        scrollRef.current?.scrollTo({ x: index * tabWidth - 50, animated: true });
        Animated.spring(indicator, {
            toValue: index * tabWidth,
            useNativeDriver: true,
        }).start();
        onTabPress?.(tabs[index]);
    };

    useEffect(() => {
        indicator.setValue(activeIndex * tabWidth);
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.tabs}
            >
                {tabs.map((tab, i) => (
                    <TouchableOpacity
                        key={tab + i}
                        onPress={() => handlePress(i)}
                        style={[styles.tab, { width: tabWidth }]}
                        activeOpacity={0.7}
                    >
                        <Text style={[styles.text, i === activeIndex && styles.activeText]}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
                <Animated.View
                    style={[
                        styles.indicator,
                        {
                            width: tabWidth * 0.6,
                            transform: [{ translateX: Animated.add(indicator, new Animated.Value(tabWidth * 0.2)) }],
                        },
                    ]}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { backgroundColor: '#fff', paddingBottom: 6 },
    tabs: { position: 'relative' },
    tab: { alignItems: 'center', paddingVertical: 8 },
    text: { color: '#aaa', fontWeight: '600' },
    activeText: { color: '#000' },
    indicator: {
        position: 'absolute',
        bottom: 0,
        height: 2,
        backgroundColor: '#000',
        borderRadius: 2,
    },
});

export default TabBar;
