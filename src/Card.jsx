import moment from 'moment';

const Card = ({ title, media, date_taken }) => {
	return (
		<div key={date_taken} className="card mb-3" style={{ width: '300px' }}>
			<img src={media?.m} className="card-img-top" alt="image" />
			<div className="card-body">
				<strong className="card-text">
					{title === ' ' ? 'No Title' : title}
				</strong>
			</div>
			<div className="card-footer text-muted">
				<p className="card-text">
					Take - {moment(date_taken).format('ddd DD MMMM yyyy')}
				</p>
			</div>
		</div>
	);
};

export default Card;
