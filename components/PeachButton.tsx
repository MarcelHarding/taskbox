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

    const iconCount = (leftIconType ? 1 : 0) + (rightIconType ? 1 : 0);

    const isIconOnly = !label && iconCount > 0;

    return (
        <Pressable
            disabled={disabled}
            onPress={disabled ? () => { } : onPress}
            style={({ pressed }) => {

                let backgroundColor: string;
                let borderColor: string | undefined;
                //let textColorIfPressed: string;

                if (disabled) {
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
                        backgroundColor = pressed ? getPeachColor("Primary Dark 2") : getPeachColor("Primary Main");;
                    } else if (buttonStyle === "outline") {
                        borderColor = getPeachColor("Primary Main");
                        backgroundColor = pressed ? getPeachColor("Primary Dark 2") : getPeachColor("Transparent");
                    } else {
                        backgroundColor = pressed ? getPeachColor("Primary Dark 2") : getPeachColor("Transparent");
                    }
                }

                return [
                    styles.base,
                    {
                        backgroundColor,
                        borderColor,
                        borderWidth: borderColor ? 1 : 0,
                        borderRadius: isIconOnly ? 22 : 9999,
                    },
                ];
            }}
        >
            {({ pressed }) => {
                let textColor: string;
                if (disabled) {
                    textColor = getPeachColor("Black 25%");
                } else if (buttonStyle === "solid") {
                    textColor = getPeachColor("White 100%");
                } else {
                    textColor = getPeachColor("Primary Main");
                }

                return (
                    <>
                        {leftIconType && (
                            <Ionicons
                                name={leftIconType}
                                size={20}
                                color={textColor}
                                style={styles.leftIcon}
                            />
                        )}

                        {label && <Text style={[styles.label, { color: textColor }]}>{label}</Text>}

                        {rightIconType && (
                            <Ionicons
                                name={rightIconType}
                                size={20}
                                color={textColor}
                                style={styles.rightIcon}
                            />
                        )}
                    </>
                );
            }}
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
