const TextInput = ({ name, label, value, onChange, required = false }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold">
        {label}
      </label>
      <textarea
        name= {name}
        value={value}
        className="w-full rounded p-2 border"
        onChange={onChange}
        required= {required}
      />
    </div>
  );
};

export default TextInput;
