const axios = require("axios");

function getData(url) {
  const result = axios
    .get(url)
    .then((response) => returnData(response))
    .catch(function (error) {
      console.log(error);
    });

  return result;
}

function returnData(res) {
  return res;
}

getData("http://localhost:3003/api/assets/");
