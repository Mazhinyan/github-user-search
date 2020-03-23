/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { getContentAction, deletePost } from './redux';
import PropTypes from 'prop-types';
import Card from '../Card';
import InfoTable from '../InfoTable.js';
import { withNamespaces } from 'react-i18next';

const ContentUI = ({ getContentAction, deletePost, user, t }) => {
	const { loading, data, err } = user,
		/**
	 * trigger for boolean value
	 */
		triggerShow = () => {
			setShow((prevState) => !prevState);
		},
		//boolean value
		[ show, setShow ] = useState(false),
		/**
		 * delete store data
		 */
		customDeletePost = () => {
			deletePost();
		};

	if (err) {
		// if has any errors or problems
		return <p>{t('validation')}</p>;
	}
	return (
		<main>
			{!!Object.values(data).length ? (
				<section>
					<Card img={data.avatar_url} name={data.name} bio={data.bio} userName={data.login}>
						<Fragment>
							<button className="btn btn-primary mx-1" onClick={customDeletePost}>
								{t('button.delete')}
							</button>
							<button className="btn btn-primary mx-1" onClick={triggerShow}>
								{show ? t('button.showLess') : t('button.showMore')}
							</button>
						</Fragment>
					</Card>
					{show && <InfoTable data={Object.entries(data)} />}
				</section>
			) : (
				<button
					className="btn btn-success m-auto d-block"
					onClick={() => getContentAction()}
					disabled={loading}
				>
					{loading ? (
						<span>
							<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
							{t('button.load')}...
						</span>
					) : (
						<span>{t('button.getUser')}</span>
					)}
				</button>
			)}
		</main>
	);
};

const mapDispatchToProps = { getContentAction, deletePost },
	mapStateToProps = (state) => ({
		user: state.user
	}),
	Content = withNamespaces()(ContentUI);
export default connect(mapStateToProps, mapDispatchToProps)(Content);

ContentUI.propTypes = {
	getContentAction: PropTypes.func.isRequired,
	deletePost: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
	err: PropTypes.any,
	t: PropTypes.func.isRequired
};
