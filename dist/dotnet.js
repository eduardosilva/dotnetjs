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

Array.prototype.count = function (predicate) {
    return this.where(predicate).length;
};
Array.prototype.selectMany = function (func) {
    var results = [];
    for (j = 0, len = this.length; j < len; j++) {
        i = this[j];
        func(i).forEach(function (ii) { results.push(ii); });
    }

    return results;
};

Array.prototype.min = function (func) {
    var result = undefined;

    for (j = 0, len = this.length; j < len; j++) {
        i = this[j];
        var currentValue = func(i);

        if (result == undefined || currentValue < result)
            result = currentValue;
    }

    return result;
};

Array.prototype.max = function (func) {
    var result = undefined;

    for (j = 0, len = this.length; j < len; j++) {
        i = this[j];
        var currentValue = func(i);

        if (result == undefined || currentValue > result)
            result = currentValue;
    }

    return result;
};

Array.prototype.remove = function (item) {
    for (i = 0, len = this.length; i < len; i++) {
        if (item === this[i])
        {
            this.splice(i, 1);
            break;
        }
    }
};

Array.prototype.sum = function (func){
	var result = 0;
	for (i = 0, len = this.length; i < len; i++) {
		
		result += func ? func(this[i]) : this[i];
	}
	
	return result;
}

//.net has not this method but this is very useful
Array.prototype.chuncks = function(chunkSize) {
	var chunks = [];
	var temparray = null;
	
	for (var i = 0; i < this.length; i++) {
		if (i % chunkSize === 0) {
			temparray = new Array();
			chunks.push(temparray);
		}
		temparray.push(this[i]);
	}
	return chunks;
};

Date.prototype.format = function(format) {
  var result;
  result = format;
  result = result.replace('dd', this.getDate().toString().padLeft(2, '0'));
  result = result.replace('d', this.getDate());
  result = result.replace('MM', (this.getMonth() + 1).toString().padLeft(2, '0'));
  result = result.replace('M', this.getMonth() + 1);
  result = result.replace('yyyy', this.getFullYear());
  result = result.replace('HH', this.getHours().toString().padLeft(2, '0'));
  result = result.replace('H', this.getHours());
  result = result.replace('mm', this.getMinutes().toString().padLeft(2, '0'));
  result = result.replace('m', this.getMinutes());
  result = result.replace('SS', this.getSeconds().toString().padLeft(2, '0'));
  result = result.replace('S', this.getSeconds());
  return result;
};

Date.now = function() {
  return new Date();
};

Date.today = function() {
  var now, today;
  now = new Date();
  today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
  return today;
};

Date.prototype.addDays = function(days) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + days, this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
};

Date.prototype.addMonths = function(months) {
  return new Date(this.getFullYear(), this.getMonth() + months, this.getDate(), this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
};

String.join = function (separator, array) {
	var result = "";

	for (let index = 0; index < array.length; index++) {
		const element = array[index];

		if (result !== "")
			result += separator;

		result += element;
	}

	return result;
}

String.isNullOrEmpty = function (value) {
	return !value || value === "";
};

String.prototype.padLeft = function (length, char) {
	return Array(length - this.length + 1).join(char || " ") + this;
};