import "./index.css";

// import { withApp } from "./hoc/withApp";
import { withFilter } from "./hoc/withFilter";
import { withSort } from "./hoc/withSort";

function AppHOC({
  enteredSearchValue,
  setEnteredSearchValue,
  sortMode,
  setSortMode,
  list,
}) {
  return (
    <div className="App">
    <h3>Компонент с использовнием HOC</h3>
      <div>
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
        {list.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

// export default withApp(App);
export default withSort(withFilter(AppHOC, "title"), "title");
