let os = require('os')

module.exports = {
skipJsErrors: true,
hostname : os.hostname(),
// other settings
baseUrl: "https://testerp.onenfinity.com/sales/Home",
//concurrency : 2,
// browsers: ["chrome"],
selectorTimeOut: 5000,
assertionTimeOut: 5000,
pageLoadTimeOut: 5000,
pageRequestTimeout:5000,
speed: 1,

// screenshots: {
//     path: "./screenshots/",
//     takeOnFails: true,
//     fullPage: false
// }

}