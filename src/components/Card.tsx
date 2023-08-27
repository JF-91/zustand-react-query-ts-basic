import { Repository } from "../hooks/types"
import { useFavoriteReposStore } from "../store/favoriteRepos";


interface CardProp{
    repository: Repository;
    isFavorite: boolean
}


const Card: React.FC<CardProp> = ({repository, isFavorite}) => {

  const addFavoriteRepo = useFavoriteReposStore(state=> state.addFavoriteRepo)
  const removeFavoriteRepo = useFavoriteReposStore(state=> state.removeFavoriteRepo)

  const handleFavorite = ()=>{
    if(isFavorite){
      removeFavoriteRepo(repository.id)
      return
    }

    addFavoriteRepo(repository.id)
  }

  return (
    <div>
        <h1>{repository.name}</h1>
        <button onClick={handleFavorite} className='bg-red-600 rounded-lg my-2 p-2'>{isFavorite ? "dislike": "like"}</button>
    </div>
  )
}

export default Card