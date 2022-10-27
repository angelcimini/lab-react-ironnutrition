import { useState } from "react"
import { Input, Divider } from 'antd';

export default function Search({ filterHandler }){
    

    const [inputSearch, setInputSearch] = useState('')

    const searchHandler = e => {
        setInputSearch(e.target.value)
        return filterHandler(e.target.value)
    }

    return (
        <>
            <Divider>Search</Divider>

            <label>Search</label>
            <Input 
                type="text"
                value={inputSearch}
                onChange={searchHandler}
            />
        </>
    )
}