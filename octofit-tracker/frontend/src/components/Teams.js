import React, { useEffect, useState } from 'react';
import { Table, Card } from 'react-bootstrap';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const codespace = process.env.REACT_APP_CODESPACE_NAME || 'localhost';
  const endpoint = `https://${codespace}-8000.app.github.dev/api/teams/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Teams API endpoint:', endpoint);
        console.log('Fetched teams data:', data);
        setTeams(data.results || data);
      })
      .catch(err => console.error('Error fetching teams:', err));
  }, [endpoint]);

  return (
    <Card className="shadow">
      <Card.Body>
        <Card.Title as="h3">Teams</Card.Title>
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{JSON.stringify(team)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default Teams;
