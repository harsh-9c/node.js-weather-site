const request = require("request");
const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiaGFyc2hqamoiLCJhIjoiY2t3dTZweHV3MW4xejJ3cW8zNjJxc3E4YyJ9.5tP_x3xerPyb3qzPXqshYg";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect to location service!", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

// geocode("Nagpur", (error, data) => {
//   console.log("Error", error);
//   console.log("Data", data);
// });

module.exports = geocode;
