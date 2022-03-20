import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';
import SearchResults from '../search-results';
import HouseFilter from './house-filter';
import HouseFromQuery from '../house/HouseFromQuery';
import useHouses from '../hooks/useHouses';
import useFeaturedHouses from '../hooks/useFeaturedHouses';
import HousesContext from '../context/housesContext';

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouses(allHouses);

  return (
    <Router>
      <HousesContext.Provider value={allHouses}>
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <HouseFilter />
      

      <Switch>
        <Route path="/searchresults/:country">
          <SearchResults></SearchResults>
        </Route>

        <Route path="/house/:id">
          <HouseFromQuery></HouseFromQuery>
        </Route>

        <Route path="/">
          <FeaturedHouse house={featuredHouse}></FeaturedHouse>
        </Route>
      </Switch>
      </div>
      </HousesContext.Provider>
    </Router>
    
    
  );
}

export default App;
