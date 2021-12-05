import React from 'react'
import './PaywallPhone.css'
import boy from  '../images/boy.png'
import PaywallColoredLine from './PaywallColoredLine'
import Button from './Button'
const PaywallPhone = () => {
    return (
        <div className="paywall-phone-container">
        <img src={boy} alt="boy in a playground with a ball" />
        <div className="paywall-coloredLine-container">
        <PaywallColoredLine color="rgba(189, 189, 189, 1)" width="306px" margin="6px"/>
        <PaywallColoredLine color="rgba(189, 189, 189, 1)" width="236px" margin="10px"/>
        <PaywallColoredLine color="rgba(189, 189, 189, 1)" width="306px" margin="5px"/>
        <PaywallColoredLine color="rgba(189, 189, 189, 1)" width="236px" margin="10px"/>
        <PaywallColoredLine color="rgba(221, 221, 221, 1)" width="306px" margin="5px"/>
        <PaywallColoredLine color="rgba(238, 238, 238, 1)" width="236px" margin="5px"/>
        <PaywallColoredLine color="rgba(189, 215, 244, 1)" width="172px" margin="28px"/>
        <PaywallColoredLine color="rgba(189, 215, 244, 1)" width="306px"  margin="5px"/>
        <PaywallColoredLine color="rgba(189, 215, 244, 1)" width="265px" margin="5px"/>
        <PaywallColoredLine color="rgba(189, 215, 244, 1)" width="285px" margin="5px"/>
        <PaywallColoredLine color="rgba(189, 215, 244, 1)" width="236px"  margin="20px"/>
        </div>
       <div className="paywall-btn-container">
        <Button radius="5px" color="white" fontWeight="500" letterSpacing="10%" lineHeight="20px" backgroundColor="black"> Buy article</Button>
        <Button radius="5px" color="white" fontWeight="500" letterSpacing="10%" lineHeight="20px" backgroundColor="black"> Subscribe</Button>
        </div>

        </div>
       
    )
}

export default PaywallPhone
