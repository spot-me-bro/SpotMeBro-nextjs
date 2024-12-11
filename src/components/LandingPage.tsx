'use client';

import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Link from 'next/link'; 


const LandingPage: React.FC = () => (
	<div>
	  {/* Full-width banner section */}
	  <div className="full-page-image">
		<Container>
		  <div className="see-through-card p-5">
			<h1 className="display-4 fw-bold text-white">
			  Welcome to SpotMeBro
			  <br />
			  Your Gym Journey Starts Here
			</h1>
			<p className="lead text-white">
			  Find the perfect gym partner, achieve your fitness goals, and become the best version of yourself.
			</p>
			<div className="mt-4">
			  <Link href="/about" passHref>
				<Button variant="primary" size="lg" className="me-2">Learn More</Button>
			  </Link>
			</div>
		  </div>
		</Container>
	  </div>
	</div>
  );
  
  export default LandingPage;