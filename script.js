//your JS code here. If required.

const form = document.getElementById("signup-form");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const name = document.getElementById("name");
	const email = document.getElementById("email");
	const password = document.getElementById("password");
	const confirmPassword = document.getElementById("confirm-password");

	if(name.value === "" || email.value === "" || password.value === "" || confirmPassword.value === ""){
		return ;
	}

	if(password.value !== confirmPassword.value) {
		alert("Passwords do not match");
	};

	sessionStorage.setItem("name", name.value);
	sessionStorage.setItem("email", email.value);
	sessionStorage.setItem("password", password.value);
	sessionStorage.setItem("confirmPassword", confirmPassword.value);
	form.reset();
})




















