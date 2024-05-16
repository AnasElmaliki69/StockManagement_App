// components/NameList.jsx
import { useState, useContext } from 'react';
import NamesContext from '@/context/NamesContext';

const NamesList = () => {
  const { names, deleteName } = useContext(NamesContext);
  const [editableIndex, setEditableIndex] = useState(null);
  const [editedName, setEditedName] = useState('');

  const handleDelete = (index) => {
    deleteName(index);
  };



  return (
    <div>
      <h2>Stock</h2>
      <ul className='notNav'>
        {names.map((name, index) => (
          <li className='otNav' key={index}>
            {editableIndex === index ? (
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
            ) : (
              name
            )}
            {editableIndex === index ? (
              <button onClick={() => handleSave(index)}>Save</button>
            ) : (
              <button onClick={() => handleEdit(index, name)}>Edit</button>
            )}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NamesList;
