// - ライブラリー ========================================================================================================
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// - コンポーネント =======================================================================================================
import { AlertBox } from "./AlertBox";

export default {
  title: "AlertBox",
  component: AlertBox
} as ComponentMeta<typeof AlertBox>;

export const Error: ComponentStory<typeof AlertBox> = () => <AlertBox title="エラー" description="エラーの説明" alertType="ERROR"/>;

export const Info: ComponentStory<typeof AlertBox> = () => <AlertBox title="お知らせ" description="お知らせの説明" alertType="INFO"/>;

export const Success: ComponentStory<typeof AlertBox> = () => <AlertBox title="成功" description="成功の説明" alertType="SUCCESS"/>;

export const Warning: ComponentStory<typeof AlertBox> = () => <AlertBox title="警告" description="警告の説明" alertType="WARNING"/>;

