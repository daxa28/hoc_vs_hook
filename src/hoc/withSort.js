import { useState } from "react";

export function withSort(Component, sortProp) {
  return function (props) {
    const { list, ...otherProps } = props;
    const [sortMode, setSortMode] = useState(null);
    const sortedItems = !sortMode
      ? list
      : list.slice().sort((a, b) => {
          if (sortMode === "asc" && a[sortProp] > b[sortProp]) {
            return 1;
          } else if (sortMode === "asc") {
            return -1;
          } else if (sortMode === "desc" && a[sortProp] > b[sortProp]) {
            return -1;
          } else {
            return 1;
          }
        });

    return (
      <Component
        sortMode={sortMode}
        setSortMode={setSortMode}
        list={sortedItems}
        {...otherProps}
      />
    );
  };
}
