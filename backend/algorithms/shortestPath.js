function findShortestPath(start, end) {

  const toRadians = (degrees) => (degrees * Math.PI) / 180;

  const earthRadiusKm = 6371;

  const startLat = toRadians(start.latitude);
  const startLon = toRadians(start.longitude);
  const endLat = toRadians(end.latitude);
  const endLon = toRadians(end.longitude);

  const dLat = endLat - startLat;
  const dLon = endLon - startLon;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(startLat) * Math.cos(endLat) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = earthRadiusKm * c;

  return distance;
  // const path = [start, end];
  // return path;
}

module.exports = { findShortestPath };
