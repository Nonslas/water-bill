import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select';
// import { useHistory } from 'react-router-dom'
// import { nanoid } from '@reduxjs/toolkit'
import { fetchCustomers } from '../customers/customersSlice'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];


const AddBillForm = () => {
  const dispatch = useDispatch()
  const status = useSelector(state => state.customers.status)
  const customers = useSelector(state => state.customers.customers)
  const options = customers.map(customer => {
    return {'value': customer, 'label': customer.name}
  })

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [taxNumber, setTaxNumber] = useState('');

  const [selectedOption, setSelectedOption] = useState({})

  const onNameChanged = e => setName(e.target.value)
  const onAddressChanged = e => setAddress(e.target.value)
  const onPhoneNumberChanged = e => setPhoneNumber(e.target.value)
  const onTaxNumberChanged = e => setTaxNumber(e.target.value)

  const onSubmit = e => {
    /*db.post({
      name,
      address,
      phoneNumber,
      taxNumber
    }).then(response => {
      dispatch(
        customerAdded({
          id: response.id,
          name,
          address,
          phoneNumber,
          taxNumber,
        })
      )
    })*/

    /*setName('')
    setAddress('')
    setTaxNumber('')
    setPhoneNumber('')*/

    // console.log('onSubmit')
    e.preventDefault()
  }

  let handleChange = selectedOption => {
    setSelectedOption({ selectedOption });
    // console.log(`Option selected:`, selectedOption);
    // setAddress(selectedOption)
    let customer = selectedOption.value
    setAddress(customer.address)
    setPhoneNumber(customer.phoneNumber)
    setTaxNumber(customer.taxNumber)
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCustomers())
    }
  }, [])

  return (
    <div className="shadow p-4 rounded-lg border my-4 bg-white">

      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <div className="col-span-6">
            <label htmlFor="">Họ tên</label>
            <Select
              onChange={handleChange}
              options={options}
            />
          </div>
          </div>
          
          <div>
            <label htmlFor="">Địa chỉ</label>
            <input className="block w-full border rounded px-2 py-1" name="address" value={address} readOnly />
          </div>

          <div>
            <label htmlFor="">SĐT</label>
            <input className="block w-full border rounded px-2 py-1" name="phone" value={phoneNumber} readOnly/>
          </div>
          
          <div>
            <label htmlFor="">Mã số thuế</label>
            <input className="block w-full border rounded px-2 py-1" name="tax" value={taxNumber} readOnly/>
          </div>

          <div>
            <label htmlFor="">Chỉ số cũ</label>
            <input className="block w-full border rounded px-2 py-1" name="tax" value={customer.old} readOnly/>
          </div>

        </div>

        <div className="mt-4">
          <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm</button>
        </div>

      </form>
    </div>
  )
}

export default AddBillForm