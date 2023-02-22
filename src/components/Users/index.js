import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { UserForm } from "./UserForm";
import { UserItem } from "./UserItem";

import { addUser, deleteUserById, fetchUsers, setAdmin } from "../../slices/usersSlice";

export function Users() {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.users.list);

    const onUserSaveHandler = (user) => {
        dispatch(addUser(user));
    }
    const onUserDeleteHandler = (id) => () => dispatch(deleteUserById(id));

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <>
            <UserForm onSubmit={onUserSaveHandler}/>
            {userList?.map((user, index) => (
                <UserItem
                    {...user}
                    index={index + 1}
                    key={user.id}
                    onDelete={onUserDeleteHandler(user.id)}/>
            ))}
        </>
    );
}