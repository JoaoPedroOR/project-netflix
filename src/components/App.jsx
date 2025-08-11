import { useState, useEffect } from 'react';
import './App.css';
import Tmdb from './tmdb'; 
import MovieRow from './MovieRow';
import FeatureMovie from './FeatureMovie'; 
import Header from './Header';

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      const originals = list.filter(i => i.slug === 'originals');
      const randomChosen = Math.floor(Math.random() * originals[0].items.results.length);
      const chosen = originals[0].items.results[randomChosen];
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeatureData(chosenInfo);
    };

    loadAll();
  }, []); 

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featureData && <FeatureMovie item={featureData} />}
      <section className="list">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      
      <footer className='footer' >
         <h2> Feito por João Pedro de O.R da Paixão</h2>
         <a href='https://www.linkedin.com/in/joao-pedroor'>LinkedIN</a>
         <h2> Creditos a netflix</h2>
         <a href='https://www.themoviedb.org/'>The movie data base (API) </a>
      </footer>

      
    </div>
    
  );
};

export default App;
