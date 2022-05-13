import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import questions from "../questions.json";

import Chart from 'react-apexcharts'

function ResultsPage(){
 

    return(

<div >
    <Chart
    type="pie"
    width={1349}
    height={550}
    series={[66,33]}
    options={{
        title:{text:"RESULT PIECHART"},
        noData:{text:"Empty data"},
        labels:["correct","incorrect"]
    }}
    ></Chart>
</div>
    )
}


export default ResultsPage;
