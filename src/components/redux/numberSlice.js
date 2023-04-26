import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteNumber, fetchContacts } from './operations';

// person = [{name: string, number: string, isFav: boolen}]

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const numberSlice = createSlice({
  name: 'numbers',
  initialState: {
    person: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.person = action.payload;
    },
    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.person.push(action.payload);
    },

    [deleteNumber.pending]: handlePending,
    [deleteNumber.rejected]: handleRejected,
    [deleteNumber.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.person.findIndex(
        person => person.id === action.payload.id
      );
      state.person.splice(index, 1);
    },
  },
});

export const numberReducer = numberSlice.reducer;
