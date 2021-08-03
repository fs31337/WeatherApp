import React from "react";
import './Ciudad.scss';

export default function Ciudad({city}) {
    if(city){
        console.log(city,"city")
        return (
            <div className="ciudad">
                    <div className="container">
                        <div>{city.name}</div>
                        <div className="info">
                            <div>Clima: {city.weather}</div>
                            <div>Viento: {city.wind} km/h</div>
                            <div>Temperatura: {city.temp} ºC</div>
                        </div>
                    </div>
            </div>
        )
    } else {
        return (
            <div>
                No se encontró la ciudad buscada
            </div>
        );
    }
}