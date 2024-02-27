import styles from './Header.module.scss';
import { Card } from './Card';

const Header = ({config}) => {
	return (
		<header className={styles.header}>
			<Card {...config}/>
 		</header>
	);
};


export default Header;