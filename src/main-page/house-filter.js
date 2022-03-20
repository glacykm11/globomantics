const HouseFilter = ({allHouses}) => {
    const countries = allHouses 
    ? Array.from(new Set(allHouses.map((h) => h.country)))
    : [];
    countries.unshift(null);
    return (  
        <div className="row mt-3">
            
        </div>
    );
}
 
export default HouseFilter;