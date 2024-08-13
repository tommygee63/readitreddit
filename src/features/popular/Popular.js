import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPopularData, popularSelector } from "./popularSlice";

function Popular() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopularData());
    }, []);

    const popularData = useSelector(popularSelector);

    return(
        <div>
            {!popularData ? <p>Loading...</p> : popularData.map(item => <h2 key={item.data.id} >{item.data.title}</h2>)}
        </div>
    )
};

export default Popular;