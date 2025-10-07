import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { getPeachColor } from '../utils/colors/getPeachColor';

type TradeToggleProps = {
    type: 'buy' | 'sell';
    onPressCallback: () => void;
    selected?: boolean;
    disabled?: boolean;
};

const styles = StyleSheet.create({
    switchContainer: {
        width: 50,
        height: 28,
        borderRadius: 20,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        padding: 4,
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
    },
});

export const TradeToggle: React.FC<TradeToggleProps> = ({
    type,
    onPressCallback,
    selected = false,
    disabled = false,
}) => {

    const getBackgroundColor = () => {
        if (type === 'sell') {
            if (disabled) return getPeachColor(selected ? 'Primary Mild 2' : 'Black 50%');
            return getPeachColor(selected ? 'Primary Mild 2' : 'Primary Background Dark');
        }
        if (disabled) return getPeachColor(selected ? 'Success Mild 2' : 'Black 50%');
        return getPeachColor(selected ? 'Success Mild 2' : 'Success Mild 1');
    };

    const getCircleColor = () => {
        if (type === 'sell') {
            if (disabled) return selected ? getPeachColor('Primary Main') : getPeachColor('White 100%');
            return selected ? getPeachColor('Primary Main') : getPeachColor('White 100%');
        } else {
            if (disabled) return selected ? getPeachColor('Success Main') : getPeachColor('White 100%');
            return selected ? getPeachColor('Success Main') : getPeachColor('White 100%');
        }
    };

    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPressCallback}
            activeOpacity={0.7}
            style={[
                styles.switchContainer,
                {
                    backgroundColor: getBackgroundColor(),
                    opacity: disabled ? 0.38 : 1,
                },
            ]}
        >
            <View
                style={[
                    styles.circle,
                    {
                        backgroundColor: getCircleColor(),
                        marginLeft: selected ? 26 : 0, // move círculo
                    },
                ]}
            />
        </TouchableOpacity>
    );
};
