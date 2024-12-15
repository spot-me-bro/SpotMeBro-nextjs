import FullWidthImage from '@/components/LandingPage';
import { Container } from 'react-bootstrap';
import './globals.css';

const Home = () => (
  <main>
    <Container fluid className="p-0">
      <FullWidthImage />
    </Container>
  </main>
);

export default Home;
