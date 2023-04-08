import type {FC} from 'react';
import {useState} from 'react';
import SearchList from "./List/SearchList";


const Search: FC = () => {

    const [url, setUrl] = useState<string>('')

    const handleChange = (e: any) => {
        setUrl(e.target.value)
    }

    return (
        <>
            <div>
                <input
                    value={url}
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div>
                <SearchList url={url}></SearchList>
            </div>
        </>
    )
}

export default Search;