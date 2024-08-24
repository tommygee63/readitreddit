import {React} from 'react';
import { useSelector } from 'react-redux';
import { commentsSelector } from '../../app/commentsSlice';
import { Comment } from '../../components/Comment/Comment';


export function Comments({post}) {

    const comments = useSelector(commentsSelector);
    const commentsId = `${post.kind}_` + post.data.id;
    const commentsToRender = comments[commentsId]

    if (!Object.keys(comments).includes(commentsId)) {
        return null
    }

    return(
        <div>
            {commentsToRender.map((comment) => {
                return <Comment comment={comment} />
        })}
        </div>

    )

}