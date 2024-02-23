import React, { useState, useEffect, useRef } from 'react';
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar,Pie } from 'react-chartjs-2'

const GenericChart = ({ data, Component }) => {
  const key = data ? data.datasets[0].data.length : 0;
  return data ? <Component key={key} data={data} /> : null;
};

const Chart = ({ data }) => {
  return <GenericChart data={data} Component={Bar} />;
};

const PieChart = ({ data }) => {
  return <GenericChart data={data} Component={Pie} />;
};

const DashboardBody = () => {

  const[dashboardData, setDashboardData] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/api/admin')
    .then(response => response.json())
    .then(data => {
      setDashboardData(data)
      console.log(dashboardData)
    })
  },[])
 
  const formatChartData = (data, labelKey, dataKey, backgroundColor, borderColor) => {
    if (!data) return null; 
    return {
      labels: data.map(item => item[labelKey]),
      datasets: [{
        label: `Products by ${labelKey.charAt(0).toUpperCase() + labelKey.slice(1)}`,
        data: data.map(item => item[dataKey]),
        backgroundColor,
        borderColor,
        borderWidth: 1,
      }],
    };
  };
  
  const categoryData = formatChartData(
    dashboardData.formattedCategories,
    'name',
    'count',
    'rgba(75, 192, 192, 0.2)',
    'rgba(75, 192, 192, 1)'
  );
  
  const subcategoryData = formatChartData(
    dashboardData.formattedCategories ? dashboardData.formattedCategories.flatMap(category => category.products) : null,
    '_id',
    'count',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 159, 64, 1)'
  );
  
  const brandData = formatChartData(
    dashboardData.formattedBrands,
    'name',
    'count',
    [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
    ],
    [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
    ]
  );
  
  return (
    <div className="text-center text-lg">
      <h1 className="font-bold text-3xl p-4">Admin Dashboard</h1>
      <div>
        <h2 className="text-lg p-4">Total Products: {dashboardData.countOverallProducts}</h2>
        <h2>Total Users: {dashboardData.countTotalUsers}</h2>
      </div>
      <div className="flex gap-16 justify-center mt-10">
      <div>
        <h2>Category-wise Products</h2><br />
        {categoryData && <Chart data={categoryData} />}
      </div>
      <div>
        <h2>Subcategory-wise Products</h2><br />
        {subcategoryData && <Chart data={subcategoryData} />}
      </div>
      <div>
        <h2>Brand-wise Products</h2><br />
        {brandData && <PieChart data={brandData}/>}
      </div>
      </div>
    </div>
  );
};


export default DashboardBody;

