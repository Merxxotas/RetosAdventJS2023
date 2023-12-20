function decode(message)
    local stack = {}
    local result = {}

    for i = 1, #message do
        local c = message:sub(i, i)

        if c == ')' then
            local reversed = {}
            while #stack > 0 and stack[#stack] ~= '(' do
                table.insert(reversed, table.remove(stack))
            end
            -- Eliminar el '(' de la pila
            table.remove(stack)
            -- Insertar la cadena invertida de nuevo en la pila
            for j = 1, #reversed do
                table.insert(stack, reversed[j])
            end
        else
            table.insert(stack, c)
        end
    end

    for i = 1, #stack do
        table.insert(result, stack[i])
    end

    return table.concat(result)
end

local a = decode("hola (odnum)")
print(a)  -- Hola mundo

local b = decode("(olleh) (dlrow)!")
print(b)  -- Hello World!

local c = decode("sa(u(cla)atn)s")
print(c)  -- santaclaus

local d = decode("((nta)(sa))")
print(d)  -- Hello World!
