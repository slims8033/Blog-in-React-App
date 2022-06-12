import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBarz = () => {
	return (
		<Navbar expand="lg" className="navbar-container mb-0">
			<Link to="/">
				<Navbar.Brand className="navbar-brand" href="#home">
					The Blog Inn
				</Navbar.Brand>
			</Link>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto w-25 nav">
					<Nav.Link>
						<Link to="/">
							<b>Home</b>
						</Link>
					</Nav.Link>

					<Nav.Link
						href="/create"
						style={{
							color: 'whitesmoke',
							backgroundColor: ' #f1356d',
							borderRadius: '10px',
							fontWeight: '600'
						}}
					>
						New Blog
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBarz;
