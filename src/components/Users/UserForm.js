import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

export  function UserForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [isAdmin, setIsAdmin] = useState(false);

    const onNameChangeHandler = (e) => {
        setName(e.target.value);
    };

    const onAgeChangeHandler = (e) => {
        setAge(e.target.value);
    };

    const onStatusChangeHandler = (e) => {
        setIsAdmin(!!e.target.checked);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        onSubmit({
            id: v4(),
            name,
            age,
            isAdmin
        });
        setName("");
        setAge(0);
        setIsAdmin(!isAdmin);
    }

    return (

        <form onSubmit={onSubmitHandler}>
            <div>
                Name:
                <input
                    value={name}
                    placeholder="Type name"
                    type="text"
                    onChange={onNameChangeHandler}
                />
            </div>
            <div>
                Age:
                <input
                    value={age}
                    placeholder="Type age"
                    type="number"
                    onChange={onAgeChangeHandler}
                />
            </div>
            <div>
                <label>
                    Is "{name || "user"}" admin?
                <input
                    value={isAdmin}
                    type="checkbox"
                    name="isAdmin"
                    onChange={onStatusChangeHandler}
                />
                </label>
            </div>
            <button type="submit">Add user</button>
        </form>

    )

}

UserForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}