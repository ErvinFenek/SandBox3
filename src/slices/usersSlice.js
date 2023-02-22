import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const SLICE_NAME = "users";

export const fetchUsers = createAsyncThunk(
    `${SLICE_NAME/fetchUsers}`,
    async (thunkApi, payload) => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
                (response) => response.json()
            );

        return data;
    }
);

export const usersSlice = createSlice({
    name: "SLICE_NAME",
    initialState: {
        list: [],
    },
    reducers: {
        addUser: (state, { payload }) => {
            state.list.push(payload);
        },
        deleteUserById: (state, { payload }) => {
            state.list = state.list.filter(({ id }) => id !== payload);
        },
        setAdmin: (state, {id, isAdmin}) => {
            const userIndex = state.list.findIndex(({userId}) => userId === id);
            state.list[userIndex].isAdmin = isAdmin;
        },
    //    action for setAdmin:
    //     dispatch(setAdmin({ id: userId, isAdmin: true/false }))
    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, { payload }) => {
            console.log(payload);
            state.list = payload;
        }
    },
});

export default usersSlice.reducer;
export const { addUser, deleteUserById, setAdmin } = usersSlice.actions;
