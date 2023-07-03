import React from 'react'
import './TrendCard.css'
import { TrendsData } from '../TrendsData/TrendsData.jsx'

const TrendCard = () => {
    return (
        <div className="trendCard">
            <h3>Trend For You</h3>
            {TrendsData.map((trend) => {
                return (
                    <div className="trend">
                        <span>#{trend.name}</span>
                        <span>{trend.shares}K Shares</span>
                    </div>
                )
            })}
        </div>
    )
}

export default TrendCard