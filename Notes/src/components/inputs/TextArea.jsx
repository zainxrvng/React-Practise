const TextArea = ({ name, value, label, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        type="text"
        value={value}
        className="w-full rounded p-2 border"
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
