import Footer from '../../components/footer/footer';
import FilmList from '../../components/film-list/film-list';
import Header from '../../components/header/header';
import {useAppSelector} from '../../hooks';
import {getFavoriteFilms, getFavoriteFilmsStatus} from '../../store/slices/favorite/selectors';
import {RequestsStatus} from '../../const';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';
import PageNotFound from '../page-not-found/page-not-found';
import HelmetComponent from '../../components/helmet-component/helmet-component';

export default function MyList() {
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const favoriteFilmsStatus = useAppSelector(getFavoriteFilmsStatus);

  if (favoriteFilmsStatus === RequestsStatus.Loading) {
    return <LoadingSpinner />;
  }

  if (favoriteFilmsStatus === RequestsStatus.Failed) {
    return (
      <PageNotFound />
    );
  }

  return (
    <div className="user-page">
      <HelmetComponent
        title='wtw: my-list'
        description="This page displays a user's favorite offers, providing easy access to preferred content."
      />
      <Header title="My list" extraClass="user-page__head"/>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={favoriteFilms} />
      </section>
      <Footer/>
    </div>
  );
}
