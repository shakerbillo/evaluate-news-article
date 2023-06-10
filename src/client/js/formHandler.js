// Global variables
const model = document.getElementById('model');
const score_tag = document.getElementById('score_tag');
const agreement = document.getElementById('agreement');
const subjectivity = document.getElementById('subjectivity');
const confidence = document.getElementById('confidence');
const irony = document.getElementById('irony');

// Personal API Key for meaningcloud without environment variables
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
const APIkey = '1a9ea4677a58cc1e4067cf2f81236b59'; // using API key since process.env file is nit recommended to used on the client side,

// submit function
const handleSubmit = (e) => {
	e.preventDefault();

	let urlInput = document.getElementById('url').value;
	const isURL = Client.checkForURL(urlInput);

	if (urlInput === '' || !isURL) {
		alert('Please enter a valid URL');
	} else {
		getAPIData(baseURL, APIkey, urlInput)
			.then((data) => {
				console.log(`click ${data}`);
				const info = {
					agreement: data.agreement,
					confidence: data.confidence,
					irony: data.irony,
					model: data.model,
					score_tag: data.score_tag,

					subjectivity: data.subjectivity,
				};
				postData('/api', info);
			})
			.then(() => {
				updateUI(); // Update UI data
				// urlInput.reset(); // reset form input
			});
	}
};

// button.addEventListener('click', handleSubmit);

/* Function to GET API Data*/
const getAPIData = async (baseurl, api, url) => {
	const res = await fetch(`${baseurl}?key=${api}&url=${url}&lang=en`);
	try {
		const data = await res.json();
		console.log(data);
		return data;
	} catch (err) {
		console.log('error', err);
		// appropriately handle the error
	}
};

/* Function to POST data */
const postData = async (path, data) => {
	console.log(`URL is: ${path}, Data:${data}`);
	try {
		const res = await fetch(path, {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
	} catch (err) {
		console.log('error:', err);
	}
};


/* Function to GET Project Data */
const updateUI = async () => {
	const req = await fetch('/all');
	try {
		const allData = await req.json();
		console.log(allData);
		// Update UI dynamically
		agreement.innerHTML = `Agreement: ${allData.agreement}`;
		confidence.innerHTML = `Confidence: ${allData.confidence}`;
		irony.innerHTML = `Irony: ${allData.irony}`;
		model.innerHTML = `Model: ${allData.model}`;
		score_tag.innerHTML = `Score_Tag: ${allData.score_tag}`;
		subjectivity.innerHTML = `Subjectivity: ${allData.subjectivity}`;
	} catch (err) {
		console.log('error', err);
	}
};

export { handleSubmit };
