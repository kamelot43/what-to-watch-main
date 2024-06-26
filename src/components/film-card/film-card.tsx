import {MouseEvent} from 'react';
import {AppRoute} from '../../const';
import {useNavigate} from 'react-router-dom';
import ComponentPlayer from '../component-player/component-player';
import {useAppDispatch} from '../../hooks';
import {resetCounter} from '../../store/slices/site-process/site-process';
import {Film} from '../../types/film';

export default function FilmCard({name, isPlaying, previewImage, posterImage, previewVideoLink, id, onMouseEnter, onMouseLeave}: Film) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickHandler = (e: MouseEvent<HTMLHeadingElement> | MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(`${AppRoute.Film}/${id}`);
    dispatch(resetCounter());
    if (window) {
      window.scrollTo({top: 0, left: 0});
    }
  };

  const handleMouseEnter = () => {
    onMouseEnter && onMouseEnter(id);
  };

  const handleMouseLeave = () => {
    onMouseLeave && onMouseLeave();
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image" onClick={onClickHandler}>
        {
          isPlaying ?
            <ComponentPlayer
              key={id}
              isPlaying={isPlaying}
              previewVideoLink={previewVideoLink}
              posterImage={posterImage}
            /> :
            <img
              src={previewImage}
              alt={name}
              width={280}
              height={175}
            />
        }
      </div>
      <h3 className="small-film-card__title" onClick={onClickHandler}>
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </article>
  );
}
