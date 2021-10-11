const { isPointWithinRadius } = require('geolib');

/*
source for london coordinates:
https://www.latlong.net/place/london-the-uk-14153.html
*/
const london = {
  latitude: 51.509865,
  longitude: -0.118092,
};

const metresInAMile = 1609.34;

function isWithin50MileRadiusOfLondon(point) {
  return isPointWithinRadius(
    point,
    london,
    (metresInAMile * 50), // 50 mile radius (in metres)
  );
}

module.exports = {
  isWithin50MileRadiusOfLondon,
};
