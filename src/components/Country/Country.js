import React from 'react';

const Country = (props) => {
    // console.log(props)
    const {name, population, region, flag} = props.country;
    const flagStyle = {height: '50px'}
    const countryStyle = {border: '1px solid red', margin: '10px', padding: '10px'}
    const handleAddCountry = props.handleAddCountry;
   
    return (
        <div style={countryStyle}>
            <h4>This is: {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <h4>Population: {population}</h4>
            <h4><small>Region: {region}</small></h4>
            <button onClick={() => handleAddCountry(props.country)}>add country</button>
           

        </div>
    );
};

export default Country;