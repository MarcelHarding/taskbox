import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { getPeachColor } from "../utils/colors/getPeachColor";

export default function RangeButton({ color }: { color: "red" | "green" }) {
    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => setIsPressed(true);
    const handlePressOut = () => setIsPressed(false);

    const mainColor =
        color === "red"
            ? getPeachColor("Primary Main")
            : getPeachColor("Success Main");

    const mildColor =
        color === "red"
            ? getPeachColor("Primary Mild 1")
            : getPeachColor("Success Mild 1");

    return (
        <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
        >
            <View style={styles.container}>
                {/* sombra */}
                {isPressed && (
                    <View
                        style={[styles.shadow, styles.shadowPressed]}
                    />
                )}

                {/* círculo leve atrás (aparece quando pressionado) */}
                {isPressed && (
                    <View
                        style={[
                            styles.behindCircle,
                            { backgroundColor: mildColor },
                        ]}
                    />
                )}

                {/* círculo branco */}
                <View style={[styles.whiteCircle, !isPressed ? styles.shadowTest : {}]} />

                {/* círculo principal */}
                <View
                    style={[styles.mainCircle, { backgroundColor: mainColor }]}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
    },
    shadow: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
    },
    shadowTest: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
    },
    shadowPressed: {
        top: "-10%",
        left: "-10%",
        width: "120%",
        height: "120%",
    },
    behindCircle: {
        position: "absolute",
        top: "-10%",
        left: "-10%",
        width: "120%",
        height: "120%",
        borderRadius: 100,
    },
    whiteCircle: {
        position: "absolute",
        top: "5%",
        left: "5%",
        width: "90%",
        height: "90%",
        borderRadius: 100,
        backgroundColor: "white",
    },
    mainCircle: {
        position: "absolute",
        top: "20%",
        left: "20%",
        width: "60%",
        height: "60%",
        borderRadius: 100,
    },
});
