import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(fetchDailyData());
        }

        fetchAPI();
    }, [dailyData]);

    const lineChart = (
        dailyData[0] ?
        <Line 
            data={{
                labels: '',
                datasets: [{},{}],
            }}
        /> : null
    );

    return (
        <h1>Charts</h1>
    )
}

export default Chart;