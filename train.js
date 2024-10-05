
let trains =[ 
    {
    trainName:'Kannyakumari Express',
              arrivalTime:'5.00pm',
               departureTime:'4:30am'
    },
    {
        trainName:'Nellai SuperFast Express',
        arrivalTime:'8.00pm',
        departureTime:'7.30'
    }
            ];
    

function addTrain() {
    const trainName = document.getElementById("trainname").value;
    const arrivalTime = document.getElementById("arrivaltime").value;
    const departureTime = document.getElementById("departuretime").value;
    

    if (trainName === '' || arrivalTime === '' || departureTime === '') {
        alert('Please fill out all fields.');
        return;
    }
    
    const train = {
        trainName: trainName,
        arrivalTime: arrivalTime,
        departureTime: departureTime
    };

   
    trains.push(train);
    
    
    document.getElementById("trainname").value = '';
    document.getElementById("arrivaltime").value = '';
    document.getElementById("departuretime").value = '';

    
    displayTrain();
}

function displayTrain() {
    const trainList = document.getElementById('trainList');
    
    
    trainList.innerHTML = '';

    trains.forEach((train, index) => {
        const trainItem = document.createElement('li');
        trainItem.textContent = `Train Name: ${train.trainName}, Arrival Time: ${train.arrivalTime}, Departure Time: ${train.departureTime}`;
        trainList.appendChild(trainItem);
    });
}
displayTrain();
