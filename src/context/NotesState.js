import React from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{
    const notes = [
    {
        "_id": "66165fe4b62705013b8b9677",
        "user": "6614d8a47345f93a66182fee",
        "title": "Title Hello 1",
        "description": "vaiawidndehiwadkjsdfsd",
        "tag": "personal",
        "date": "2024-04-10T09:46:12.255Z",
        "__v": 0
    },
    {
        "_id": "66165fe4b62705013b8b9677",
        "user": "6614d8a47345f93a66182fee",
        "title": "Title Hello 1",
        "description": "vaiawidndehiwadkjsdfsd",
        "tag": "personal",
        "date": "2024-04-10T09:46:12.255Z",
        "__v": 0
    },
    {
        "_id": "66165fe4b62705013b8b9677",
        "user": "6614d8a47345f93a66182fee",
        "title": "Title Hello 1",
        "description": "vaiawidndehiwadkjsdfsd",
        "tag": "personal",
        "date": "2024-04-10T09:46:12.255Z",
        "__v": 0
    },
    {
        "_id": "66165fe4b62705013b8b9677",
        "user": "6614d8a47345f93a66182fee",
        "title": "Title Hello 1",
        "description": "vaiawidndehiwadkjsdfsd",
        "tag": "personal",
        "date": "2024-04-10T09:46:12.255Z",
        "__v": 0
    },
    {
        "_id": "66165fe4b62705013b8b9677",
        "user": "6614d8a47345f93a66182fee",
        "title": "Title Hello 1",
        "description": "vaiawidndehiwadkjsdfsd",
        "tag": "personal",
        "date": "2024-04-10T09:46:12.255Z",
        "__v": 0
    },
    {
        "_id": "66165fe6b62705013b8b967a",
        "user": "6614d8a47345f93a66182fee",
        "title": "Title Hello 2",
        "description": "abcdefghijklmnoqrstuvwxyz",
        "tag": "personal",
        "date": "2024-04-10T09:46:14.607Z",
        "__v": 0
    }]

    return(
        <NoteContext.Provider value={{notes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;