import { Chart } from 'react-google-charts'
function Graphic() {
    return (
            <Chart
                width={'313px'}
                height={'300px'}
                chartType="PieChart"
                // loader={'Loading..'}
                data={[
                    ['Transactions', 'Amount'],
                    ['Incomes', 20000.00],
                    ['Expenses', 2549.05]
                ]}
                options={{
                    // Just add this option
                    pieHole: 0.76,
                    pieStartAngle: 50,
                    backgroundColor: '#f0f0f0',
                    color: '#f0f0f0'
                }}
                rootProps={{ 'data-testid': '1' }}
            />
    )
}

export { Graphic }