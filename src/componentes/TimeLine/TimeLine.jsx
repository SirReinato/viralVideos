import styles from './TimeLine.module.scss';

const TimeLine = ({ titulos}) => {
	const playlistsName = Object.keys(titulos.playlists)

	return (
		<section className={styles.timeline}>
			{playlistsName.map(nomesDaPlaylist => {
				const videos = titulos.playlists[nomesDaPlaylist]

				return (
					<article key={nomesDaPlaylist}>
						<h3>{nomesDaPlaylist}</h3>
						<div>
							{videos.map(video =>{
								return (
									<p key={video.title}>{video.title}</p>
								)
							})}
						</div>
					</article>
				)
					
			})}

		</section>
	);
};


export default TimeLine;