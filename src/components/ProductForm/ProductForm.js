import styles from './ProductForm.module.scss';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const ProductForm = (props) => {
	return (
		<form>
			<OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} />
			<OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
			<Button className={styles.button} action={props.addToCart}>
				<span className='fa fa-shopping-cart' />
			</Button>
		</form>
	);
};

ProductForm.propTypes = {
	sizes: PropTypes.array.isRequired,
	colors: PropTypes.array.isRequired,
	currentSize: PropTypes.string.isRequired,
	currentColor: PropTypes.string.isRequired,
	setCurrentColor: PropTypes.func.isRequired,
	setCurrentSize: PropTypes.func.isRequired,
	addToCart: PropTypes.func.isRequired,
};

export default ProductForm;
