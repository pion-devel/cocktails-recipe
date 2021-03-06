import React, { useRef , useEffect} from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const searchValue = useRef("");

  useEffect(() => {
searchValue.current.focus()
  
  }, [])

  function handleSubmit(event){
    event.preventDefault()
  }
  

  function searchCocktails() {
    setSearchTerm(searchValue.current.value);
  }

  return (
    <div className='="section search'>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktails</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktails}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
