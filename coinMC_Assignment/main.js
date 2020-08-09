//API's
let BASE_URL = "https://api.coingecko.com/api/v3";

let COINS_LISTED = "/coins/list";
let COINS_MARK_PRICE = "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h";
let EXCHANGE_DATA = "/exchanges";

let allCoins = BASE_URL + COINS_LISTED;
let priceData = BASE_URL + COINS_MARK_PRICE;
let getExhangeData = BASE_URL + EXCHANGE_DATA;



$('#searchInput').on('keyup', function(){
  var value = $(this).val()
  console.log('Value:', value)
})

//coin data
  fetch(priceData)
  .then(res => {

    res.json().then(data => {

        var loopData = '';

      for (var i = 0; i < data.length; i++) {


        loopData += `<tr>
                        <td>${data[i].market_cap_rank}</td>
                        <td><img class="companyImage" src="${data[i].image}">${data[i].id}</td>
                        <td>${"$" + new Intl.NumberFormat().format(data[i].market_cap)}</td>
                        <td>${"$" + new Intl.NumberFormat().format(data[i].current_price)}</td>
                        <td>${"$" + new Intl.NumberFormat().format(data[i].total_volume)}</td>
                        <td>${new Intl.NumberFormat().format(data[i].circulating_supply)}</td>
                        <td class=${data[i].price_change_percentage_24h_in_currency > 0 ? "green": "red"}>${new Intl.NumberFormat().format(data[i].price_change_percentage_24h_in_currency) + "%"}</td>
                      </tr>`;

      }
      $("#tableData").html(loopData);
    })
  })



//exchange data
  fetch(getExhangeData)
    .then(res => {

      res.json().then(data => {

          var loopExhange = '';

        for (var i = 0; i < data.length; i++) {


          loopExhange += `<tr>
                          <td>${data[i].trust_score_rank}</td>
                          <td><img class="companyImage" src="${data[i].image}">${data[i].name}</td>
                          <td>${"$" + new Intl.NumberFormat().format(data[i].trade_volume_24h_btc_normalized)}</td>
                          <td><a id="xWebsites" href=${data[i].url} target="null">${data[i].url}</td>
                          <td>${data[i].country}</td>
                          <td>${data[i].year_established}</td>
                        </tr>`;

                      }
                      $("#exchangeTable").html(loopExhange);
                    })
                  })

      /*  $('th').on('click', function(){
          var column = $(this).data('column');
          var order = $(this).data('order');
          console.log("column was clicked", column, order);

            if (order == 'desc') {
              $(this).data('order', "asc");
              loopData = loopData.sort((a,b) => a[column] > b[column] ? 1 : -1);
            }else{
              $(this).data('order', "desc")
              loopData = loopData.sort((a,b) => a[column] < b[column] ? 1 : -1);
            }
            buildPrice(priceData);
        }) */

//nav bar
  $('#myTab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
});

$('#myTab a[href="#market"]').tab('show');
$('#myTab a[href="#exchange"]').tab('show');
