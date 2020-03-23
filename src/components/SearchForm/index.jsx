import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getContentAction } from '../Content/redux';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';

const SearchFormUi = ({ getContentAction, t }) => {
	const [ value, setValue ] = useState(''),
		/**
		 * event submit get user info
		 */
		handleSubmit = (e) => {
			e.preventDefault();
			getContentAction(value);
		},
		/**
		 * get input value and set function state
		 */
		getInputValue = ({ target }) => {
			const { value } = target;
			setValue(value);
		};
	return (
		<form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
			<input
				className="form-control mr-sm-2"
				type="search"
				placeholder={t('inputs.placeholder')}
				onChange={getInputValue}
			/>
			<button
				className="btn btn-outline-light my-2 my-sm-0"
				type="submit"
				disabled={!value}
				style={{ cursor: !value ? 'not-allowed' : 'pointer' }}
			>
				{t('button.search')}
			</button>
		</form>
	);
};
const mapDispatchToProps = {
		getContentAction
	},
	SearchForm = withNamespaces()(SearchFormUi);

export default connect(null, mapDispatchToProps)(SearchForm);

SearchFormUi.propTypes = {
	getContentAction: PropTypes.func.isRequired,
	t: PropTypes.func.isRequired
};
