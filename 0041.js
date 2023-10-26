// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
    return -Math.abs(num);
}

// math.abs regresa un numero positivo si tu le pones -5 te va a dar 5. Pero en este caso como esta el -Math.abs con signo negativo si yo le pongo 10 va a dar -10