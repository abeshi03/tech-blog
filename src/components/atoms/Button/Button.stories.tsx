// - ライブラリー ========================================================================================================
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// - コンポーネント =======================================================================================================
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button
} as ComponentMeta<typeof Button>;

export const SkyBlue__Big: ComponentStory<typeof Button> = () => (
  <Button color="SKY_BLUE" size="BIG" path="#">青くて大きい</Button>
);

export const SkyBlue__Small: ComponentStory<typeof Button> = () => (
  <Button color="SKY_BLUE" size="SMALL" path="#">青くて小さい</Button>
);

export const White__Big: ComponentStory<typeof Button> = () => (
  <Button color="WHITE" size="BIG" path="#">白くて大きい</Button>
);

export const White__Small: ComponentStory<typeof Button> = () => (
  <Button color="WHITE" size="SMALL" path="#">白くて小さい</Button>
);
