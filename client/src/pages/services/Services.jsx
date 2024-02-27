import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import { Dry_Cleaning, Emergency, Image1, Iron_Fold, Subscription, Wash_Fold, Wash_Iron } from '../../assets/images';

const services = [
	{
		src: Wash_Iron,
		name: 'Wash & Iron',
		title: 'All your regular wear garments will be washed, steam ironed and neatly packed for delivery.',
		link: '/wash-and-iron'
	},
	{
		src: Wash_Fold,
		name: 'Wash & Fold',
		title: 'Just in case you choose not to use our steam ironing services we will wash and fold them for you.',
		link: '/wash-and-fold'
	},
	{
		src: Iron_Fold,
		name: 'Iron & Fold',
		title: 'Get back your dirty clothes. Your clothes we will ironed and pressed to look the best for you.',
		link: '/iron-and-fold'
	},
	{
		src: Dry_Cleaning,
		name: 'Dry Cleaning',
		title: 'All your sensitive and special garments will be individually treated for any stains and dry cleaned.',
		link: '/dry-cleaning'
	},
	{
		src: Emergency,
		name: 'Emergency Service',
		title:
			'You can use our emergency service to receive services easily and quickly in our machines using very safe. ',
		link: '/emergency-service'
	},
	{
		src: Subscription,
		name: 'Subscription Based',
		title: 'You can get Best Price, Quality Service, Doorstep Pickup & Delivery Service, Hygiene & Fresh Laundry',
		link: '/subscription-based'
	}
];

const Services = () => {
  const image = Image1
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section className="mb-3" id="services">
			<Container>
				<div className="d-flex justify-content-center mt-5">
					<h2 className="text-danger head-title">Our Services</h2>
				</div>
				<Row>
					{services.map((service) => (
						<Col md={4} className="d-flex justify-content-center mt-4" key={service.src}>
							<Card style={{ width: '20rem' }}>
								<CardImg className="service-image" src={service.src} top />
								<CardBody>
									<CardTitle tag="h3" className="text-danger">
										{service.name}
									</CardTitle>
									<CardText className='text-secondary'>{service.title}</CardText>

									<Link to={service.link}>
										<Button color="danger" className="service-button">
											<i className="now-ui-icons arrows-1_minimal-right" />
											<span className="nav-name"> Select Service</span>
										</Button>
									</Link>
								</CardBody>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Services;
