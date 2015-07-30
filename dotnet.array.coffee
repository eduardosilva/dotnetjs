#Array functions
Array::any (predicate, args) ->
    result = false;
    
    if (!predicate)
        result = this.length > 0
    else
        i = 0
        while i < @length
          if predicate(@[i], args)
            result = true
            break
          i++

    result

Array::first (predicate, args) ->
    result = null;

    if (!predicate and @.any )
        result = @[0]
    else
        i = 0
        while i < @length
            if predicate(@[i], args)
                result = @[i]
                break
            i++

    result
    
Array::forEach (action, args) ->
    action arg for arg in args
    return
    
Array::select (func, args) ->
    func arg for arg in args


    
Array::where (predicate) ->
    result = []
    i = 0
    while i < @length
        if predicate(@[i])
            result.push @[i]
        i++
        
    result

