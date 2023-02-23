import { react, useEffect } from 'react'
import Card from "./Card";
import {useDispatch, useSelector} from "react-redux"
import { fetchFilm } from '../redux/features/filmSlice';

export default function Content(params) {
    const listFilm = useSelector(state => state.films.entities)
    const loadingApi = useSelector(state => state.films.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFilm('man'))
        // console.log("coba tes film",listFilm)
    }, [])

    return (
        <div>
            <div className="m-10">
                <div className=" mb-10">
                    <h1 className="text-4xl">Show your favourite movie</h1>
                </div>
                <div className="flex">
                    <div className="grid grid-cols-4 gap-x-3 gap-y-40">
                        {
                            loadingApi ? <p>Loading</p> :
                            listFilm.map((val, idx) => {
                                return (
                                    <Card key={idx} uri={val.Poster} film_name={val.Title}></Card>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        
    )
}