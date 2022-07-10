import {useState,useEffect} from 'react';
import AddMovie from "../AddMovie/AddMovie.js";
import "./app.css";
import MovieList from '../MovieList/MovieList.js';
import Header from '../Header/Header.js';
import Description from '../Description/Description.js';
import {Routes,Route } from "react-router-dom";

const info = [
  { title:'Chernobyl',trailer:"https://www.youtube.com/embed/s9APLXM9Ei8", img:'/image/Chernobyl.jpg', description:"Les événements relatent les circonstances de l'explosion du réacteur nucléaire de Tchernobyl en avril 1986 en Union socialiste soviétique, qui est devenue l'une des pires catastrophes humaines du vingtième siècle.", posterURL:"www.chernobyl.com", rating:9.4 },
  { title:'Cosmos',trailer:"https://www.youtube.com/embed/_erVOAbz420", img:'/image/Cosmos.jpg', description:"Une exploration de notre découverte des lois de la nature et des coordonnées dans l'espace et le temps.", posterURL:"www.cosmos.com", rating:9.3 },
  { title:'MR. ROBOT',trailer:"https://www.youtube.com/embed/xIBiJ_SzJTA", img:'/image/MR. ROBOT.jpg', description:"La série raconte l'histoire d'un jeune homme qui souffre de troubles de l'anxiété sociale. Travaillant comme programmeur informatique le matin et comme pirate informatique le soir, il est chargé par un homme mystérieux qui se fait appeler 'M. Robot' d'infiltrer les grandes entreprises qui, selon lui, corrompent la société.", posterURL:"www.mrrobot.com", rating:8.5 },
  { title:'Planet Earth',trailer:"https://www.youtube.com/embed/7n_1JZgDPf4", img:'/image/Planet Earth.jpg', description:"Récompensée par un Emmy Award, 11 épisodes, cinq ans de tournage, la série documentaire sur la nature la plus coûteuse jamais commandée par la BBC, et la première à être filmée en haute définition.", posterURL:"www.planetearth.com", rating:9.4 },
  { title:'Prison Break',trailer:"https://www.youtube.com/embed/AL9zLctDJaU", img:'/image/Prison Break.jpg', description:"Un homme innocent est emprisonné et condamné à mort, et son seul espoir réside dans son jeune frère, qui commet un crime afin de s'envoyer en prison et élabore un plan pour s'évader ensemble, en plus de quelques autres civils en prison, ils rencontrent une série de problèmes et de dilemmes intéressants et passionnants, et ils essaient de les résoudre afin de mettre en œuvre le plan, peu importe ce qu'il leur en coûte.", posterURL:"www.prisonbreak.com", rating:8.3 },
  { title:'Roman Empire',trailer:"https://www.youtube.com/embed/aOOKeYQs4w0", img:'/image/Roman Empire.jpg', description:"Chronique de quelques-uns des plus célèbres dirigeants de la civilisation romaine.", posterURL:"www.romanempire.com", rating:6.9 },
  { title:'The Expanse',trailer:"https://www.youtube.com/embed/caLji74IIp4", img:'/image/The Expanse.jpg', description:"Au 24e siècle, une bande disparate d'antihéros démêle une vaste conspiration qui menace le fragile état de guerre froide du système solaire.", posterURL:"www.theexpanse.com", rating:8.5 },
  { title:'The Walking Dead',trailer:"https://www.youtube.com/embed/R1v0uFms68U", img:'/image/The Walking Dead.jpg', description:"Un policier (Rick) se réveille d'un coma dans lequel il était plongé depuis plusieurs mois après avoir été abattu dans l'exercice de ses fonctions, pour découvrir que le monde a été ravagé par les zombies et qu'il est le seul survivant. Une armée de zombies, les événements s'intensifient.", posterURL:"www.thewalkingdead.com", rating:8.2 },
  { title:'Voltron',trailer:"https://www.youtube.com/embed/NXW1waqRCb0", img:'/image/Voltron.jpg', description:"Cinq adolescents deviennent la dernière ligne de défense de la galaxie dans une bataille intergalactique contre la force extraterrestre maléfique dirigée par le roi Zarkon.", posterURL:"www.voltron.com", rating:8.1 },
];

function App(){
  
  const [list,setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate,setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie){
    if( movie.title && movie.img && movie.description && movie.posterURL ) {
      setList([...list, movie]);
    }
  }



  return(
    <div className="App">
      <Routes>
        {/* MONTRER CES DEUX COMPOSANTS SI NOUS SOMMES DANS LE CHEMIN DE LA RACINE */}
        <Route path="/"  element={ <> <Header/>  <MovieList list={filtredList} /> <AddMovie adding={adding} />   </> } />
        {/*  MONTRER CE COMPOSANT SI NOUS SOMMES DANS : /:id  */}
        <Route path="/:id" element={ <Description list={list} /> } />
      </Routes>
    </div>
      );
}

export default App;
