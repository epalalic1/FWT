let assert = chai.assert;
describe('Raspored', function() {
 describe('FiltrirajRaspored()', function() {
 	 it('Ako posaljemo zadnji dan tj petak', function() {
    FiltrirajRaspored.postaviRaspored(document.getElementById("glavno"));
    FiltrirajRaspored.filtrirajBuduce('Petak');
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

  	 assert(broj,9,'Broj aktivnosti ostaje na 7');
   });
  it('Ako posaljemo srijedu', function() {
     FiltrirajRaspored.filtrirajBuduce('Srijeda');
      FiltrirajRaspored.postaviRaspored(document.getElementById("glavno"));
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

     assert(broj,8,'Broj aktivnosti ostaje na 7');
   });
  it('Dan koji ne postoji', function() {
     FiltrirajRaspored.postaviRaspored(document.getElementById("glavno"));
    FiltrirajRaspored.filtrirajBuduce('Subota');
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

     assert(broj,0,'Broj aktivnosti ostaje na 7');
   });
  

  
   
  
  
 });
});
