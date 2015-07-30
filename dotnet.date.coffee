# Date functions

Date::format (format) -> 
    result = format

    result = result.replace('dd', @getDate().toString().padLeft(2, '0'));
    result = result.replace('d', @getDate());

    result = result.replace('mm', (@getMonth() + 1).toString().padLeft(2, '0'));
    result = result.replace('m', (@getMonth() + 1));

    result = result.replace('yyyy', @getFullYear());

    result = result.replace('HH', @getHours().toString().padLeft(2, '0'));
    result = result.replace('H', @getHours());

    result = result.replace('MM', @getMinutes().toString().padLeft(2, '0'));
    result = result.replace('M', @getMinutes());

    result = result.replace('SS', @getSeconds().toString().padLeft(2, '0'));
    result = result.replace('S', @getSeconds());

    return result


    
Date.today ->
    now = new Date()
    today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);

    return today;
    
Date::addDays (days) ->
    new Date(@getFullYear(), 
             @getMonth(), 
             @getDate() + days, 
             @getHours(), 
             @getMinutes(), 
             @getSeconds(), 
             @getMilliseconds())
             
Date::addMonths (months) ->
    new Date(@getFullYear(), 
             @getMonth() + months, 
             @getDate(), 
             @getHours(), 
             @getMinutes(), 
             @getSeconds(), 
             @getMilliseconds())
