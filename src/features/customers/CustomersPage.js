import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchCustomers } from './customersSlice'
import { AddCustomerForm } from './AddCustomerForm'
import { CustomersList } from './CustomersList'
import PouchDB from 'pouchdb'

export const db = new PouchDB('customers')

export function CustomersPage() {
  const dispatch = useDispatch()

  dispatch(fetchCustomers())

  return (
    <div>
      <AddCustomerForm />
      <CustomersList />
    </div>
  )
}