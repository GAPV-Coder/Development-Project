import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/Contact.class";

const PhoneBook = ({ contact }) => {
	return (
		<div>
			<h2>Name: {contact.name}</h2>
			<h2>Last Name: {contact.lastName}</h2>
			<h2>Email: {contact.email}</h2>
			<h2>Status contact: {contact.status ? "ONLINE" : "OFFLINE"}</h2>
		</div>
	);
};

PhoneBook.propTypes = {
	contact: PropTypes.instanceOf(Contact)
};

export default PhoneBook;
