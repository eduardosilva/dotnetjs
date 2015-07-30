Array.prototype.all = function(predicate) {
  var i, result;
  i = 0;
  result = true;
  while (i < this.length) {
    if (!predicate(this[i])) {
      result = false;
      break;
    }
    i++;
  }
  return result;
};

Array.prototype.any = function(predicate) {
  var i, result;
  result = false;
  if (!predicate) {
    result = this.length > 0;
  } else {
    i = 0;
    while (i < this.length) {
      if (predicate(this[i])) {
        result = true;
        break;
      }
      i++;
    }
  }
  return result;
};

Array.prototype.first = function(predicate) {
  var i, result;
  result = null;
  if (!predicate && this.any()) {
    result = this[0];
  } else {
    i = 0;
    while (i < this.length) {
      if (predicate(this[i])) {
        result = this[i];
        break;
      }
      i++;
    }
  }
  return result;
};

Array.prototype.forEach = function(action) {
  var arg, j, len;
  for (j = 0, len = this.length; j < len; j++) {
    arg = this[j];
    action(arg);
  }
};

Array.prototype.select = function(func) {
  var i, j, len, results;
  results = [];
  for (j = 0, len = this.length; j < len; j++) {
    i = this[j];
    results.push(func(i));
  }
  return results;
};

Array.prototype.where = function(predicate) {
  var i, result;
  result = [];
  i = 0;
  while (i < this.length) {
    if (predicate(this[i])) {
      result.push(this[i]);
    }
    i++;
  }
  return result;
};
