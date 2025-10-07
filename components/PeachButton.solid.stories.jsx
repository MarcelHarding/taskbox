import { PeachButton } from "./PeachButton";
import { ButtonStyle } from "../utils/types/buttonStyle";
import { disableErrorHandling } from "expo";


export default {
    title: "PeachButton/Solid",
    component: PeachButton,
};
export const SolidRed = {
    args: {
        label: "ACTION",
        buttonStyle: "solid",
        disabled: false,
        buttonColor: 'red'
    },
};

export const SolidGreen = {
    args: {
        label: "ACTION",
        buttonStyle: "solid",
        disabled: false,
        buttonColor: 'green'
    },
};

export const SolidDisabledRed = {
    args: {
        label: "ACTION",
        buttonStyle: "solid",
        disabled: true,
        buttonColor: 'red'
    },
};

export const SolidDisabledGreen = {
    args: {
        label: "ACTION",
        buttonStyle: "solid",
        disabled: true,
        buttonColor: 'green'
    },
};

export const SolidIconsRed = {
    args: {
        label: "ACTION",
        buttonStyle: "solid",
        disabled: false,
        leftIconType: "save-outline",
        rightIconType: "chevron-forward-outline",
        buttonColor: 'red'
    },
};

export const SolidIconsGreen = {
    args: {
        label: "ACTION",
        buttonStyle: "solid",
        disabled: false,
        leftIconType: "save-outline",
        rightIconType: "chevron-forward-outline",
        buttonColor: 'green'
    },
};

export const SolidIconsDisabledRed = {
    args: {
        label: "ACTION",
        buttonStyle: "solid",
        disabled: true,
        leftIconType: "save-outline",
        rightIconType: "chevron-forward-outline",
        buttonColor: 'red'
    },
};

export const SolidIconsDisabledGreen = {
    args: {
        label: "ACTION",
        buttonStyle: "solid",
        disabled: true,
        leftIconType: "save-outline",
        rightIconType: "chevron-forward-outline",
        buttonColor: 'green'
    },
};

export const SolidIconRed = {
    args: {
        buttonStyle: "solid",
        disabled: false,
        leftIconType: "save-outline",
        buttonColor: 'red'
    },
};

export const SolidIconGreen = {
    args: {
        buttonStyle: "solid",
        disabled: false,
        leftIconType: "save-outline",
        buttonColor: 'green'
    },
};

export const SolidIconDisabledRed = {
    args: {
        buttonStyle: "solid",
        disabled: true,
        leftIconType: "save-outline",
        buttonColor: 'red'
    },
};

export const SolidIconDisabledGreen = {
    args: {
        buttonStyle: "solid",
        disabled: true,
        leftIconType: "save-outline",
        buttonColor: 'green'
    },
};