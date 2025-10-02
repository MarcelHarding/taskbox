import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { getPeachColor } from "../utils/colors/getPeachColor";
import { ButtonStyle } from "../utils/types/buttonStyle";
import { Ionicons } from "@expo/vector-icons";

type IoniconName = React.ComponentProps<typeof Ionicons>['name'];

type ButtonColor = "green" | "red"
type PeachButtonProps = {
    label: string;
    buttonStyle: ButtonStyle;
    buttonColor?: ButtonColor;
    disabled?: boolean;
    onPress?: () => void;
    leftIconType?: IoniconName;
    rightIconType?: IoniconName;
};

export const PeachButton = ({
    label,
    buttonStyle,
    buttonColor = "red",
    disabled = false,
    onPress = () => { },
    leftIconType,
    rightIconType,
}: PeachButtonProps) => {
    let backgroundColor: string;
    let borderColor: string | undefined;
    let textColor: string;

    if (disabled) {
        textColor = getPeachColor("Black 25%");
        if (buttonStyle === "solid") {
            backgroundColor = getPeachColor("Black 5%");
        } else if (buttonStyle === "outline") {
            backgroundColor = getPeachColor("Transparent");
            borderColor = getPeachColor("Black 5%");
        } else {
            backgroundColor = getPeachColor("Transparent");
        }
    } else {
        if (buttonStyle === "solid") {
            backgroundColor = getPeachColor("Primary Main");
            textColor = getPeachColor("White 100%");
        } else if (buttonStyle === "outline") {
            backgroundColor = getPeachColor("Transparent");
            borderColor = getPeachColor("Primary Main");
            textColor = getPeachColor("Primary Main");
        } else {
            backgroundColor = getPeachColor("Transparent");
            textColor = getPeachColor("Primary Main");
        }
    }

    const iconCount = (leftIconType ? 1 : 0) + (rightIconType ? 1 : 0);

    const isIconOnly = !label && iconCount > 0;

    return (
        <Pressable
            disabled={disabled}
            onPress={disabled ? () => { } : onPress}
            style={({ pressed }) => [
                styles.base,
                {
                    backgroundColor,
                    borderColor,
                    borderWidth: borderColor ? 1 : 0,
                    borderRadius: isIconOnly ? 22 : 9999,
                },
                pressed && !disabled && styles.pressed,
            ]}
        >
            {leftIconType && (
                <Ionicons
                    name={leftIconType}
                    size={20}
                    color={textColor}
                    style={label ? styles.leftIcon : undefined}
                />
            )}
            <Text style={[styles.label, { color: textColor }]}>{label}</Text>
            {rightIconType && (
                <Ionicons
                    name={rightIconType}
                    size={20}
                    color={textColor}
                    style={label ? styles.rightIcon : undefined}
                />
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    base: {
        paddingVertical: 12,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
    },
    pressed: {
        opacity: 0.7,
    },
    // hovered: {
    //     opacity: 0.85,
    // },
    // focused: {
    //     borderWidth: 2,
    //     borderColor: getPeachColor("Primary Main"),
    // },
    label: {
        fontSize: 20,
        fontWeight: "600",
        marginHorizontal: 8,
    },
    leftIcon: {
        marginRight: 4,
    },
    rightIcon: {
        marginLeft: 4,
    },
});
