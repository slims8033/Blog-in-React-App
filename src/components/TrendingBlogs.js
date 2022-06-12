import { Media, Spinner } from 'react-bootstrap';
import useFetch from '../custom hooks/useFetch';
import { Link } from 'react-router-dom';
const TrendingBlogs = () => {
	const { data, isLoading, isError } = useFetch('http://localhost:8000/trendingblogs');
	return (
		<div style={{}}>
			<h3>
				Trending blogs{' '}
				<img width={24} src="https://cdn4.iconfinder.com/data/icons/social-45/32/trending-512.png" alt="img" />
			</h3>
			<div className="loading-error">
				{isError && <h2>Error,response status is not OK</h2>}
				{isLoading && (
					<h2>
						Loading
						<Spinner animation="border" role="status" style={{ color: '#f1356d' }}>
							<span className="sr-only">Loading...</span>
						</Spinner>
					</h2>
				)}
			</div>
			<div style={{ width: '90%' }} className=" trending-blogs-container mx-auto">
				{data &&
					data.map((blog) => (
						<Media style={{}} className=" w-50 mx-auto p-2" key={blog.id}>
							<h2 className="mr-2">{blog.id}</h2>
							<img
								width={34}
								height={34}
								style={{ borderRadius: '100%' }}
								className="mr-2"
								src={blog.thumbnail}
								alt="jj"
							/>
							<Link to={`/trendingblogs/${blog.id}`}>
								<Media.Body className="trending-blogs-media">
									<h6 style={{ fontWeight: 'bold', color: '#f1356d' }}>{blog.title}</h6>

									<h6>
										<b>By: {blog.author}</b>
									</h6>
									<p>feb 28</p>
								</Media.Body>
							</Link>
						</Media>
					))}
			</div>
		</div>
	);
};

export default TrendingBlogs;
