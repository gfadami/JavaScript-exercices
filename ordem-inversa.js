
        // Criar uma função que recebe uma palavra como parametro e retorna essa palavra invertida.

        // 1 - Receber a palavra como parametro
        // 2 - Criar uma variável temporária para armazenar o resultado
        // 3 - Iterar a palavra de tras para frente, armazenando letra por letra na variavel temporaria
        // 4 - Retornar a variavel temporaria
         
        //01234567
        //abacate
        //length = 7
        //6543210

        function ordemInversa(palavra) {
            var palavraInvertida = '';
            for (var i = palavra.length - 1; i >= 0; i--) {
                palavraInvertida += palavra[i];
            }
            return palavraInvertida;
        }
