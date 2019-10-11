import React from "react";
import TextInput from "../src/components/TextInput";
import renderer from "react-test-renderer";

describe("WeaknessFilter", () => {
  test("renders correctly", () => {
    const component = renderer.create(<TextInput />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Checking if this is a stateless component", () => {
  test("emit events", () => {
    let tree = renderer.create(<TextInput />);

    let instance = tree.getInstance();

    //const event = {
    //  preventDefault() {},
    //  target: { value: 'the-value' }
    //};

    //instance.handleChange(event);

    expect(instance.state).toBe(null);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
