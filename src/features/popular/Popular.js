import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPopularData, popularSelector } from "./popularSlice";
import { fetchComments, commentsSelector } from "../comments/commentsSlice";

function Popular() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopularData());
    }, [dispatch]);

    const popularData = useSelector(popularSelector);
    const dataToDisplay = popularData[0];
    console.log(dataToDisplay)
    //console.log(dataToDisplay.data.id);
    const comments = useSelector(commentsSelector)

    function handleClick(e) {
        e.preventDefault()
        console.log(dataToDisplay.data.id);
        dispatch(fetchComments(dataToDisplay.data.permalink))
    }

    return(
        <div>
            {!dataToDisplay ? <p>No data to display</p> : <h2 key={dataToDisplay.data.id} >{dataToDisplay.data.title}</h2>}
            <button onClick={handleClick} >Get Comments</button>
            {!comments ? null : comments.map((comment) => {
                return <p key={comment.id} >{comment.data.body}</p>
            })}
        </div>
    )
};

export default Popular;