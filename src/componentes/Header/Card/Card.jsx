import styles from './Card.module.scss';

const Card = ({foto, name, job}) => {
	return (
		<figure className={styles.card}>
 			<img className={styles.perfil} src={foto} alt="Foto de perfil do card" />
			<figcaption className={styles.credencias}>
				<h2>{name}</h2>
				<p>{job}</p>
			</figcaption>
 		</figure>
	);
};


export default Card;