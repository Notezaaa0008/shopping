import { useState } from 'react'
import CargoCard from '../../components/cargoComponent/cargoCard'
import './cargoContainer.css'

function CargoContainer (props){
    

    return(
        <div className = 'cargo-container'>
            {props.data.map((item)=> <CargoCard item = {item} />)}
        </div>
    )
}

export default CargoContainer