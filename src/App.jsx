import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
	const baseUri = `http://localhost:4000`;
	const [data, setData] = useState('');

	useEffect(() => {
		const getData = async () => {
			await axios
				.get(`${baseUri}/get`)
				.then((res) => {
					// console.log(res.data);
					setData(res.data);
				})
				.catch((err) => console.log(err));
		};

		getData();

		function jsonFlickrFeed(rsp) {
			// for (var i = 0; i < rsp.items?.length; i++) {
			// var blog = rsp.blogs.blog[i];

			// }
			let item = rsp.items;
			console.log(rsp);
		}

		jsonFlickrFeed(data);
		// console.log()
	}, []);

	return (
		<div className="App">
			<h1>hello world</h1>
		</div>
	);
}

export default App;
