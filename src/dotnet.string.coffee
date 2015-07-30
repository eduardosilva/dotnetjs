# String prototypes

String::padLeft = (length, char) ->
    return Array(length - @length + 1).join(char || " ") + @
