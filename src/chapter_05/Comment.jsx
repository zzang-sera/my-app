import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontweight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};


//pros의 개수가 많아지면 props.명이 나을 수도 있음.
const Comment = ({name, comment}) =>{
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    style={styles.image}
                    alt="user_img"
                />
            </div>

            <div style={styles.contentContainer}>
                {/*name과 comment는 undefined 상태*/}
                <span style={styles.nameText}>{name}</span>
                <span style={styles.commentText}>{comment}</span>
            </div>
        </div>
    );
}

export default Comment;