$(document).ready(function (){
//Creo un oggetto che descriva uno studente con le seguenti proprieta: nome , cognome ,eta

var studente = {
    'nome':'Arianna',
    'cognome':'rossi',
    'eta':'25'
}



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
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);

    var studente = {
        nome: studenti[i].nome,
        cognome: studenti[i].cognome
    }
    
    var html = template(studente);
    $('#studenti').append(html);


};

//Do la possibilita di inserire un nuovo studente e lo stampo insieme agli altri

$('#button').click(function(){
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);

    var studente = {
        nome:prompt('Inserici il tuo nome'),
        cognome:prompt('Inserisci il tuo Cognome'),
        eta: prompt('Inserisci la tua eta')
    }

    var html = template(studente);
    $('#newStud').append(html);



    studenti.push(studente);
    console.log(studenti);

})


});



