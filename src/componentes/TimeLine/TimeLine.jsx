import Cards from './Cards/Cards';
import styles from './TimeLine.module.scss';

const TimeLine = ({ titulos}) => {
	const playlistsName = Object.keys(titulos.playlists)
	const aluraTubes = titulos.AluraTubes;
	console.log(titulos.AluraTubes);

	return (
		<section className={styles.timeline}>
			{playlistsName.map(nomesDaPlaylist => {
				const videos = titulos.playlists[nomesDaPlaylist]

				return (
					<article key={nomesDaPlaylist}>
						<h3 className={styles.nomePlaylist}>{nomesDaPlaylist}</h3>
						<div className={styles.localVideos}>
							{videos.map(video =>{
								return (
									<Cards {...video} key={video.url}/>
								)
							})}
						</div>
					</article>
				)
					
			})}
			{/* {aluraTubes.map(dados =>{
				return (
					
				)
			})} */}


		</section>
	);
};


export default TimeLine;