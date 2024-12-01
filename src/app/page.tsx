import FullWidthImage from '@/components/FullWidthImage';
import { Container } from 'react-bootstrap';
import './globals.css';

const Home = () => (
	<main>
	  <Container fluid className="p-0">
		{/* Add the full-width image to the homepage */}
		<FullWidthImage />
	  </Container>
	</main>
  );
  
  export default Home;