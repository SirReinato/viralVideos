import styles from './AluraTubs.module.scss';

const AluraTubs = ({foto, nome}) => {
	return (
		<figure className={styles.aluratubs}>
			<img src={foto} alt={nome} />
			<figcaption>
				<h3>{nome}</h3>
			</figcaption>
 		</figure>
	);
};


export default AluraTubs;