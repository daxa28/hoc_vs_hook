import { useFilter } from "./hooks/filter";
import { useSort } from "./hooks/sort";
import "./index.css";

export default function AppHook({ list }) {
  const { enteredSearchValue, setEnteredSearchValue, availableItems } =
    useFilter(list, "title");

  const { sortMode, setSortMode, sortedItems } = useSort(
    availableItems,
    "title"
  );

  return (
    <div className="App">
    <h3>Компонент с использовнием Hooks</h3>
      <div className="form">
        <input
          type="search"
          value={enteredSearchValue}
          onChange={(e) => setEnteredSearchValue(e.target.value)}
          placeholder="search todo"
        />
        <div className="form-radio">
          <input
            type="radio"
            name="sort"
            value="asc"
            checked={sortMode === "asc"}
            onChange={(e) => setSortMode(e.target.value)}
          />{" "}
          A-Z
          <input
            type="radio"
            name="sort"
            value="desc"
            checked={sortMode === "desc"}
            onChange={(e) => setSortMode(e.target.value)}
          />{" "}
          Z-A
        </div>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
