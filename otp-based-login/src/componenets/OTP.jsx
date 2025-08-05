import { useState } from "react"

export default function OTP({otplength}) {
    const [otpFields,setotpfields] = useState(new Array(otplength).fill(""));
    function handleKeyDown(e,index){
        console.log("I was executed");
    }
    return(
        <div className="container">
            {otpFields.map((value,index)=>(
                <input key={index} value={value} type="text" maxLength={1} className={"otp-input"} onKeyDown={(e)=> handleKeyDown(e,index)}/>
            ))}
        </div>
    )
}