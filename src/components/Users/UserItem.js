import React from "react";
import PropTypes from "prop-types"

import { UserItemStyled } from "./styled/UserItemStyled";

export function UserItem({index, name, age, isAdmin, onDelete}) {
    return (
        <UserItemStyled>
            <div className="User_index"># {index}</div>
            <div className="User_name">Name: {name}</div>
            <div className="User_age">Age: {age}</div>
            <label>
                Admin:
                <input
                    type="checkbox"
                    checked={isAdmin}
                    onChange={() => {}}/>
            </label>
            <button onClick={onDelete}>Delete this user</button>
        </UserItemStyled>
    );
}

UserItem.propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
}