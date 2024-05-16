// context/NamesContext.jsx
import { createContext, useState } from 'react';

const NamesContext = createContext();

export const NamesProvider = ({ children }) => {
  const [names, setNames] = useState([]);

  const addName = (name) => {
    setNames([...names, name]);
  };

  const deleteName = (index) => {
    const updatedNames = [...names];
    updatedNames.splice(index, 1);
    setNames(updatedNames);
  };

  const editName = (index, newName) => {
    const updatedNames = [...names];
    updatedNames[index] = newName;
    setNames(updatedNames);
  };

  return (
    <NamesContext.Provider value={{ names, addName, deleteName, editName }}>
      {children}
    </NamesContext.Provider>
  );
};

export default NamesContext;
