import React from "react";
import { Contact } from "../../models/Contact.class";
import PhoneBook from "../pure/PhoneBook";

const UserStatus = () => {
	const defaultStatus = new Contact(
		"Gustavo",
		"Pereira",
		"gapv@test.com",
		true
	);

	return (
		<div>
			<h1>Contact list</h1>
			<PhoneBook contact={defaultStatus} />
		</div>
	);
};

export default UserStatus;
