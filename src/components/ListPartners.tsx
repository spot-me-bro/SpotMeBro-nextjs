/* eslint-disable react/prop-types */

'use client';

import { Profile } from '@prisma/client';
import { Col, Container, Row, Table } from 'react-bootstrap';

interface ListPartnersProps {
  profiles: Profile[];
}
const ListPartners: React.FC<ListPartnersProps> = ({ profiles }) => (
  <main>
    <Container id="list" fluid className="py-3">
      <Row>
        <Col>
          <h1>Match Partners</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Current Type</th>
                <th>Bio</th>
                <th>Owner</th>
              </tr>
            </thead>
            <tbody>
              {profiles.map((prof) => (
                <tr key={prof.id}>
                  <td>{prof.email}</td>
                  <td>{prof.firstName}</td>
                  <td>{prof.lastName}</td>
                  <td>{prof.type}</td>
                  <td>{prof.bio}</td>
                  <td>{prof.owner}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  </main>
);

export default ListPartners;
