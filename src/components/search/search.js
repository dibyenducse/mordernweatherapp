import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { url, geoApiOptions } from "../../api";


const Search = ({onSearchChange}) => {

    const [serach, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return (
            
        )
    }

    const handleOnChange = (serachData) => {
        setSearch(serachData);
        onSearchChange(serachData);
    }

    return (
        <AsyncPaginate
            placeholder="Search for the city"
            debounceTimeout={600}
            value={search} 
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search;