import { useParams } from 'react-router';
import useFetch from '../custom hooks/useFetch';
import Patch from '../Patch';
import { Button, Media, Spinner } from 'react-bootstrap';

const DisplayBlog = () => {
	const thumbArr = [
		'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg'
	];
	const { id, type } = useParams();
	const { data: blog, isLoading, isError } = useFetch(`http://localhost:8000/${type}/${id}`);

	// changing the state for the like field
	const handleClick = async (curr, e) => {
		const target = e.target;
		const name = target.dataset.name;

		console.log(e);
		if (target.classList.contains('heart-already')) {
			console.log('inside if');
			target.classList.remove('heart-already');
		} else {
			console.log('isnide else');
			target.classList.toggle('heart-click');
		}

		let newVal = await Patch(`http://localhost:8000/${type}/${id}`, curr, name);
		console.log(name);
		blog[name] = newVal;
	};

	return (
		<div className="display-blogs-body" style={{ width: '100%', minHeight: '100vh', marginTop: '0' }}>
			{isError && <h2>Error,response status is not OK</h2>}
			{isLoading && (
				<Spinner
					style={{
						marginLeft: '50%',
						marginTop: '300px',
						color: 'black'
					}}
					animation="grow"
					role="status"
				>
					<span className="sr-only">Loading...</span>
				</Spinner>
			)}
			{blog && (
				<div style={{ width: '100%' }}>
					<div className="display-blogs-container">
						<div className="display-blogs-blog-top">
							<h1 style={{ fontSize: '3rem' }}>
								{blog.title
									.split(' ')
									.map((x) => x.charAt(0).toUpperCase().concat(x.slice(1, x.length)))
									.join(' ')}
							</h1>
							<Media className="mx-auto mb-3  test p-2" style={{ width: '45%' }} key={blog.id}>
								<img
									className="mr-2"
									width={34}
									height={34}
									src={blog.thumbnail}
									style={{ borderRadius: '100%' }}
								/>

								<Media.Body className="text-left" style={{}}>
									<h6 style={{ fontWeight: 'bold', color: '#f1356d' }}>
										{`By: ${blog.author}`}
										<br />
										<span>3min read</span>
									</h6>
								</Media.Body>
							</Media>
							<img className="mb-4 w-100" src={blog.img} alt="img" />
							<h4 style={{}}>
								<i>{blog.opening}</i>
							</h4>
						</div>
						<div className="display-blogs-blog-bottom">
							<h2>{blog.heading}</h2>
							<p style={{ fontSize: '1.2rem' }}>{blog.body}</p>
						</div>
					</div>
					<svg
						onClick={(e) => {
							handleClick(blog.like, e);
						}}
						style={{ position: 'fixed', left: '50', bottom: '300' }}
						xmlns="http://www.w3.org/2000/svg"
						width="34"
						height="34"
						viewBox="0 0 24 24"
					>
						<path
							data-name="like"
							className={blog.like === true ? 'heart-already' : ''}
							d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"
						/>
					</svg>
					<svg
						onClick={(e) => {
							handleClick(blog.bookmark, e);
						}}
						style={{ position: 'fixed', left: '110', bottom: '300' }}
						xmlns="http://www.w3.org/2000/svg"
						width="38"
						height="38"
						viewBox="0 0 24 24"
					>
						<path
							className={blog.bookmark === true ? 'heart-already' : ''}
							data-name="bookmark"
							d="M18 24l-6-5.269-6 5.269v-24h12v24z"
						/>
					</svg>
				</div>
			)}
		</div>
	);
};

export default DisplayBlog;
