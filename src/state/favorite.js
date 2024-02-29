import State from "../utils/State";
import renderFavorite from "../components/favorite";

const favoriteState = new State([]);

favoriteState.subscribe(renderFavorite);

export default favoriteState;
