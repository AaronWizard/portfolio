import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';

const carouselStyle = {
	background: 'lightgrey',
	padding: '1em',
	borderRadius: '4px'
};

const imageStyle = {
	height: '400px',
	display: 'block',
	margin: 'auto'
};

const imagePath = (imageName) => {
	return `images/${imageName}`;
};

const Gallery = ({ images }) => {
	return (
		<Carousel style={carouselStyle}>
			{images.map((imageName, index) =>
				<Carousel.Item key={index}>
					<a href={imagePath(imageName)} target="_blank"
						rel="noreferrer noopener">
						<img style={imageStyle} src={imagePath(imageName)} />
					</a>
				</Carousel.Item>
			)}
		</Carousel>
	);
};

Gallery.propTypes = {
	images: PropTypes.array.isRequired
};

export default Gallery;
