import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { WiCloud } from 'react-icons/wi';
import { IconContext } from "react-icons";
import { WiCloud, 
    WiDayCloudy,
    WiDayFog,
    WiDaySunny,
    WiRain } from 'react-icons'
const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain,
}

const renderState = state => {
    const IconState = stateByName[state]
    return <IconContext/>
}
const Weather = ({ temperature, state }) => {
    return (
        <div>
            <IconContext.Provider value={{ size:'5em' }}>
                { renderState(state) }
                <WiCloud></WiCloud>
                <Typography display="inline" variant="h2">{ temperature }</Typography>
            </IconContext.Provider>
        </div>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired
    state: PropTypes.string.isRequired,
}

export default Weather
