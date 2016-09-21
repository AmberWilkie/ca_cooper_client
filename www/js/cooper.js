var Person, getAgeGroup, messages, coopMessage, coopDistance;

Number.prototype.between = function(a, b) {
  var max, min;
  min = Math.min.apply(Math, [a, b]);
  max = Math.max.apply(Math, [a, b]);
  return this >= min && this <= max;
};

Person = function(attr) {
  this.gender = attr.gender;
  this.age = parseInt(attr.age);
};

Person.prototype.getCooper = function(dist) {
  distance = parseInt(dist);
  this.coopDistance = distance;
  if (this.gender === 'Female') {
    this.coopMessage = this.getCooperForWomen(distance);
  } else {
    this.coopMessage = this.getCooperForMen(distance);
  }
};

// Person.prototype.getDistance = function(dist) {
//   coopDistance = dist;
//   console.log(coopDistance);
// };

Person.prototype.getCooperForMen = function(distance) {
  var age, ageGroup, cooperMessage;
  age = this.age;
  ageGroup = getAgeGroup(age);
  cooperMessage = void 0;
  switch (ageGroup) {
    case '13-14':
      if (distance >= 2700) {
        cooperMessage = messages(1);
      } else if (distance.between(2400, 2699)) {
        cooperMessage = messages(2);
      } else if (distance.between(2200, 2399)) {
        cooperMessage = messages(3);
      } else if (distance.between(2100, 2199)) {
        cooperMessage = messages(4);
      } else {
        cooperMessage = messages(5);
      }
      break;
    case '15-16':
      if (distance >= 2800) {
        cooperMessage = messages(1);
      } else if (distance.between(2500, 2799)) {
        cooperMessage = messages(2);
      } else if (distance.between(2300, 2499)) {
        cooperMessage = messages(3);
      } else if (distance.between(2200, 2299)) {
        cooperMessage = messages(4);
      } else {
        cooperMessage = messages(5);
      }
      break;
    case '17-19':
      if (distance >= 3000) {
        cooperMessage = messages(1);
      } else if (distance.between(2700, 2999)) {
        cooperMessage = messages(2);
      } else if (distance.between(2500, 2699)) {
        cooperMessage = messages(3);
      } else if (distance.between(2300, 2499)) {
        cooperMessage = messages(4);
      } else {
        cooperMessage = messages(5);
      }
      break;
    case '20-29':
      if (distance >= 2800) {
        cooperMessage = messages(1);
      } else if (distance.between(2400, 2799)) {
        cooperMessage = messages(2);
      } else if (distance.between(2200, 2399)) {
        cooperMessage = messages(3);
      } else if (distance.between(1600, 2199)) {
        cooperMessage = messages(4);
      } else {
        cooperMessage = messages(5);
      }
      break;
    case '30-39':
      if (distance >= 2700) {
        cooperMessage = messages(1);
      } else if (distance.between(2300, 2699)) {
        cooperMessage = messages(2);
      } else if (distance.between(2000, 2299)) {
        cooperMessage = messages(3);
      } else if (distance.between(1400, 1999)) {
        cooperMessage = messages(4);
      } else {
        cooperMessage = messages(5);
      }
      break;
    case '40-49':
      if (distance >= 2500) {
        cooperMessage = messages(1);
      } else if (distance.between(2100, 2499)) {
        cooperMessage = messages(2);
      } else if (distance.between(1700, 2099)) {
        cooperMessage = messages(3);
      } else if (distance.between(1400, 1699)) {
        cooperMessage = messages(4);
      } else {
        cooperMessage = messages(5);
      }
      break;
    case '50+':
      if (distance >= 2400) {
        cooperMessage = messages(1);
      } else if (distance.between(2000, 2399)) {
        cooperMessage = messages(2);
      } else if (distance.between(1600, 1999)) {
        cooperMessage = messages(3);
      } else if (distance.between(1300, 1599)) {
        cooperMessage = messages(4);
      } else {
        cooperMessage = messages(5);
      }
  }
  return cooperMessage;
};

Person.prototype.getCooperForWomen = function(distance) {
  var age, ageGroup, cooperMessage;
  age = this.age;
  ageGroup = getAgeGroup(age);
  cooperMessage = void 0;
  switch (ageGroup) {
    case '13-14':
      if (distance >= 2000) {
        cooperMessage = messages(1);
      } else if (distance.between(1900, 1999)) {
        cooperMessage = messages(2);
      } else if (distance.between(1600, 1899)) {
        cooperMessage = messages(3);
      } else if (distance.between(1500, 1599)) {
        cooperMessage = messages(4);
      } else {
        cooperMessage = messages(5);
      }
      break;
    case '15-16':
      if (distance >= 2100) {
        cooperMessage = messages(1);
      } else if (distance.between(2000, 2099)) {
        cooperMessage = messages(2);
      } else if (distance.between(1700, 1999)) {
        cooperMessage = messages(3);
      } else if (distance.between(1600, 1699)) {
        cooperMessage = messages(4);
      } else {
        cooperMessage = messages(5);
      }
      break;
    case '17-19':
      if (distance >= 2300) {
        cooperMessage = messages(1);
      } else if (distance.between(2100, 2299)) {
        cooperMessage = messages(2);
      } else if (distance.between(1800, 2099)) {
        cooperMessage = messages(3);
      } else if (distance.between(1700, 1799)) {
        cooperMessage = messages(4);
      } else {
        cooperMessage = messages(5);
      }
      break;
    case '20-29':
      if (distance >= 2700) {
        cooperMessage = messages(1);
      } else if (distance.between(2200, 2699)) {
        cooperMessage = messages(2);
      } else if (distance.between(1800, 2199)) {
        cooperMessage = messages(3);
      } else if (distance.between(1500, 1799)) {
        cooperMessage = messages(4);
      } else {
        cooperMessage = messages(5);
      }
      break;
    case '30-39':
      if (distance >= 2500) {
        cooperMessage = messages(1);
      } else if (distance.between(2000, 2499)) {
        cooperMessage = messages(2);
      } else if (distance.between(1700, 1999)) {
        cooperMessage = messages(3);
      } else if (distance.between(1400, 1699)) {
        cooperMessage = messages(4);
      } else {
        cooperMessage = messages(5);
      }
      break;
    case '40-49':
      if (distance >= 2300) {
        cooperMessage = messages(1);
      } else if (distance.between(1900, 2299)) {
        cooperMessage = messages(2);
      } else if (distance.between(1500, 1899)) {
        cooperMessage = messages(3);
      } else if (distance.between(1200, 1499)) {
        cooperMessage = messages(4);
      } else {
        cooperMessage = messages(5);
      }
      break;
    case '50+':
      if (distance >= 2200) {
        cooperMessage = messages(1);
      } else if (distance.between(1700, 2199)) {
        cooperMessage = messages(2);
      } else if (distance.between(1400, 1699)) {
        cooperMessage = messages(3);
      } else if (distance.between(1100, 1399)) {
        cooperMessage = messages(4);
      } else {
        cooperMessage = messages(5);
      }
  }
  return cooperMessage;
};

getAgeGroup = function(age) {
  if (age.between(13, 14)) {
    return '13-14';
  } else if (age.between(15, 16)) {
    return '15-16';
  } else if (age.between(17, 19)) {
    return '17-19';
  } else if (age.between(20, 29)) {
    return '20-29';
  } else if (age.between(30, 39)) {
    return '30-39';
  } else if (age.between(40, 49)) {
    return '40-49';
  } else if (age >= 50) {
    return '50+';
  } else {
    return 'no age';
  }
};

messages = function(num) {
  if (num === 1) {
    return 'Excellent';
  } else if (num === 2) {
    return 'Above average';
  } else if (num === 3) {
    return 'Average';
  } else if (num === 4) {
    return 'Below average';
  } else {
    return 'Poor';
  }
};
