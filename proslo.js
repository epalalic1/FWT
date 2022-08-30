
let assert = chai.assert;
describe('Raspored', function() {
 describe('FiltrirajRaspored()', function() {
    it('Dan koji ne postoji u rasporedu', function(){
     FiltrirajRaspored.postaviRaspored(document.getElementById("glavno"));
     FiltrirajRaspored.filtrirajProslo('Subota');
     var celija = document.getElementById('glavno').getElementsByTagName('TD');
     var broj = 0;
     var j ;
      for(var i = 0; i < celija.length;i++) {
        var pomocna = celija[i];
        if (pomocna.innerText == 'Ponedjeljak') {
          j = i;
        }
      }
      for (var i = j; i < celija.length;i++) {
        var pomocna = celija[i];
        if(pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!='Srijeda' && pomocna.innerText!='Cetvrtak'
          && pomocna.innerText!='Petak' && pomocna.innerText!=''){
          broj++;
        }
      }

    assert(broj,9,'Broj aktivnosti ostaje isto');
   });
  it('Ako posaljemo prvi dan tj ponedjeljak', function() {
      FiltrirajRaspored.postaviRaspored(document.getElementById("glavno"));
     FiltrirajRaspored.filtrirajProslo('Subota');
     var celija = document.getElementById('glavno').getElementsByTagName('TD');
     var broj = 0;
     var j ;
      for(var i = 0; i < celija.length;i++) {
        var pomocna = celija[i];
        if (pomocna.innerText == 'Ponedjeljak') {
          j = i;
        }
      }
      for (var i = j; i < celija.length;i++) {
        var pomocna = celija[i];
        if(pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!='Srijeda' && pomocna.innerText!='Cetvrtak'
          && pomocna.innerText!='Petak' && pomocna.innerText!=''){
          broj++;
        }
      }

    assert(broj,9,'Broj aktivnosti ostaje isti');
   });
   it('Ako posaljemo srijedu', function() {
     FiltrirajRaspored.postaviRaspored(document.getElementById("glavno"));
    FiltrirajRaspored.filtrirajProslo('Srijeda');
     var celija = document.getElementById('glavno').getElementsByTagName('TD');
     var broj = 0;
     var j ;
      for(var i = 0; i < celija.length;i++) {
        var pomocna = celija[i];
        if (pomocna.innerText == 'Srijeda') {
          j = i;
        }
      }
      for (var i = j; i < celija.length;i++) {
        var pomocna = celija[i];
         if(pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!='Srijeda' && pomocna.innerText!='Cetvrtak'
          && pomocna.innerText!='Petak' && pomocna.innerText!=''){
          broj++;
        }
      }

    assert(broj,3,'Ponedjeljak i utorak nemaju aktivnosti');
   });
  
  
   
  
  
 });
});
