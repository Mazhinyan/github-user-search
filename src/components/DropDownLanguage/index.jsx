import React from 'react';
import i18n from '../../localization/i18n';
import { withNamespaces } from 'react-i18next';

const DropDownLang = () => {
	/**
	 * 
	 * @param {get select lang. value} param0 
	 */
	const changeLanguage = ({ target }) => {
		const { value } = target;
		i18n.changeLanguage(value);
	};
	return (
		<select className="btn btn-info" onChange={changeLanguage}>
			<option value="en">English</option>
			<option value="ru">Русский</option>
		</select>
	);
};

export default withNamespaces()(DropDownLang);
