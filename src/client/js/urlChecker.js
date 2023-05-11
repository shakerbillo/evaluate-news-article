const checkForURL = (urlText) => {
	console.log('::: Running checkForURL :::', urlText);
	let regExp =
		/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
	if (regExp.test(urlText)) {
		return true;
	} else {
		return false;
	}
};

export { checkForURL };
