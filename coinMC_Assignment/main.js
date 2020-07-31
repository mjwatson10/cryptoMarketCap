

//API's
let BASE_URL = "https://api.coingecko.com/api/v3";

let COINS_LISTED = "/coins/list";
let COINS_MARK_PRICE = "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h";

let allCoins = BASE_URL + COINS_LISTED;
let priceData = BASE_URL + COINS_MARK_PRICE;


let sortDirection = false;

fetch(priceData)
  .then(res => {

    res.json().then(data => {

        var loopData = '';

      for (var i = 0; i < data.length; i++) {



        loopData += `<tr>
                        <td>${data[i].market_cap_rank}</td>
                        <td><img id="coinLogos" src="${data[i].image}">${data[i].id}</td>
                        <td>${"$" + new Intl.NumberFormat().format(data[i].market_cap)}</td>
                        <td>${"$" + new Intl.NumberFormat().format(data[i].current_price)}</td>
                        <td>${"$" + new Intl.NumberFormat().format(data[i].total_volume)}</td>
                        <td>${new Intl.NumberFormat().format(data[i].circulating_supply)}</td>
                        <td>${new Intl.NumberFormat().format(data[i].price_change_percentage_24h_in_currency) + "%"}</td>
                      </tr>`;

                     if (data[i].price_change_percentage_24h_in_currency > 0) {
                        $(new Intl.NumberFormat().format(data[i].price_change_percentage_24h_in_currency) + "%").css("color", "green");
                      } else {
                        $(new Intl.NumberFormat().format(data[i].price_change_percentage_24h_in_currency) + "%").css("color", "red");
                      }
        console.log(data[i].market_cap_rank, data[i].id,  data[i].market_cap);

      }
        $("#tableData").html(loopData);





      //`<tr><td>${coin.market_cap_rank}</td><td>${coin.id}</td><td>${coin.market_cap}</td></tr>`;

    })
  })

/*let personData = [
    {rank: 1, name: 'Bitcoin', marketCap: 33139},
    {rank: 2, name: 'Bitcoin', marketCap: 33139},
    {rank: 3, name: 'Bitcoin', marketCap: 33139},
    {rank: 4, name: 'Bitcoin', marketCap: 33139},
    {rank: 5, name: 'Bitcoin', marketCap: 33139}
];

$(document).ready(function(){
  loadTableData(personData)
});



function loadTableData(personData) {
  const tableBody = document.getElementById("tableData");
  let dataHTML = '';

  for(let coin of personData) {
    dataHTML += `<tr><td>${coin.rank}</td><td>${coin.name}</td><td>${coin.marketCap}</td></tr>`;
  }

  console.log(dataHTML);

  tableData.innerHTML = dataHTML;
} */
