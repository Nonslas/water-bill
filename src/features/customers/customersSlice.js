import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import PouchDB from 'pouchdb'

const db = new PouchDB('customers')

const initialState = {
	status: 'idle',
	customers: []
}

export const fetchCustomers = createAsyncThunk('customers/fetchCustomers', async () => {
  const response = await db.allDocs({include_docs: true})
  return response.rows.map(row => row.doc)
})

export const deleteCustomer = createAsyncThunk('customers/deleteCustomer', async (customer) => {
  return await db.remove(customer)
})

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
  	customerAdded(state, action) {
      state.customers.push(action.payload)
    },
  },
  extraReducers(builder) {
  	builder
	  	.addCase(fetchCustomers.fulfilled, (state, action) => {
	  		state.status = 'fulfilled'
	  		state.customers = action.payload
	  	})
	  	.addCase(deleteCustomer.fulfilled, (state, action) => {
	  		state.customers = state.customers.filter(customer => customer._id !== action.payload.id)
	  	})
	}
})

export const { customerAdded } = customersSlice.actions

export default customersSlice.reducer

export const selectCustomerById = (state, customerId) => {
	return state.customers.customers.find(customer => customer._id === customerId)
}