export function SignUpAction(name, value) {
	return {
		type: "SIGNUP_INPUT",
		name,
		value
	}
}

export function SignUpSubmit(data) {
	return (dispatch) => {
		return fetch('/api/register', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data)
		})
		.then((res) => {
			if(res.status === 200) {
				console.log("Ayee")
			} else {
				console.log("Awhhh")
			}
		})
	}
}