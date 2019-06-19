import React, { useState, useRef, useEffect } from "react"

const App = () => {

	const formRef = useRef()
	const firstNameRef = useRef()
	const lastNameRef = useRef()
	const listRef = useRef()

	const [contacts, setContacts] = useState(undefined)

	let db

	const handleSubmit = e => {
		e.preventDefault()
		let newItem = { firstName: firstNameRef.current.value, lastName: lastNameRef.current.value }
		let transaction = db.transaction(['contacts'], 'readwrite')
		let objectStore = transaction.objectStore('contacts')
		let request = objectStore.add(newItem)

		request.onsuccess = () => {
			firstNameRef.current.value = ''
			lastNameRef.current.value = ''
		}

		transaction.oncomplete = () => {
			console.log("Transaction complete")
		}
		transaction.onerror = () => {
			console.log("Error on transaction")
		}

		displayData()
	}

	// Set up DB
	useEffect(() => {
		let request = window.indexedDB.open("contacts", 1)

		request.onerror = () => console.log('Database failed to open')

		request.onsuccess = () => {
			console.log('Database opened successfully')
			db = request.result
		}

		request.onupgradeneeded = (e) => {
			let db = e.target.result

			let objectStore = db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true})

			objectStore.createIndex('firstName', 'firstName', { unique: false })
			objectStore.createIndex('lastName', 'lastName', { unique: false })

			console.log("Database setup complete")
		}

	}, [])

	const displayData = () => {
		listRef.current.innerHTML = ''

		const objectStore = db.transaction('contacts').objectStore('contacts')
		const nextContacts = []
		objectStore.openCursor().onsuccess = e => {
			let cursor = e.target.result
			if (cursor) {
				nextContacts.push(cursor.value)
				cursor.continue()
			}
			setContacts(nextContacts)
		}
	}

	useEffect(() => {
		displayData()
	}, [contacts])

	return (
		<main className="container">

			<form onSubmit={handleSubmit} ref={formRef}>
				<div>
					<label htmlFor="firstName">First</label>
					<input ref={firstNameRef} type="text" id="firstName" />
				</div>
				<div>
					<label htmlFor="lastName">Last</label>
					<input ref={lastNameRef} type="text" id="lastName" />
				</div>
				<button type="submit">Submit</button>
			</form>

			<div>
				<ul ref={listRef}>
					{contacts && contacts.map((contact, index) => {
						return <li key={index}>{contact.firstName} {contact.lastName}</li>
					})}
				</ul>
			</div>



		</main>
	)
}
export default App