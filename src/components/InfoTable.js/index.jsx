import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';

const isURL = (url) => {
	try {
		new URL(url);
		return (
			<a href={url} target="_blank" rel="noopener noreferrer">
				{url}
			</a>
		);
	} catch (e) {
		return url + '';
	}
};

const InfoTable = ({ data, t }) => {
	if (data.length) {
		return (
			<section className="d-block">
				<h3>{t('descriptions.full')}</h3>
				<ul>
					{data.map(([ key, value ], index) => {
						return (
							<li key={index}>
								{key} {isURL(value)}
							</li>
						);
					})}
				</ul>
			</section>
		);
	}

	return <h3>{t('descriptions.empty')}</h3>;
};

export default withNamespaces()(InfoTable);
InfoTable.propTypes = {
	data: PropTypes.array.isRequired,
	t: PropTypes.func.isRequired
};
