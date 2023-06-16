let matriz = [];
let matriz2 = [];

for (i = 0; i < 3; i++) {
    matriz.push([0, 0, 0]);
    for (x = 0; x < matriz[i].length; x++) {
        matriz[i][x] = prompt("Matriz 1, digite a linha " + i + " Coluna " + x)
    }
}

for (i = 0; i < 3; i++) {
    matriz2.push([0, 0, 0]);
    for (x = 0; x < matriz2[i].length; x++) {
        matriz2[i][x] = prompt("Matriz 2, Digite a linha: " + i + " Coluna " + x)
    }
}

document.write("<h1 id='result'> As matrizes digitadas e o resultado da multiplicação é: </h1>")

document.write("<table border=1 class= 'quebrar'>");

for (i = 0; i < matriz.length; i++) {
    let linha = '<tr>';
    for (x = 0; x < matriz[i].length; x++) {
        linha = linha + "<td>" + matriz[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");




document.write("<h1 class = 'quebrar'> X </h1>");




document.write("<table border=1 class= 'quebrar'>");

for (i = 0; i < matriz2.length; i++) {
    let linha = '<tr>';
    for (x = 0; x < matriz2[i].length; x++) {
        linha = linha + "<td>" + matriz2[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

document.write("<h1 class = 'quebrar'> = </h1>");


document.write("<table border=1 class= 'quebrar'>");

for (i = 0; i < matriz.length; i++) {
    let linha = '<tr>';
    for (x = 0; x < matriz2[i].length; x++) {

        let valm = 0;
        for (y = 0; y < matriz2[i].length; y++){
             valm += matriz[i][y] * matriz2[y][x]; 
        }

        linha = linha + "<td>" + valm + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");




