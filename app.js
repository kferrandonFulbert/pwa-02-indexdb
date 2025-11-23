var beers;
/**************************
***         MODEL
***************************/
      // Function to fetch beers from Punk API
      async function modelFetchBeers() {
        beers = await fetch('https://punkapi.online/v3/beers?page=1')
          .then(response => response.json())
          .then(data => displayBeers(data))
          .catch(error => console.error('Error fetching beers:', error));
      }
/**************************
  ***         VIEW
  ***************************/
      // function ECMA 6 represent the view template
      var template = (beer) => `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://punkapi.online/v3/images/${beer.image}" style="height:200px;width:100px;" class="" alt="${beer.name}">
                        <div class="card-body">
                            <h5 class="card-title">${beer.name}</h5>
                            <p class="card-text">${beer.description}</p>
                        </div>
                    </div>
                </div>
            `;
      /**************************
      ***         CONTROLLER
      ***************************/
      // Function to display beers on the page
      function displayBeers(beers) {
        const beerList = document.getElementById('beerList');
        beerList.innerHTML = '';
        beers.forEach(beer => {
          beerList.innerHTML += template(beer);
        });
        return beers;
      }
      // Function to filter beers based on search input
      function filterBeers() {
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        const filteredBeers = beers.filter(beer => beer.name.toLowerCase().includes(searchInput));
        displayBeers(filteredBeers);
      }
       // Event listener for search input
      document.getElementById('searchInput').addEventListener('input', filterBeers);
   