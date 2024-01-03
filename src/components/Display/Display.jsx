import { useState } from "react";

const Display = ({ todo, onRemoveElement, onHandleElement }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo);
  const [ind, setIndex] = useState(null);

  const handleEditClick = (index) => {
    setIndex(index);
    setEditing(true);
    setEditedText(todo[index]);
  };

  const handleSaveClick = () => {
    onHandleElement(ind, editedText);
    setEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <div>
        <h3 className="">Todo List</h3>
      </div>

      {isEditing ? (
        <div className="space-x-5">
          <input
            type="text"
            className="rounded-lg bg-slate-500 my-2 p-4"
            value={editedText}
            onChange={handleInputChange}
          />
          <button
            className="rounded-full bg-gray-800 p-2 my-1"
            onClick={handleSaveClick}
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <ul className="list-disc">
            {todo.map((element, index) => (
              <li key={index}>
                <div className="space-x-5">
                  <span className="">{element}</span>
                  <button
                    className="rounded-full bg-gray-800 p-2 my-1"
                    onClick={() => onRemoveElement(index)}
                  >
                    Remove
                  </button>
                  <button
                    className="rounded-full bg-gray-800 p-2 my-1"
                    onClick={() => handleEditClick(index)}
                  >
                    Edit
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Display;
