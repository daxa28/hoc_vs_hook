import { useState, useEffect } from "react";

export function withFilter(Component, filterProp) {
  return function (props) {
    const { list, ...otherProps } = props;
    const [enteredSearchValue, setEnteredSearchValue] = useState("");
    const [activeSearchValue, setActiveSearchValue] = useState("");

    const availableItems = activeSearchValue
      ? list.filter((item) =>
          RegExp(activeSearchValue, "i").test(item[filterProp])
        )
      : list;

    useEffect(() => {
      const handler = setTimeout(() => {
        setActiveSearchValue(enteredSearchValue);
      }, 300);

      return () => {
        clearTimeout(handler);
      };
    }, [enteredSearchValue]);

    return (
      <Component
        list={availableItems}
        enteredSearchValue={enteredSearchValue}
        setEnteredSearchValue={setEnteredSearchValue}
        {...otherProps}
      />
    );
  };
}
