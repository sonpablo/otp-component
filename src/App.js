import Button from 'components/button/Button';
import Otp from 'components/otp/Otp';
import { useState } from 'react';
import './App.css';

const NUMBER_OF_DIGITS = 6

export default function App() {

  const [otp, setOtp] = useState('')


  const onChangeOtp = (value) => {
    setOtp(value)
  }

  const enableButton = () => {
    return otp.length === NUMBER_OF_DIGITS ? false : true
  }

  return (
    <div className="App">
      <Otp numberOfDigits={NUMBER_OF_DIGITS} onChangeOtp={onChangeOtp} />
      <p>{otp}</p>
      <Button disabled={enableButton()} text={'Validate'} />
    </div>
  );
}


