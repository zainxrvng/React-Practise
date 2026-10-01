const Select = ( {limit, setLimitOnChange} ) => {
  return (
    <div>
      <label htmlFor="limit">Show: </label>
      <select
        value={limit}
        id="limit"
        onChange={(e) => {
          setLimitOnChange(Number(e.target.value));
        }}
      >
        <option value="0" className="bg-black">
          0
        </option>
        <option value="5" className="bg-black">
          5
        </option>
        <option value="10" className="bg-black">
          10
        </option>
        <option value="15" className="bg-black">
          15
        </option>
        <option value="20" className="bg-black">
          20
        </option>
        <option value="25" className="bg-black">
          25
        </option>
        <option value="100" className="bg-black">
          100
        </option>
      </select>
    </div>
  );
}

export default Select
