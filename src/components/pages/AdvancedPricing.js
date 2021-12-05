import React from 'react'
import "./AdvancedPricing.css"
import lineGraph from "../images/line-graph.png"

const AdvancedPricing = () => {
    return (
        <div className="advanced-pricing">
            <h2 className="subtitle">Advanced pricing</h2>
            <div className="graph-section">
                <div>
                <p>Optimal conversion price per content category</p>
                </div>
                <img src={lineGraph} alt="line graph for advanced pricing" />
            </div>
            <p className="price-info w-75">Set the price site-wide or per category to detect what and when users are most likely to pay.</p>
        </div>
    )
}

export default AdvancedPricing
