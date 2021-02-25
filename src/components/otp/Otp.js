import React, { useEffect, useState } from 'react';
import './Otp.css';

const FORBIDDEN_CHARACTERS = ['.', 'e']

export default function Otp({ numberOfDigits = 6, onChangeOtp }) {

    const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""))

    useEffect(() => {
        onChangeOtp(otp.join(''))
    }, [otp])

    const handleChange = (element, index) => {

        if (isNaN(element.value)) return false;

        if (FORBIDDEN_CHARACTERS.includes(element.value)) {
            return false
        }

        setOtp(prevValue => [...prevValue.map((d, idx) =>
            (idx === index ? element.value : d))
        ])

        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <div className="otp-container">
            {otp.map((data, index) => {
                return (
                    <input
                        autoComplete="off"
                        className="otp-field"
                        key={index}
                        maxLength="1"
                        min="0"
                        name="otp"
                        onChange={e => handleChange(e.target, index)}
                        onFocus={e => e.target.select()}
                        type="number"
                        value={data}
                    />
                );
            })}
        </div>
    )

}
