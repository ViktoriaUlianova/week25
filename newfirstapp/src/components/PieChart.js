import React from "react"
import { Pie } from "react-chartjs-2"

const PieChart = () => {
    return <div><Pie 
    data={{
        labels: ["Red", "Blue", "Pink"],
        datasets: [
            {
                data: [12, 19, 23],
backgroundColor: ["red", "blue", "pink"]
            }
        ]
    }}
        height={400}
        width={600}
        />
    </div>
}

export default PieChart