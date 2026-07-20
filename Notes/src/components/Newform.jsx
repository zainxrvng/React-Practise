import { useState } from "react";
const Newforms = ( {notes, setNotes} ) => {
  const [formData, setFormData] = useState({
    Title: "",
    Priorty: "Medium",
    Category: "Work",
    Description: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.Title || !formData.Description) return
    
    const newNotes = {id: Date.now(), ...formData}

    setNotes([newNotes, ...notes])

    setFormData({
      Title: "",
      Priorty: "Medium",
      Category: "Work",
      Description: "",
    });
      console.log("Form Submitted :", formData);

  }
  return (
    <div>``
      <form onSubmit= {handleSubmit}className="mb-6">
        <div className="mb-4">
          <label htmlFor="title" className="block font-semibold">
            Title
          </label>
          <input
            name="Title"
            type="text"
            value={formData.Title}
            className="w-full rounded p-2 border"
            onChange={handleChange}
          />
          <div className="mb-4">
            <label htmlFor="priority" className="block font-semibold">
              priority
            </label>
            <select
              name="Priorty"
              type="text"
              value={formData.Priorty}
              className="w-full rounded p-2 border"
              onChange={handleChange}
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
              name="Category"
              type="text"
              value={formData.Category}
              className="w-full rounded p-2 border"
              onChange={handleChange}
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
              name="Description"
              type="text"
              value={formData.Description}
              className="w-full rounded p-2 border"
              onChange={handleChange}
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

export default Newforms;
