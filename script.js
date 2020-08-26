$(document).ready(function (){
//Creo un oggetto che descriva uno studente con le seguenti proprieta: nome , cognome ,eta

var studente = {
    'nome':'Ariaana',
    'cognome':'rossi',
    'eta':'25'
}

var nome = studente.nome;
var cognome = studente.cognome;
var eta = studente.eta;

//Stampo attraverso il ciclo for..in tutte le proprieta(chiave/valore)
for( var k in studente){ 
    $("#studente").append("<li>" + k + ": " + studente[k] + "</li>");
};



//Creo un array di oggetti studenti

var studenti = [
    {
        'nome':'Mario',
        'cognome':'rossi',
        'eta':'25'
    },
    {
        'nome':'Andrea',
        'cognome':'Libero',
        'eta':'25'
    },
    {
        'nome':'Giuseppe',
        'cognome':'Vitale',
        'eta':'25'
    },
    {
        'nome':'Riccardo',
        'cognome':'Allegri',
        'eta':'25'
    },
 

];

//Stampo per ognuno nome e cognome 

for(var i=0; i<studenti.length; i++){
    $('.studenti').append("<li>Nome: " + studenti[i].nome + "   Cognome: " + studenti[i].cognome + "</li>")
};

// Do la possibilita attraverso 3 prompt all utente di aggiungere un nuovo oggetto studente
//$('#button').click(function(){
//    var nomeUser = prompt('Inserici il tuo nome');
//    var cognomeUser = prompt('Inserisci il tuo Cognome');
//    var etaUser = prompt('Inserisci la tua eta');

//    var nuovoStudente = {
//        'nome':nomeUser,
//        'cognome':cognomeUser,
//        'eta':etaUser
//    }
//    studenti.push(nuovoStudente);
//     $('.studenti').append("<li>Nome: " + nuovoStudente.nome + "   Cognome: " + nuovoStudente.cognome + "</li>")
//    console.log(studenti);
//});
$('#button').click(function(){
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);

    var nuovoStudente = {
        nome:prompt('Inserici il tuo nome'),
        cognome:prompt('Inserisci il tuo Cognome'),
        eta: prompt('Inserisci la tua eta')
    }

    var html = template(nuovoStudente);
    $('#newStud').append(html);



    studenti.push(nuovoStudente);
    console.log(studenti);

})


});



