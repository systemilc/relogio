
$('#enviar').click(function(){

    let buscaDataAmericano = $('#buscaData').val()
    let buscaDataBrasileiro = buscaDataAmericano.split('-').reverse().join('/');

    $('#diasRestantes').text(dataAtual.diff(buscaDataBrasileiro))

})


// const now = moment(new Date()); // Data de hoje
// const past = moment("2014-07-07"); // Outra data no passado
// const duration = moment.duration(now.diff(past));

// // Mostra a diferença em dias
// const days = duration.asDays();


let hoje = new Date();
let dia = String(hoje.getDate()).padStart(2, '0');
let mes = String(hoje.getMonth() + 1).padStart(2, '0');
let ano = hoje.getFullYear();
dataAtual = dia + '/' + mes + '/' + ano;
$('#data').text(dataAtual)

setInterval(function(){
    
    let novaHora = new Date();
    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundo = novaHora.getSeconds();
    minuto = zero(minuto);
    segundo = zero(segundo);
      
    $('#hora').text(hora+':'+minuto+':'+segundo)

},1000)

function zero(i) {
    if (i < 10) {
        i = '0' + i;
    } return i;
}