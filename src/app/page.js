import Header from "@/componentes/Header/Header";
import Menu from "@/componentes/Menu/Menu";
import config from '../../config.json';
import TimeLine from "@/componentes/TimeLine/TimeLine";


export default function Home() {
  return (
    <main>
      <Menu/>
      <Header config={config}/>
      <TimeLine titulos={config} key={config.playlists}/>
    </main>
  );
}
