
        var carros = ["Gol", "Palio", "Uno"];
        console.log(carros)

        var primeiroCarro = carros[0];
        var segundoCarro = carros[1];
        var terceiroCarro = carros[2];

        console.log('primeira posicao: ' + primeiroCarro);
        console.log('segunda posicao: ' + segundoCarro);
        console.log('terceira posicao: ' + terceiroCarro);

        carros[2] = "Argo";
        console.log(carros[2]);

        console.log('tamanho do array = ' + carros.length);
        console.log('ultimo elemento do array = ' + carros[carros.length - 1]);

        carros[3] = "Sandero";
        console.log('ultimo elemento do array = ' + carros[carros.length - 1]);

        carros[carros.length] = 'Honda Civic';
        console.log(carros)

        carros.push('Polo');
        console.log(carros);

        console.log(carros.pop()) // remove o ultimo elemento
        console.log(carros)

        carros.unshift('Jetta'); // add no primeiro elemento
        console.log(carros);

        carros.shift(); // remove o primeiro elemento
        console.log(carros);
