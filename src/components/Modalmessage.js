import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Modalmessage = () => {
	const [ isShow, setShow ] = useState(true);
	const handleClose = () => {
		setShow(false);
		window.location.reload(false);
	};
	return (
		<Modal show={isShow}>
			<Modal.Header closeButton>
				<Modal.Title style={{ width: '100%', textAlign: 'center' }}>Alert!</Modal.Title>
			</Modal.Header>
			<Modal.Body style={{ backgroundColor: '#f1356d', fontWeight: 'Bold' }}>
				The Blog has been Deleted
			</Modal.Body>
			<Modal.Footer>
				<Button variant="dark" onClick={handleClose}>
					Ok
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default Modalmessage;
