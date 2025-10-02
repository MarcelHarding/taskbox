import { PeachButton } from "./PeachButton";

export default {
    title: "PeachButton/Outilne",
    component: PeachButton,
};
export const Outline = {
    args: {
        label: "ACTION",
        buttonStyle: "outline",
        disabled: false,
    },
};

export const OutlineDisabled = {
    args: {
        label: "ACTION",
        buttonStyle: "outline",
        disabled: true,
    },
};

export const OutlineIcons = {
    args: {
        label: "ACTION",
        buttonStyle: "outline",
        disabled: false,
        leftIconType: "save-outline",
        rightIconType: "chevron-forward-outline",
    },
};

export const OutlineIconsDisabled = {
    args: {
        label: "ACTION",
        buttonStyle: "outline",
        disabled: true,
        leftIconType: "save-outline",
        rightIconType: "chevron-forward-outline",
    },
};

export const OutlineIcon = {
    args: {
        buttonStyle: "outline",
        disabled: false,
        leftIconType: "save-outline",
    },
};

export const OutlineIconDisabled = {
    args: {
        buttonStyle: "outline",
        disabled: true,
        leftIconType: "save-outline",
    },
}