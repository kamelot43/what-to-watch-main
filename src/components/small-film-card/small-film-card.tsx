import {SmallFilmCardType} from '../../types/small-film-card-type';

export default function SmallFilmCard({name, posterImage}: SmallFilmCardType) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={`img/${posterImage}`} alt={name} width={280} height={175} />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </article>
  );
}
