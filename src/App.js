import "./App.css";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

function App() {
	const [lsPageView, setLsPageView] = useState(0);
	const [ssPageView, setSsPageView] = useState(0);
	const [personData, setPersonData] = useState({});

	useEffect(() => {
		//demoLocalstorage();
		// demoSessionstorage();
		// updateLSPageView();
		// updateSSPageView();
		console.log("In useEffect");
		demoCookie();
	}, []);

	const demoCookie = () => {
		// storing a text
		// storing Array
		// storing an Object
		Cookies.set("referer", "google");

		Cookies.set("myArrayCookie", JSON.stringify([1, 2, 3]));

		let user = {
			name: "Ankur",
			city: "Surrey",
			institute: "Brainstation",
		};
		Cookies.set("user", JSON.stringify(user), { expires: 2, secure: true });

		// Read all the above cookies
		console.log(Cookies.get("referer"));
		console.log(JSON.parse(Cookies.get("myArrayCookie")));
		console.log(JSON.parse(Cookies.get("user")));
	};

	const demoSessionstorage = () => {
		const temp = lsPageView + 1;
		// Set LS data
		sessionStorage.setItem("lspageviewkey", temp);
		sessionStorage.setItem("myArray", JSON.stringify([1, 2, 3]));
		// Store a person object
		let person = {
			name: "Ankur",
			city: "Surrey",
			institute: "Brainstation",
		};
		let tempPerson = sessionStorage.getItem("personKey");
		if (tempPerson) {
			console.log("tempperson", tempPerson);
			setPersonData(JSON.parse(tempPerson));
		} else {
			sessionStorage.setItem("personKey", JSON.stringify(person));
			setPersonData(person);
		}

		// Read LS data
		// Get the sessionStorage data
		// then store in the state
		let tempVal = sessionStorage.getItem("lspageviewkey");
		console.log(tempVal);

		let tempArr = sessionStorage.getItem("myArray");
		console.log(JSON.parse(tempArr));
	};

	const updateLSPageView = () => {
		// Get Page view from LS
		let numViews = localStorage.getItem("lsPageView");
		// if LS is set
		// update the view by +1
		if (numViews) {
			numViews++;
		} else {
			numViews = 1;
		}

		// Set a new value for Storage
		localStorage.setItem("lsPageView", numViews);
		// Set Val in the state
		setLsPageView(numViews);
	};

	const updateSSPageView = () => {
		// Get Page view from LS
		let numViews = sessionStorage.getItem("ssPageView");
		// if LS is set
		// update the view by +1
		if (numViews) {
			numViews = parseInt(numViews) + 1;
		} else {
			numViews = 1;
		}

		// Set a new value for Storage
		sessionStorage.setItem("ssPageView", numViews);
		// Set Val in the state
		setSsPageView(numViews);
	};

	const demoLocalstorage = () => {
		const temp = lsPageView + 1;
		// Set LS data
		localStorage.setItem("lspageviewkey", temp);
		localStorage.setItem("myArray", JSON.stringify([1, 2, 3]));
		// Store a person object
		let person = {
			name: "Ankur",
			city: "Surrey",
			institute: "Brainstation",
		};
		let tempPerson = localStorage.getItem("personKey");
		if (tempPerson) {
			console.log("tempperson", tempPerson);
			setPersonData(JSON.parse(tempPerson));
		} else {
			localStorage.setItem("personKey", JSON.stringify(person));
			setPersonData(person);
		}

		// Read LS data
		// Get the localstorage data
		// then store in the state
		let tempVal = localStorage.getItem("lspageviewkey");
		console.log(tempVal);

		let tempArr = localStorage.getItem("myArray");
		console.log(JSON.parse(tempArr));
	};

	const cleanupStorage = () => {
		// Deletes every thing
		localStorage.clear();
		sessionStorage.clear();

		// Remove 1 key
		localStorage.removeItem("lsPageView");
		sessionStorage.removeItem("ssPageView");

		setLsPageView(0);
		setSsPageView(0);
	};

	const deleteCookies = () => {
		console.log("Click me");
		// Remove Cookies
		Cookies.remove("referer");
		Cookies.remove("user");
	};

	return (
		<>
			<div>Local Storage Page View : {lsPageView} </div>
			<div>
				{/* My Personal Info : {personData.name} | {personData.city}{" "} */}
			</div>

			<div>Session Storage Page View : {ssPageView} </div>
			<div>
				{/* My Personal Info : {personData.name} | {personData.city}{" "} */}
			</div>
			<button onClick={cleanupStorage}>Delete Storage Data</button>
			<button onClick={deleteCookies}>Delete Cookies</button>
		</>
	);
}

export default App;
