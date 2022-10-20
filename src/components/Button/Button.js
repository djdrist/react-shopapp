import styles from './Button.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = (props) => {
	return (
		<button className={clsx(styles.button, props.className)} onClick={(e) => props.action(e)}>
			{props.children}
		</button>
	);
};

Button.propTypes = {
	action: PropTypes.func.isRequired,
};

export default Button;
