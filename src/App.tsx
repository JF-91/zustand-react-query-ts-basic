import Card from './components/Card';
import {useFetchRepository} from './hooks/useRepos'
import { useFavoriteReposStore } from './store/favoriteRepos';
function App() {

  const { data, isLoading } = useFetchRepository()
  const { addFavoriteRepo, favoriteReposIds, removeFavoriteRepo  } = useFavoriteReposStore()
 

  if(isLoading) return <div>Loading ...</div>


  console.log(data);
  
  return (
    <>
     {
      data?.map((repo)=> (
        <div>
          <Card repository={repo}
            isFavorite={favoriteReposIds.includes(repo.id)}
            key={repo.id}/>
          
        </div>
      ))
     }
    </>
  );
}

export default App;
