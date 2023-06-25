"use client";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTheme } from "@hooks/useTheme";

const FontSelector2 = () => {
  const { selectedFont, setNewFont, fonts } = useTheme();

  const handleChange = (value) => {
    console.log("value", value);
    //todo fix this
    setNewFont(value);
  };

  // const [selectedPerson, setSelectedPerson] = useState(people[0]);
  // const [selected, setSelected] = useState(people[0])

  console.log(selectedFont);
  console.log(fonts);
  return (
    <div className="w-48 font-bold">
      <Listbox value={selectedFont.value} onChange={handleChange}>
        <div className="relative mt-2">
          <Listbox.Button
            className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 
          text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 
          focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 
          focus-visible:ring-offset-orange-300"
          >
            <span className="block truncate text-right">
              {selectedFont.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-purple-bright"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="z-10"
          >
            <Listbox.Options
              className="absolute mt-3 p-6 max-h-60 w-full overflow-auto rounded-2xl 
            bg-white text-lg shadow-lg ring-1 ring-black ring-opacity-5 
            focus:outline-none"
            >
              {fonts.map((font, fontIdx) => (
                <Listbox.Option
                  key={fontIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none ${font.value} ${
                      active ? "text-purple-bright" : "text-gray-900"
                    } ${fontIdx < fonts.length - 1 ? "mb-2" : ""}`
                  }
                  value={font.value}
                >
                  <span className={`block truncate`}>{font.name}</span>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default FontSelector2;
