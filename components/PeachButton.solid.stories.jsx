import { PeachButton } from "./PeachButton";
import { ButtonStyle } from "../utils/types/buttonStyle";
import { disableErrorHandling } from "expo";

export default {
    title: "PeachButton/Solid",
    component: PeachButton,
};
export const Solid = {
    args: {
        label: "ACTION",
        buttonStyle: "solid",
        disabled: false,
    },
};

export const SolidDisabled = {
    args: {
        label: "ACTION",
        buttonStyle: "solid",
        disabled: true,
    },
};



export const SolidIcons = {
    args: {
        label: "ACTION",
        buttonStyle: "solid",
        disabled: false,
        leftIconType: "save-outline",
        rightIconType: "chevron-forward-outline",
    },
};

export const SolidIconsDisabled = {
    args: {
        label: "ACTION",
        buttonStyle: "solid",
        disabled: true,
        leftIconType: "save-outline",
        rightIconType: "chevron-forward-outline",
    },
};

export const SolidIcon = {
    args: {
        buttonStyle: "solid",
        disabled: false,
        leftIconType: "save-outline",
    },
};

export const SolidIconDisabled = {
    args: {
        buttonStyle: "solid",
        disabled: true,
        leftIconType: "save-outline",

        rightIconType: "save-outline",
        label: "sdfsfd"
    },
};