import React from 'react';
import ReactApexChart from 'react-apexcharts';


const Dashlet2 = ({ data_dashlet2 }) => {
    
    var options = {
        series: [
        {
          data: data_dashlet2
        }
      ],
        legend: {
        show: false
      },
      chart: {
        height: 350,
        type: 'treemap'
      },
      title: {
        text: 'Distibuted Treemap (different color for each cell)',
        align: 'center'
      },
      colors: [
        '#3B93A5',
        '#F7B844',
        '#ADD8C7',
        '#EC3C65',
        '#CDD7B6',
        '#C1F666',
        '#D43F97',
        '#1E5D8C',
        '#421243',
        '#7F94B0',
        '#EF6537',
        '#C0ADDB'
      ],
      plotOptions: {
        treemap: {
          distributed: true,
          enableShades: false
        }
      }
      };
  
    return (
      <div className='DashletContainer'>
        <h1>Utilización del bot</h1>
        <ReactApexChart options={options} series={options.series} type="treemap" height={350} />
      </div>
    );
  };
  
  export  {Dashlet2};
  


