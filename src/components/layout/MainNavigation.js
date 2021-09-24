import { Link } from "react-router-dom";
import { AiOutlineAntCloud } from "react-icons/ai";
import{useContext} from "react";
import classes from './MainNavigation.module.css'
import FavoritesContext from '../../store/favorites-context';


function MainNavigation() {

const favoritesCtx = useContext(FavoritesContext)

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Bumble Meetups  <AiOutlineAntCloud  color='yellow' size="3rem"/> </div>
      <nav>
        <ul>
          <li>
            <Link to="/"> All Meetups   </Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
              <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
