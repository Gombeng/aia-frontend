import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from './Card';

function App() {
	const baseUri = `https://aia-backend.vercel.app`;
	const [q, setQ] = useState('');
	const [photos, setPhotos] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetchPhotos();
	}, []);

	async function fetchPhotos() {
		setLoading(true);
		const { data } = await axios.get(`${baseUri}/get?page=${page}`);
		setPhotos((prevPhotos) => [...prevPhotos, ...data.items]);
		setLoading(false);
	}

	return (
		<div className="App">
			<form className="position-sticky top-0 mb-3 search-box">
				<h3>Infinite Photos From Everyone</h3>
				<input
					type="text"
					className="form-control p-2"
					placeholder="Search"
					value={q}
					onChange={(e) => setQ(e.target.value)}
				/>
			</form>
			<InfiniteScroll
				dataLength={photos.length}
				next={fetchPhotos}
				hasMore={true}
				loader={<h4>Loading...</h4>}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
			>
				{photos &&
					photos
						?.filter((e) => {
							if (q === '') return e;
							if (e.tags.toLowerCase().includes(q.toLowerCase())) return e;
						})
						?.map(({ ...rest }) => <Card {...rest} />)}
			</InfiniteScroll>
		</div>
	);
}

export default App;
