def decode(message):
    stack = []

    for c in message:
        if c == ')':
            reversed = ''
            while stack and stack[-1] != '(':
                reversed += stack.pop()
            # Remove the '(' from stack
            stack.pop()
            # Push the reversed string back into stack
            for reversed_char in reversed:
                stack.append(reversed_char)
        else:
            stack.append(c)

    result = ''.join(stack)

    return result

if __name__ == "__main__":
    a = decode("hola (odnum)")
    print(a)  # Hola mundo

    b = decode("(olleh) (dlrow)!")
    print(b)  # Hello World!

    c = decode("sa(u(cla)atn)s")
    print(c)  # santaclaus

    d = decode("((nta)(sa))")
    print(d)  # Hello World!
