import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "새우",
        comment: "배가 고파요,, 분명 저녁을 먹었는데 흑흑,,",
    },
    {
        name: "짱멋져",
        comment: "오늘도 아좌좌!",

    },
    {
        name: "집",
        comment: "리준아 널 기다리고 있어,, 얼른와",
    },
];

//props를 직접 다루지 않으므로 구조 분해 할당 필요 없음.
const CommentList = () => {
    return(
        <div>
            {/*배열의 각 항목을 다루므로 구조분해 할당이 필요함.*/}
            {comments.map(({name, comment})=> {
                return (
                    <Comment name={name} comment={comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;