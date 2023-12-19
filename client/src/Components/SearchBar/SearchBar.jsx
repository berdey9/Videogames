import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchVg } from "../../Redux/Actions/actions";

const SearchBar = () => {
  const [vg, setVg] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setVg(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchVg(vg));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SearchBar;
