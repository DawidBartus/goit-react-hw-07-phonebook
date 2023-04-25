import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://6448061f7bb84f5a3e503d21.mockapi.io/phonebook/';

export const fetchContacts = createAsyncThunk(
  'numbers/fetchAllContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('person');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'numbers/addNewNumber',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('person', { name, number });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteNumber = createAsyncThunk(
  'numbers/deleteNumber',
  async (id, thunkAPI) => {
    try {
      console.log('working');
      const response = await axios.delete(`person/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
