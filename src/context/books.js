import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
  const [count, setCount] = useState(5);

  const valueToshare = {
    count,
    incrementCount: () => {
      setCount(count + 1);
    },
  };
  return (
    <BooksContext.Provider value={valueToshare}>
      {children}
    </BooksContext.Provider>
  );
}
export default BooksContext;
