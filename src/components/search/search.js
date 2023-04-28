import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { url, geoApiOptions } from "../../api";


const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const loadOptions = async (inputValue) => {
        try {
	const response = await fetch(`${url}/cities?minpopulation=1000000&namePrefix=${inputValue}`, geoApiOptions);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
        }
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