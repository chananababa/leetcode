/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  const computeA = (pointA, pointB) => {
    if (pointA[0] < pointB[0]) {
      const tmp = [...pointB];
      pointB = [...pointA];
      pointA = [...tmp];
    }
    return (pointB[1] - pointA[1]) / (pointB[0] - pointA[0]);
  };
  const count = (point, points) => {
    const as = {}
    return points.reduce((result, aPoint) => {
      const a = computeA(aPoint, point);
      if (a in as) {
        as[a]++;
      } else {
        as[a] = 1;
      }
      return Math.max(result, as[a]);
    }, 0) + 1;
  };
  
  return points.reduce((result, point, i) => {
    return Math.max(result, count(point, points.slice(0, i).concat(points.slice(i+1))));
  }, 0);
}; 
