let resignations = document.getElementById('resignations').getContext('2d');
let reasons_for_quitting = document.getElementById('reasons-for-quitting').getContext('2d');
let top_reasons_wfh = document.getElementById('top-reasons-wfh').getContext('2d');


// Chart.defaults.font.family = 'arial';
Chart.defaults.font.size = 18;
Chart.defaults.color = '#777';

let testChart = new Chart(resignations, {
    type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['2020', '2019', '2018', '2017', '2016', '2015'],
        datasets: [{
            label: 'End of Year Worker Resignation',
            data: [4403000, 3407000, 3487000, 3381000, 3194000, 3989000],
            backgroundColor: ['#FF5733', '#FFBD33', '#DBFF33', '#75FF33', '#33FF57', '#33FFBD'],
            borderWidth: 2,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'Total of Year End Resignations',
                fontSize: 30

            },
            legend: {
                position: 'bottom',
                labels: {
                    color: '#000'
                }
            }
        }
    }
});

let quitChart = new Chart(reasons_for_quitting, {
    type: 'polarArea', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['Pay was too low', 'No opportunities for advancement', 'Felt disrespected at work', 'Because of child care issues*', 'Not enough flexibility to choose when to put in hours', 'Benefits were not good', 'Wanted to relocate to a different area', 'Working too many hours', 'Working too few hours', 'Employer required a COVID-19 vaccine'],
        datasets: [{
            label: 'Top Reasons Why US Workers Quit in 2021',
            data: [37, 33, 35, 24, 24, 23, 22, 20, 16, 8],
            backgroundColor: ['#0e1a40', '#222f5b', '#5d5d5d', '#946b2d', '	#726255', '#372e29', '#f0c75e', '#ecb939', '#317873', '#49796b'],
            borderWidth: 2,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Top Reasons Why US Workers Quit in 2021',
                fontSize: 30

            },
            legend: {
                position: 'right',
                labels: {
                    color: '#000'
                }
            }
        }
    }
});

let reasonsChart = new Chart(top_reasons_wfh, {
    type: 'pie', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['Carling for kids', 'Saving money/time on commute', 'Caring for pets', 'TV/music while working', 'Ability to work out/nap', 'Concerns about appearance', 'Other'],
        datasets: [{
            label: 'Reasons For Wanting to Continue Working From Home (%)',
            data: [28.6, 27.9, 17.1, 9.1, 8.2, 5.9, 3.2],
            backgroundColor: ['#373b3e', '#bec8d1', '#86cecb', '#137a7f', '#e12885', '#ab20fd', '#200589'],
            borderWidth: 2,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Reasons For Wanting to Continue Working From Home (%)',
                fontSize: 30

            },
            legend: {
                position: 'right',
                labels: {
                    color: '#000'
                }
            }
        }
    }
});