import { useState, useRef } from "react";

export default function OTP({ otpLength = 6 }) {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);
  function handleKeyDown(e, index) {
    const key = e.key; // This tells us which keyboard key has been pressed
    console.log(key, e);
    // Make a copt of the current array
    const copyOtpFields = [...otpFields];

    // Let's check if the key is backspace
    // and delete the digit in that scenario
    if (key === "Backspace") {
      copyOtpFields[index] = "";
      setOtpFields(copyOtpFields);
    }

    // We should allow single digit entry only
    if (!/^\d$/.test(key)) {
      // We check if the pressed key is not a number
      // we simply return from this function
      // as only numbers are allowed!
      return;
    }

    copyOtpFields[index] = key;
    setOtpFields(copyOtpFields);

    // use ref to focus on the next input box when an input is done
    if (index + 1 < otpFields.length) ref.current[index + 1].focus();
  }

  return (
    <div className="container">
      {otpFields.map((value, index) => (
        <input
          key={index}
          ref={(currentInput) => (ref.current[index] = currentInput)}
          value={value}
          type="text"
          maxLength={1}
          className="otp-input"
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
}
