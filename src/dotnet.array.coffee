##Array functions
Array::all = (predicate) ->
    i = 0
    result = true
    while i < @length
        if !predicate(@[i])
            result = false
            break
        i++
    result

Array::any = (predicate) ->
    result = false;
    
    if (!predicate)
        result = this.length > 0
    else
        i = 0
        while i < @length
          if predicate(@[i])
            result = true
            break
          i++

    result

Array::first = (predicate) ->
    result = null;

    if (!predicate and @.any())
        result = @[0]
    else
        i = 0
        while i < @length
            if predicate(@[i])
                result = @[i]
                break
            i++

    result

Array::forEach = (action) ->
    action arg for arg in @
    return

Array::select = (func) ->
    func i for i in @
    
Array::selectMany = (func) ->
  result = []
  i = 0
  length = @length
  while i < length
    value = func(@[i])
    if Object::toString.call(value) == '[object Array]'
      j = 0
      len = value.length
      while j < len
        result.push value[j++]
    i++
  result

 
Array::where = (predicate) ->
    result = []
    i = 0
    while i < @length
        if predicate(@[i])
            result.push @[i]
        i++
        
    result