import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCustomers, selectCustomerById } from './customersSlice'
import { useParams,  useHistory } from 'react-router-dom'
import { db } from './CustomersPage'

export const EditCustomerForm = () => {
  const history = useHistory()
  const { id } = useParams()
  const dispatch = useDispatch()
  const status = useSelector(state => state.customers.status)
  let customer = useSelector(state => selectCustomerById(state, id)) ?? {}

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCustomers())
    }

    setName(customer.name)
    setAddress(customer.address)
    setPhoneNumber(customer.phoneNumber)
    setTaxNumber(customer.taxNumber)

  }, [])

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [taxNumber, setTaxNumber] = useState('');

  const onNameChanged = e => setName(e.target.value)
  const onAddressChanged = e => setAddress(e.target.value)
  const onPhoneNumberChanged = e => setPhoneNumber(e.target.value)
  const onTaxNumberChanged = e => setTaxNumber(e.target.value)

  const onSubmit = e => {
    db.put({
      _id: customer._id,
      _rev: customer._rev,
      name,
      address,
      phoneNumber,
      taxNumber
    }).then(response => {
      dispatch(fetchCustomers())
      history.push('/customers')
    })
    
    e.preventDefault()
  }

  return (
    <div className="shadow p-4 rounded-lg border my-4 bg-white">

      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="col-span-6">
            <label htmlFor="">Họ tên</label>
            <input className="block w-full border rounded" name="name" value={name} onChange={onNameChanged} required />
          </div>
          </div>
          
          <div>
            <label htmlFor="">Địa chỉ</label>
            <input className="block w-full border rounded" name="address" value={address} onChange={onAddressChanged} required />
          </div>

          <div>
            <label htmlFor="">SĐT</label>
            <input className="block w-full border rounded" name="phone" value={phoneNumber} onChange={onPhoneNumberChanged} required />
          </div>
          
          <div>
            <label htmlFor="">Mã số thuế</label>
            <input className="block w-full border rounded" name="tax" value={taxNumber} onChange={onTaxNumberChanged}/>
          </div>

        </div>

        <div className="mt-4">
          <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sửa
          </button>
        </div>

      </form>
    </div>
  )
}
