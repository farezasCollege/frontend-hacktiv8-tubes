import { react, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchFilm } from '../redux/features/filmSlice';
export default function Search() {

    const [searchVal, setSearchVal] = useState('');
    const dispatch = useDispatch()

    function handleChange(e) {
        console.log("ini val search: ", e.target.value)
        setSearchVal(e.target.value)
        
    }

    function handleSearch(){
        console.log("search val: ", searchVal )
        dispatch(fetchFilm(searchVal))
    }

    return (
        <div className='w-full mx-20 my-6'>
            <input className='inline-flex' type='text' placeholder='search film' onChange={handleChange} />
            <div className=' w-10/11 inline-flex'>
                <button className=' bg-red-600 w-full text-white 
                 hover:bg-red-900' onClick={handleSearch}>Search</button>
            </div>
        </div>
    )
}