import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const Selector = () => {
  const { handleFontChange } = useContext(ThemeContext);
  const handleChange = (event) => {
    const selectedFont = event.target.value;
    handleFontChange(selectedFont);
  };
  return (
    <div>
      <select
        className="border-0 font-bold text-sm text-black-dark text-right leading-6 p-1 mr-4"
        onChange={handleChange}
      >
        <option value="0">Sans Serif</option>
        <option value="1">Serif</option>
        <option value="2">Mono</option>
      </select>
    </div>
  );
};

export default Selector;
