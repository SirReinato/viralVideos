import styles from './Header.module.scss';
import { Card } from './Card';
import Banner from '../Banner/Banner';

const Header = ({config}) => {
	return (
		<header className={styles.header}>
			<Banner/>
			<Card {...config}/>
 		</header>
	);
};


export default Header;