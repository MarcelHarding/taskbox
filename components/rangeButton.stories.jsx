import React from "react";
import RangeButton from "./rangeButton";

export default {
    title: "Components/RangeButton",
    component: RangeButton,
    argTypes: {
        color: {
            control: { type: "select" },
            options: ["red", "green"],
        },
    },
};

const Template = (args) => <RangeButton {...args} />;

export const Red = Template.bind({});
Red.args = {
    color: "red",
};

export const Green = Template.bind({});
Green.args = {
    color: "green",
};
