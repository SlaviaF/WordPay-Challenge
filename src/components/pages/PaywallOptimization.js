import React from 'react'
import './PaywallOptimization.css'
import PaywallPhone from './PaywallPhone'

const PaywallOptimization = () => {
    return (
        <div className="paywall-container">
            <h2 className="subtitle">Paywall optimization</h2>
            <div className="paywall-main-section">
            <div className="paywall-sections">
                <div className="test-paywall-box">
                    <h3>Test the paywall</h3>
                    <p>Define rules for when the paywall is on/off and where it should start.</p>
                </div>
                <div className="test-paywall-box">
                <h3>Test CTA's</h3>
                <p>Test CTA’s and choose what converts.</p>
                </div>
            </div>
            <div>
            <PaywallPhone/>
            </div>
            <div className="playwall-section-2">
                <div className="test-paywall-box">
                <h3>Test messages</h3>
                <p>A/B Split testing of messages. Measure what matters to sell more content.</p>
                </div>
            </div>
            </div>
            </div>
       
    )   
}

export default PaywallOptimization
