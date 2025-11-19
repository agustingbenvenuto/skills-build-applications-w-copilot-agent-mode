import React, { useEffect, useState } from 'react';
import { Button, Card, Modal, Table } from 'react-bootstrap';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const codespace = process.env.REACT_APP_CODESPACE_NAME || 'localhost';
  const endpoint = `https://${codespace}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Activities API endpoint:', endpoint);
        console.log('Fetched activities data:', data);
        setActivities(data.results || data);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, [endpoint]);

  return (
    <Card className="shadow">
      <Card.Body>
        <Card.Title as="h3">Activities</Card.Title>
        <Button variant="primary" onClick={() => setShowModal(true)}>Show Modal</Button>
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{JSON.stringify(activity)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Activity Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Modal content for activities.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
};

export default Activities;
