import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { ToDoItem } from "../types/PropTypes";

interface FilterState {
    sortBy: string;
    titleFilter: string;
    completedFilter: boolean;
}

const initialState: FilterState = {
    sortBy: 'dateCreated',
    titleFilter: '',
    completedFilter: false,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSortBy: (state, action: PayloadAction<string>) => {
            state.sortBy = action.payload;
        },
        setTitleFilter: (state, action: PayloadAction<string>) => {
            state.titleFilter = action.payload;
        },
        toggleCompletedFilter: (state) => {
            state.completedFilter = !state.completedFilter;
        }
    }
});

export const { setSortBy, setTitleFilter, toggleCompletedFilter } = filterSlice.actions;
export const filterSortBy = (state: RootState) => state.filter.sortBy;
export const filterTitleFilter = (state: RootState) => state.filter.titleFilter;
export const filterCompletedFilter = (state: RootState) => state.filter.completedFilter;
export default filterSlice.reducer;