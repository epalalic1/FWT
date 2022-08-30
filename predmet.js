let assert = chai.assert;
describe('Raspored', function() {
 describe('FiltrirajRaspored()', function() {

   
 	it('Slanjem praznog stringa raspored ne mijenja', function() {
 	 FiltrirajRaspored.postaviRaspored(document.getElementById("glavno"));
     FiltrirajRaspored.filtrirajPredmet('');
     var celija = document.getElementById('glavno').getElementsByTagName('TD');
     var broj = 0;
     var j ;
     for (var i = 0;i < celija.length;i++) {
     	var pomocna = celija[i];
     	if (pomocna.innerText == 'Ponedjeljak') {
     		j = i;
     	}
     }
     for (var i = j; i < celija.length;i++) {
     	var pomocna = celija[i];
     	if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!='Srijeda' && pomocna.innerText!='Cetvrtak'
     		&& pomocna.innerText!='Petak' && pomocna.innerText!=''){
     		broj++;
     	}
     }

  	 assert(broj,7,'Broj aktivnosti ostaje na 7');
   });
	

   it('U rasporedu ostaje predmet RMA', function() {
   	 FiltrirajRaspored.postaviRaspored(document.getElementById("glavno"));
     FiltrirajRaspored.filtrirajPredmet('RMA');
     var celija = document.getElementById('glavno').getElementsByTagName('TD');
     var broj = 0;
     var j ;
     for (var i = 0;i < celija.length;i++) {
     	var pomocna = celija[i];
     	if (pomocna.innerText == 'Ponedjeljak') {
     		j = i;
     	}
     }
     for (var i = j; i < celija.length;i++) {
     	var pomocna = celija[i];
     	if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!='Srijeda' && pomocna.innerText!='Cetvrtak'
     		&& pomocna.innerText!='Petak' && pomocna.innerText!=''){
     		broj++;
     	}

     }

  	 assert(broj,2,'Broj aktivnosti sa RMA predmetom treba biti dva');
   });
  
 });
});
