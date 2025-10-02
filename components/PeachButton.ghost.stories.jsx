import { PeachButton } from "./PeachButton";

export default {
    title: "PeachButton/Ghost",
    component: PeachButton,
};

export const Ghost = {
    args: {
        label: "ACTION",
        buttonStyle: "ghost",
        disabled: false,
    },
};

export const GhostDisabled = {
    args: {
        label: "ACTION",
        buttonStyle: "ghost",
        disabled: true,
    },
};

export const GhostIcons = {
    args: {
        label: "ACTION",
        buttonStyle: "ghost",
        disabled: false,
        leftIconType: "save-outline",
        rightIconType: "chevron-forward-outline",
    },
};

export const GhostIconsDisabled = {
    args: {
        label: "ACTION",
        buttonStyle: "ghost",
        disabled: true,
        leftIconType: "save-outline",
        rightIconType: "chevron-forward-outline",
    },
};

export const GhostIcon = {
    args: {
        buttonStyle: "ghost",
        disabled: false,
        leftIconType: "save-outline",
    },
};

export const GhostIconDisabled = {
    args: {
        buttonStyle: "ghost",
        disabled: true,
        leftIconType: "save-outline",
    },
};