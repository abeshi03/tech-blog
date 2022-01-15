import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

// - コンポーネント =======================================================================================================
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button
} as ComponentMeta<typeof Button>;

export const SkyBlue: ComponentStory<typeof Button> = () => <Button color="SKY_BLUE" size="BIG" path="#">青くて大きい</Button>
