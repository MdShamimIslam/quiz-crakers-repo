import React from 'react';
import { LineChart, Line,Tooltip, CartesianGrid, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const data = [
        {
          name: 'React',
          marks: 8,
          
        },
        {
          name: 'JavaScript',
          marks: 6,
          
        },
        {
          name: 'CSS',
          marks: 7,
          
        },
        {
          name: 'Git',
          marks: 9,
          
        },
      ]
    return (
        <div>
            <LineChart width={800} height={500} data={data} margin={{ top: 125, right: 20, bottom: 5, left: 130 }}>
                <Line type="monotone" dataKey="marks" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Statistics;