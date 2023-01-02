import React, { FC } from "react";
import { useGlobalStore } from "./store";

const TestComponent: FC = () => {
  const { activeLanguage } = useGlobalStore();

  return <div>Active language: {activeLanguage}</div>;
};

export default TestComponent;
