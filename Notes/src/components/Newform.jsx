import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectedText from "./inputs/SelectedText";
import TextArea from "./inputs/TextInput";

const Newforms = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    Title: "",
    Priorty: "Medium",
    Category: "Work",
    Description: "",
  });
  const [isFormVisable, setisFormVisable] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.Title || !formData.Description) return;

    const newNotes = { id: Date.now(), ...formData };

    setNotes([newNotes, ...notes]);

    setFormData({
      Title: "",
      Priorty: "Medium",
      Category: "Work",
      Description: "",
    });
    console.log("Form Submitted :", formData);
  };
  return (
    <>
      <div>
        <button
          onClick={() => {
            setisFormVisable(!isFormVisable);
          }}
          className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover: bg-purple-200 hover: border-purple-300 transition mb-4"
        >
          {" "}
          {isFormVisable ? "Hide form ❌" : "add new note ➕"}
        </button>
        {isFormVisable && (
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="mb-4">
              <TextInput
                label="Title"
                name="Title"
                value={formData.Title}
                onChange={handleChange}
                required
              />
              <SelectedText
                label="Priority"
                name="priority"
                value={formData.Priorty}
                onChange={handleChange}
                options={[
                  { value: "High", label: "🔴 High" },
                  { value: "Medium", label: "🟠 Medium" },
                  { value: "Low", label: "🟢 Low" },
                ]}
              />
              <SelectedText
                label="Category"
                name="category"
                value={formData.Category}
                onChange={handleChange}
                options={[
                  { value: "Work", label: "💼 Work" },
                  { value: "Personal", label: "🏠 Personal" },
                  { value: "Ideas", label: "💡 Ideas" },
                ]}
              />
              <TextArea 
                label="Description"
                name="Description"
                value={formData.Description}
                onChange={handleChange}
                required
              />
            </div>
            <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600 transition-colors font-semibold">
              Add Note
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default Newforms;
