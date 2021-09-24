import {useContext} from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavortiesPage(){
const favoritesctx = useContext(FavoritesContext);


let content;

if(favoritesctx.totalFavorites ===0){
    content = <p> You have no favorites yet. Start Adding some ?</p>
}else {
  content =  <MeetupList meetups={favoritesctx.favorites} />
}

    return (
     <section>
        <h1> My Favorites</h1>
        {content}
    </section>
    )
  
}

export default FavortiesPage;