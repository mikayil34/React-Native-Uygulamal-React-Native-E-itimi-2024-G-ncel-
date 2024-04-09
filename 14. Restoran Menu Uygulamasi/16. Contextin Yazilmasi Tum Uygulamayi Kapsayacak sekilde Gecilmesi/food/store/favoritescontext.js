import { createContext } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
   

});
function FavoritesContextProvider(props) {
    const addFavorite = (id) => {
        setFavorites((currentFavorites) => [...currentFavorites, id]);
    };
    const removeFavorite = (id) => {
        setFavorites((currentFavorites) => {
            return currentFavorites.filter((fav) => fav !== id);
        });
    };
    const [favorites, setFavorites] = useState([]);
    const context = {
        ids: favorites,
        addFavorite,
        removeFavorite,
    };
    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}
export default FavoritesContextProvider;
