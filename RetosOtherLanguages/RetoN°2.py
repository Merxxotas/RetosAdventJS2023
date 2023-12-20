def manufacture(gifts, materials):
    result = []
    for gift in gifts:
        canMake = True
        for letter in gift:
            if letter not in materials:
                canMake = False
                break
        if canMake:
            result.append(gift)
    return result

gifts = ['tren', 'oso', 'pelota']
materials = 'tronesa'
print (manufacture(gifts, materials)) # ["tren", "oso"]

gifts = ['juego', 'puzzle']
materials = 'jlepuz'
print (manufacture(gifts, materials)) # ["puzzle"]

gifts = ['libro', 'ps5']
materials = 'psli'
print (manufacture(gifts, materials)) # []
