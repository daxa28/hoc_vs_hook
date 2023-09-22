import { useState, useEffect } from "react";

export function withApp(Component) {
  return function (props) {
    const { list, ...otherProps } = props;

    const [enteredSearchValue, setEnteredSearchValue] = useState("");
    const [activeSearchValue, setActiveSearchValue] = useState("");
    const [sortMode, setSortMode] = useState(null);

    const availableItems = activeSearchValue
      ? list.filter((item) => RegExp(activeSearchValue, "i").test(item.title))
      : list;

    const sortedItems = !sortMode
      ? availableItems
      : availableItems.slice().sort((a, b) => {
          if (sortMode === "asc" && a.title > b.title) {
            return 1;
          } else if (sortMode === "asc") {
            return -1;
          } else if (sortMode === "desc" && a.title > b.title) {
            return -1;
          } else {
            return 1;
          }
        });

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
        enteredSearchValue={enteredSearchValue}
        setEnteredSearchValue={setEnteredSearchValue}
        sortMode={sortMode}
        setSortMode={setSortMode}
        list={sortedItems}
        {...otherProps}
      />
    );
  };
}
