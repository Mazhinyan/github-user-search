import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';

const Card = ({ children, img, bio, name, userName, t }) => {
	return (
		<section className="d-inline-block">
			<div className="card" style={{ width: '25rem' }}>
				<img src={img} className="card-img-top" alt={img} />
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<h6>
						{t('user.nameIs')} <mark>{userName}</mark>
					</h6>
					{!!bio && <p className="card-text">{bio} </p>}
					{children}
				</div>
			</div>
		</section>
	);
};

export default withNamespaces()(Card);

Card.propTypes = {
	t: PropTypes.func.isRequired,
	children: PropTypes.element.isRequired,
	bio: PropTypes.any,
	img: PropTypes.string,
	name: PropTypes.string,
	userName: PropTypes.string
};
