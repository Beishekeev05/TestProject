import { createSlice } from "@reduxjs/toolkit";

export type Types = {
	id?: number;
	name?: string;
	lastname?: string;
	email?: string;
	password?: string;
};

type ArrTypes = Types & {
	todo: [];
	token: string;
	isAuth: boolean;
};
const initialState: ArrTypes = {
	todo: [],
	token: "",
	isAuth: false,
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {},
	extraReducers: () => {},
});
