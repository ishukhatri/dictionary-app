import Toggle from "./Toggle"; // Import your Toggle component

export default {
  title: "Components/Toggle",
  component: Toggle,
};

export const Default = () => <Toggle />;

export const disabled = () => <Toggle checked={false} />;

export const enabled = () => <Toggle checked={true} />;
