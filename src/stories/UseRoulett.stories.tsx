import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect, useRef } from "react";
import useRoulette from "../hooks/useRoulette";

const Component = () => {
  const items = [0, 1, 2, 3, 4, 5];
  const times = 10000;
  const tick = 50;
  const { counter, prevSelectedItem, selectedItem, nextSelectedItem } =
    useRoulette({
      items,
      times,
      tick,
    });

  useEffect(() => {
    console.log(prevSelectedItem);
  }, [prevSelectedItem]);
  return (
    <div>
      <div>{counter}</div>
      <div>{prevSelectedItem}</div>
      <div>{selectedItem}</div>
      <div>{nextSelectedItem}</div>
    </div>
  );
};

export default {
  title: "useRoulette",
  component: Component,
};

export const TestComponent = () => <Component />;

TestComponent.story = {
  name: "useRoulette",
};
