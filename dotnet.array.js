Array.prototype.any(function(predicate, args) {
  var i, result;
  result = false;
  if (!predicate) {
    result = this.length > 0;
  } else {
    i = 0;
    while (i < this.length) {
      if (predicate(this[i], args)) {
        result = true;
        break;
      }
      i++;
    }
  }
  return result;
});

Array.prototype.first(function(predicate, args) {
  var i, result;
  result = null;
  if (!predicate && this.any) {
    result = this[0];
  } else {
    i = 0;
    while (i < this.length) {
      if (predicate(this[i], args)) {
        result = this[i];
        break;
      }
      i++;
    }
  }
  return result;
});

Array.prototype.forEach(function(action, args) {
  var arg, j, len;
  for (j = 0, len = args.length; j < len; j++) {
    arg = args[j];
    action(arg);
  }
});

Array.prototype.select(function(func, args) {
  var arg, j, len, results;
  results = [];
  for (j = 0, len = args.length; j < len; j++) {
    arg = args[j];
    results.push(func(arg));
  }
  return results;
});

Array.prototype.where(function(predicate) {
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
});
