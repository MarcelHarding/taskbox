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
            style={({ pressed, hovered }: any) => {
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
                        if (pressed) {
                            backgroundColor = buttonColor === 'red' ? getPeachColor("Primary Dark 2") : getPeachColor("Success Dark 2");
                        } else if (hovered) {
                            backgroundColor = buttonColor === 'red' ? getPeachColor("Primary Dark 1") : getPeachColor("Success Dark 1");
                        } else {
                            backgroundColor = buttonColor === 'red' ? getPeachColor("Primary Main") : getPeachColor("Success Main");
                        }
                    } else if (buttonStyle === "outline") {
                        if (pressed) {
                            backgroundColor = buttonColor === 'red' ? getPeachColor("Primary Mild 1") : getPeachColor("Success Mild 2");
                            borderColor = buttonColor === 'red' ? getPeachColor("Primary Dark 2") : getPeachColor("Success Dark 2");
                        } else if (hovered) {
                            backgroundColor = buttonColor === 'red' ? getPeachColor("Primary Background Dark") : getPeachColor("Success Background Dark");
                            borderColor = buttonColor === 'red' ? getPeachColor("Primary Dark 1") : getPeachColor("Success Dark 1");
                        } else {
                            backgroundColor = buttonColor === 'red' ? getPeachColor("Transparent") : getPeachColor("Transparent");
                            borderColor = buttonColor === 'red' ? getPeachColor("Primary Main") : getPeachColor("Success Main")
                        }
                    } else if (buttonStyle === "ghost") {
                        if (pressed) {
                            backgroundColor = getPeachColor("Transparent");
                        } else if (hovered) {
                            backgroundColor = getPeachColor("Transparent");
                        } else {
                            backgroundColor = getPeachColor("Transparent");
                        }
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
            {({ pressed, hovered }: any) => {
                let textColor: string;
                if (disabled) {
                    textColor = getPeachColor("Black 25%");
                } else {
                    if (buttonStyle === "solid") {
                        textColor = getPeachColor("White 100%");
                    } else if (buttonStyle === "outline") {
                        if (pressed) {
                            textColor = buttonColor === 'red' ? getPeachColor("Primary Dark 2") : getPeachColor("Success Dark 2");
                        } else if (hovered) {
                            textColor = buttonColor === 'red' ? getPeachColor("Primary Dark 1") : getPeachColor("Success Dark 1");
                        } else {
                            textColor = buttonColor === 'red' ? getPeachColor("Primary Main") : getPeachColor("Success Main");
                        }
                    } else if (buttonStyle === "ghost") {
                        if (pressed) {
                            textColor = buttonColor === 'red' ? getPeachColor("Primary Dark 2") : getPeachColor("Success Dark 2");
                        } else if (hovered) {
                            textColor = buttonColor === 'red' ? getPeachColor("Primary Dark 1") : getPeachColor("Success Dark 1");
                        } else {
                            textColor = buttonColor === 'red' ? getPeachColor("Primary Main") : getPeachColor("Success Main");
                        }
                    }
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
        userSelect: 'none',
    },
    leftIcon: {
        marginRight: 4,
    },
    rightIcon: {
        marginLeft: 4,
    },
});
