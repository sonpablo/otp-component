import React from 'react'
import './Button.css'

const BUTTON_COLOR = {
    RED: '#ed1c27',
    DISABLE: '#C1C1C1'
}

export default function Button({ disabled = true, text = 'Button' }) {


    const getColor = () => {
        console.log(disabled)
        return disabled
            ? { '--mainColor': BUTTON_COLOR.DISABLE }
            : { '--mainColor': BUTTON_COLOR.RED }
    }

    const onClick = () => {

    }

    return (
        <button
            className="custom-button"
            disabled={disabled}
            onClick={onClick}
            style={getColor()}>{text}</button>
    )
}