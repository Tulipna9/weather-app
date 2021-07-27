import React from 'react'
import { render } from '@testing-library/react'
import CityList from './CityList'

const cities = [
    {city: "Montevideo", country: "Uruguay"},
    {city: "Buenos Aires", country: "Argentina"},
    {city: "Bogotá", country: "Colombia"},
    {city: "Galicia", country: "España"},
]

test("CityList renders", async () =>{
    //Regla de las 3 As (Arrange Act Assert)

    const { findAllByRole } = render(<CityList cities={cities}/>)

    const items = await findAllByRole("listitem")

    expect(items).toHaveLength(4)
})