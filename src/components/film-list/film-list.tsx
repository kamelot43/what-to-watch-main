import {useState} from 'react';
import {Film} from '../../types/film';
import SmallFilmCard from '../small-film-card/small-film-card';

type FilmListProps = {
  films: Film[];
}

export default function FilmList({films}: FilmListProps) {
  const [activeFilm, setActiveFilm] = useState('');
  const onMouseEnterHandler = (id: number) => {
    setActiveFilm(id.toString());
  };

  const onMouseLeaveHandler = () => {
    setActiveFilm('');
  };

  /* eslint-disable */
  console.log('active_film', activeFilm);

  return(
    <div className="catalog__films-list">
      {films.map((film, idx) =>
        (
          <SmallFilmCard
            key={film.id}
            id={film.id}
            name={film.name}
            previewImage={film.previewImage}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
          />
        )
      )}
    </div>
  );
}