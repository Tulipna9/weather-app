import React from 'react'
import { render } from '@testing-library/react';
import CityInfo from './CityInfo' //SUT: System Under Testing



test("CityInfo render", async () => {
    // los test se basan en la abreviatura "AAA"
    // Arrange
    // Act
    const city = "Montevideo"
    const country = "Uruguay"
    //Render: renderiza el componente y retorna una serie de funciones de utilidad
    //En este caso utilizamos "findeAllByRole" para consultar a nuestro componente
    //vamos a analizar su estado en el Assert
    const{ findAllByRole } = render(<CityInfo city={city} country = {country}></CityInfo>)

    // Assert
    //findeAllByRole nos va a buscar en este caso todo los componentes que sean
    //heading => h1, h2, h3... etc.
    //El resultado es un array de componentes cityAndCountryComponents
    const cityAndCountryComponent = await findAllByRole("heading")

    expect(cityAndCountryComponent[0]).toHaveTextContent(city)
    expect(cityAndCountryComponent[1]).toHaveTextContent(country)

    
})