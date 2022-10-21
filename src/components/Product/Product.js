import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import { useState, useMemo, useCallback } from 'react';

const Product = (props) => {
	const [currentColor, setCurrentColor] = useState(props.colors[0]);
	const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

	const getPrice = useMemo(() => {
		const size = props.sizes.find((size) => size.name === currentSize);
		return props.basePrice + size.additionalPrice;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentSize]);

	const addToCart = useCallback((e) => {
		e.preventDefault();
		console.log(`Summary \n==========\n${props.title}\n${getPrice}\nSize: ${currentSize}\nColor: ${currentColor}`);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<article className={styles.product}>
			<ProductImage title={props.title} name={props.name} color={currentColor} />
			<div>
				<header>
					<h2 className={styles.name}>{props.title}</h2>
					<span className={styles.price}>Price: {getPrice}$</span>
				</header>
				<ProductForm
					sizes={props.sizes}
					colors={props.colors}
					currentSize={currentSize}
					currentColor={currentColor}
					setCurrentColor={setCurrentColor}
					setCurrentSize={setCurrentSize}
					addToCart={addToCart}
				/>
			</div>
		</article>
	);
};

export default Product;
