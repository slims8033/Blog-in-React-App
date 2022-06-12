import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const BigBlog = () => {
	return (
		<Card style={{ width: '95%', padding: '2vmin' }}>
			<Card.Img
				className="mx-auto"
				style={{ width: '80%' }}
				variant="top"
				src="https://miro.medium.com/max/2400/1*y6C4nSvy2Woe0m7bWEn4BA.png"
			/>
			<Link to="/mainBlog/1">
				<Card.Body className="mx-auto" style={{ width: '80%' }}>
					<Card.Title className="card-title mb-2">
						<b style={{ color: '#f1356d' }}>How to Learn React — A roadmap from beginner to advanced</b>
					</Card.Title>
					<Card.Subtitle className="mb-2">
						<b>By: Srebalaji Thirumalai</b>
					</Card.Subtitle>
					<Card.Text>
						This guide is for people who are starting with React. I have carefully curated the best videos
						and articles in each section to make it easier for learning.
					</Card.Text>
				</Card.Body>
			</Link>
		</Card>
	);
};

export default BigBlog;
