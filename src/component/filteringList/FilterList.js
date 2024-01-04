import { useState } from "react";
const foods = [
  {
    id: 0,
    name: "Sushi",
    description:
      "Sushi is a traditional Japanese dish of prepared vinegared rice",
  },
  {
    id: 1,
    name: "Dal",
    description:
      "The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added",
  },
  {
    id: 2,
    name: "Pierogi",
    description:
      "Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water",
  },
  {
    id: 3,
    name: "Shish kebab",
    description:
      "Shish kebab is a popular meal of skewered and grilled cubes of meat.",
  },
  {
    id: 4,
    name: "Dim sum",
    description:
      "Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch",
  },
];

function filterItems(items, query) {
    query = query.toLowerCase();
  
    return items.filter((item) =>
      item.name.split(" ").some((word) => word.toLowerCase().startsWith(query))
    );
  }

export default function FilterableList() {

    const [query, setQuery] = useState("");

    const results =filterItems(foods,query)

    function onHandleChange(e) {
        setQuery(e.target.value);
      }


  return (
    <div style={{ border: "1px solid green " }}>
      <h3 style={{ paddingBottom: "15px", textAlign: "center" }}>
        {" "}
        Example-3: This is a Filterable List
      </h3>
      <SearchBar  query={query} onChange={onHandleChange}/>
      <hr />
      <List itemsProps={results} />
    </div>
  );
}

function SearchBar({query, onChange}) {
//   const [query, setQuery] = useState("");

//   function onHandleChange(e) {
//     setQuery(e.target.value);
//   }

  return (
    <label>
      Search:{" "}
      <input
        value={query}
        placeholder="Search your query "
        onChange={onChange}
      />
    </label>
  );
}

function List({ itemsProps }) {
  return (
    <div>
      <table>
        <tbody>
          {itemsProps.map((food) => (
            <tr key={food.id}>
              <td>{food.name}</td>
              <td>{food.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


