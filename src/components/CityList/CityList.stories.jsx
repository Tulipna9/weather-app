import React from 'react'
import CityList from './CityList'


export default{
    title: "CityList",
    component: CityList
}

const cities = [
    {city: "Montevideo", country: "Uruguay"},
    {city: "Buenos Aires", country: "Argentina"},
    {city: "Bogotá", country: "Colombia"},
    {city: "Galicia", country: "España"},
]


export const CityListExample = () => <CityList cities={ cities }></CityList>