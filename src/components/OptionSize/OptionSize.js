import styles from '../ProductForm/ProductForm.module.scss';
import PropTypes from 'prop-types';

const OptionSize = (props) => {
	const changeSize = (size) => props.setCurrentSize(size);
	return (
		<div className={styles.sizes}>
			<h3 className={styles.optionLabel}>Sizes</h3>
			<ul className={styles.choices}>
				{props.sizes.map((size, index) => {
					return (
						<li key={index}>
							<button type='button' className={size.name === props.currentSize ? styles.active : undefined} onClick={() => changeSize(size.name)}>
								{size.name}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

OptionSize.propTypes = {
	sizes: PropTypes.array.isRequired,
	currentSize: PropTypes.string.isRequired,
	setCurrentSize: PropTypes.func.isRequired,
};

export default OptionSize;
