import React from 'react';
import PropTypes from 'prop-types';
import { Card, Carousel } from 'react-bootstrap';

const imageStyle = {
	height: '400px',
	display: 'block',
	margin: 'auto',
	borderRadius: '0.5rem'
};

const imagePath = (imageName) => {
	return `images/${imageName}`;
};

const Gallery = ({ images }) => {
	return (
		<Card bg="dark">
			<Card.Body>
				<Carousel>
					{images.map((imageName, index) =>
						<Carousel.Item key={index}>
							<a href={imagePath(imageName)} target="_blank"
								rel="noreferrer noopener">
								<img
									style={imageStyle}
									src={imagePath(imageName)}
								/>
							</a>
						</Carousel.Item>
					)}
				</Carousel>
			</Card.Body>
		</Card>
	);
};

Gallery.propTypes = {
	images: PropTypes.array.isRequired
};

export default Gallery;
