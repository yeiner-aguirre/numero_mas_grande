function formarNumeroMasGrande(numeros) {
    if (!numeros || numeros.length === 0) {
        return "Por favor, ingrese números válidos";
    }

    const resultado = numeros
        .map(String)
        .sort((a, b) => {
            const opcion1 = a + b;
            const opcion2 = b + a;
            return opcion2.localeCompare(opcion1);
        })
        .join('');

    return resultado[0] === '0' ? '0' : resultado;
}

function calcularNumeroMasGrande() {
    const entrada = document.getElementById('numeros').value;
    
    if (!/^[0-9,\s]+$/.test(entrada)) {
        mostrarResultado('Error: Solo se permiten números y comas.');
        return;
    }
    
    const numeros = entrada
        .split(',')
        .map(num => num.trim())
        .filter(num => num !== '')
        .map(Number)
        .filter(num => !isNaN(num) && num >= 0);

    if (numeros.length === 0) {
        mostrarResultado('Por favor, ingrese números válidos separados por comas');
        return;
    }

    const resultado = formarNumeroMasGrande(numeros);
    mostrarResultado(`El número más grande posible es: ${resultado}`);
}

function mostrarResultado(mensaje) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = mensaje;
    resultadoElement.style.opacity = '0';
    setTimeout(() => {
        resultadoElement.style.opacity = '1';
    }, 50);
}

document.getElementById('numeros').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calcularNumeroMasGrande();
    }
});

document.getElementById('numeros').addEventListener('input', function(event) {
    this.value = this.value.replace(/[^0-9,\s]/g, '');
});