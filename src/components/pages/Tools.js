import React from 'react'
import "./Tools.css"
import AdvancedPricing from './AdvancedPricing'
import PaywallOptimization from './PaywallOptimization'
const Tools = () => {
    return (
        <div className="tools">
            <h1 className="title">Tools you need to get paid for what you create</h1>
            <div className="tools-subsections">
            <PaywallOptimization/>
            <AdvancedPricing/>
            </div>
        </div>
    )
}

export default Tools
