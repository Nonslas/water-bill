import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { fetchCustomers, customerAdded, selectCustomerById } from './customersSlice'
import { useParams,  useHistory } from 'react-router-dom'

const DeleteCustomerPage = props => {
	const { id } = useParams()

	let customer = useSelector(state => selectCustomerById(state, id)) ?? {}

	const handleOnClick = () => {
		alert('clicked')
	}

	return (
		<div>
			Xoa khach hang { customer.name }?
			<button onClick={handleOnClick}>Xoa</button>
		</div>
	)
}

DeleteCustomerPage.propTypes = {

}

export default DeleteCustomerPage