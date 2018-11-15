document.getElementById("contact-form").addEventListener("submit", function(e){
	/* stores contact data and shows it in a thank-you dialog */
	/* prevent form from submitting and reloading the page */
	e.preventDefault();
	const name = document.querySelector("input[name='first-name']").value;
	const email = document.querySelector("input[name='email']").value;
	showDialog("Message sent","<p>Thank you for contacting us, " + name+ "! We will get back to you at " + email + " as soon as we can.</p>");

	/* clear inputs */
	const inputs = document.querySelectorAll(".content input, .content textarea");
	for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].classList.contains("submit")) {
            /* stops us from removing the text of the submit button */
            inputs[i].value = "";
        }
	}
});