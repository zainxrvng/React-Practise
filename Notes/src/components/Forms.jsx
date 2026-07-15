import { useState } from "react";
const Forms = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Work");
  const [description, setDescription] = useState("");
  return (
    <div>
      <form className="mb-6">
        <div className="mb-4">
          <label htmlFor="title" className="block font-semibold">
            Title
          </label>
          <input
            type="text"
            value={title}
            className="w-full rounded p-2 border"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <div className="mb-4">
            <label htmlFor="priority" className="block font-semibold">
              priority
            </label>
            <select
              type="text"
              value={priority}
              className="w-full rounded p-2 border"
              onChange={(e) => {
                setPriority(e.target.value);
              }}
            >
              <option value="High">🔴High</option>
              <option value="Medium">🟠 Medium</option>
              <option value="Low">🟢 Low</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="Category" className="block font-semibold">
              Category
            </label>
            <select
              type="text"
              value={category}
              className="w-full rounded p-2 border"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="Work">💼 Work</option>
              <option value="Personal">🏠 Personal</option>
              <option value="Ideas">💡 Ideas</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-semibold">
              Description
            </label>
            <textarea
              type="text"
              value={description}
              className="w-full rounded p-2 border"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
        </div>
        <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600 transition-colors font-semibold">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default Forms;
