import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [category, setCategory] = useState("All");

  return (
    <FilterContext.Provider value={{ category, setCategory }}>
      {children}
    </FilterContext.Provider>
  );
}

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
