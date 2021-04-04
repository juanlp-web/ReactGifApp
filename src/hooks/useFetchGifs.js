import { useState, useEffect } from "react";
import { getGifts } from '../helpers/getGift';


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
        console.log(category);
        getGifts(category)
            .then(imgs => {
                setTimeout(() => {
                    setState({
                        data: imgs,
                        loading: false,
                    })

                },
                )

            }
            );
    }, [category]);

    // setTimeout(()=>{
    //     setState({
    //         data: [1,2,3,4,5,6,7],
    //         loading: false,
    //     })

    // } ,3000
    // )


    return state;// data arreglo y loading



}