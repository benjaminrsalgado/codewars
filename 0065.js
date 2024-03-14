const filtrarPares = (array) => {
    const nuevo = array.filter(numero => numero % 2 === 0);
    return nuevo;
};

