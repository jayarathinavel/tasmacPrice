function fetchAllLiquors() {
    const allBeersTableBody = document.getElementById('allLiquorsTableBody');
    allBeersTableBody.innerHTML = `
    <td colspan="7">
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span> 
            </div>
            <span class="ms-3"> Loading </span>
        </div>
    </td>
    `;
    console.log("fetchAllLiquors() Starts");
    fetch("https://tasmac-price-api.herokuapp.com/getAllLiquor")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let output = ''
        data.forEach(function (allLiquors) {
          output += `
          <tr>
            <td class="name"> ${renderValue(allLiquors.name)}</td>
            <td class="range"> ${renderValue(allLiquors.range)}</td>
            <td class="quarter"> ${renderValue(allLiquors.quarter)}</td>
            <td class="half"> ${renderValue(allLiquors.half)}</td>
            <td class="full"> ${renderValue(allLiquors.full)}</td>
            <td class="litre"> ${renderValue(allLiquors.litre)}</td>
            <td class="brand"> ${renderValue(allLiquors.brand)}</td>
          </tr>
        `
        })
        document.getElementById('allLiquorsTableBody').innerHTML = output
        $(document).ready(function () {
            $('#allLiquorsTable').DataTable({
                paging: true,
                "bLengthChange": false,
                "pageLength": 50,
                "dom": '<"pull-left"f><"pull-right"l>tip',
                "language": {
                    "search": "_INPUT_",
                    "searchPlaceholder": "Search"
                },
                responsive: true,
                "columnDefs": [
                    { "searchable": false, "targets": 6 }
                ]
            });
        });
    })
    .catch((error) => {
        console.log(`Error Fetching data : ${error}`)
        document.getElementById('allLiquorsTableBody').innerHTML = 'Error Loading Data'
    })
}

function fetchAllBeers() {
    const allBeersTableBody = document.getElementById('allBeersTableBody');
    allBeersTableBody.innerHTML = `
    <td colspan="5">
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span> 
            </div>
            <span class="ms-3"> Loading </span>
        </div>
    </td>
    `;
    console.log("fetchAllBeers() Starts");
    fetch("https://tasmac-price-api.herokuapp.com/getAllBeer")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let output = ''
        data.forEach(function (allBeer) {
          output += `
          <tr>
            <td class="name"> ${renderValue(allBeer.name)}</td>
            <td class="largeBottle"> ${renderValue(allBeer.largeBottle)}</td>
            <td class="can"> ${renderValue(allBeer.can)}</td>
            <td class="smallBottle"> ${renderValue(allBeer.smallBottle)}</td>
            <td class="brand"> ${renderValue(allBeer.brand)}</td>
          </tr>
        `
        })
        document.getElementById('allBeersTableBody').innerHTML = output
        $(document).ready(function () {
            $('#allBeersTable').DataTable({
                paging: true,
                "bLengthChange": false,
                "pageLength": 50,
                "dom": '<"pull-left"f><"pull-right"l>tip',
                "language": {
                    "search": "_INPUT_",
                    "searchPlaceholder": "Search"
                },
                responsive: true,
                "columnDefs": [
                    { "searchable": false, "targets": 4 }
                ]
            });
        });
    })
    .catch((error) => {
        console.log(`Error Fetching data : ${error}`)
        document.getElementById('allBeersTableBody').innerHTML = 'Error Loading Data'
    })
}

function renderValue(value){
    if(value == null ){
        value = '-';
    }
    return value;
}
