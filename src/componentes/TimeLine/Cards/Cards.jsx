import Link from 'next/link';
import styles from './Cards.module.scss';

const Cards = ({ url, title, thumb }) => {
	return (
		<Link className={styles.link} href={url} target='_blank'>
			<img src={thumb} alt={title} />

			<h3>{title}</h3>

		</Link>
	);
};


export default Cards;