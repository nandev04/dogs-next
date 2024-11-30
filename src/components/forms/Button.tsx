import React from 'react';
import styles from './Button.module.css';

type typeButton = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: typeButton) => {
	return (
		<button {...props} className={styles.button}>
			{children}
		</button>
	);
};

export default Button;
