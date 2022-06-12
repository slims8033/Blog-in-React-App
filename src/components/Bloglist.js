import { Button, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteEntry } from '../Delete';
import { useState, useEffect } from 'react';
import Modalmessage from './Modalmessage';

const BlogList = (props) => {
	const blogs = props.blogs;
	const [ isModal, setModal ] = useState(false);
	const handleDel = async (id) => {
		const response = await deleteEntry('http://localhost:8000/blogs/' + id);
		console.log(this);
		if (response) {
			setModal(true);
		}
	};
	return (
		<div style={{ maxHeight: '100%', overflowY: 'scroll' }} className="blogs-list-container">
			<h2 className="mb-3">Your Blogs:</h2>
			{blogs.map((blog) => (
				<Media className="mx-auto mb-3  media-blogs-list w-100" key={blog.id} id={blog.id}>
					<img width={74} height={74} className="mr-4" src={blog.thumbnail} alt="jj" />
					<Link to={`/blogs/${blog.id}`}>
						<Media.Body>
							<h6 style={{ fontWeight: 'bold', color: '#f1356d' }}>{blog.title}</h6>
							<h6 className="mb-0">
								<b>By:{blog.author}</b>
								<br />
								{blog.date} {parseInt(Math.random() * 8)}min read
							</h6>
						</Media.Body>
					</Link>
					<Link to="/">
						<Button
							className="ml-4"
							variant="dark"
							size="sm"
							onClick={() => {
								handleDel(blog.id);
							}}
						>
							Delete
						</Button>
					</Link>
				</Media>
			))}
			{isModal && <Modalmessage />}
		</div>
		// <div className="blog-list">

		// </div>
	);
};

export default BlogList;
