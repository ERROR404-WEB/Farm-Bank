import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import React from 'react';
  const data = [
    {
      name: "2016",
      uv: 4000,
      Annual_Income: 2400,
      amt: 2400
    },
    {
      name: "2017",
      uv: 3000,
      Annual_Income: 1398,
      amt: 2210
    },
    {
      name: "2018",
      uv: 2000,
      Annual_Income: 9800,
      amt: 2290
    },
    {
      name: "2019",
      uv: 2780,
      Annual_Income: 3908,
      amt: 2000
    },
    {
      name: "2020",
      uv: 1890,
      Annual_Income: 4800,
      amt: 2181
    },
    {
      name: "2021",
      uv: 2390,
      Annual_Income: 3800,
      amt: 2500
    },
    {
      name: "2022",
      uv: 3490,
      Annual_Income: 4300,
      amt: 2100
    }
  ];
  
  function Chart() {
    return (
      <LineChart
      style={{ marginLeft: "9rem" }}
        width={1000}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 30,
          bottom: 5
        }}
      >
        <CartesianGrid  />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Annual_Income"
          stroke="#2B7A0B"
        />
      </LineChart>
    );
  }


  export default Chart;