import React from 'react'
import PouchDB from 'pouchdb'

const db = new PouchDB('test-db')

// export default function db() {
// }

export {
	db
}