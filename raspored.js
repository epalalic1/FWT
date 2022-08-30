
function prva(nesto) {
	FiltrirajRaspored.postaviRaspored(document.getElementById('glavno'));
	FiltrirajRaspored.filtrirajPredmet(nesto);
}
function druga (drugo) {
	FiltrirajRaspored.postaviRaspored(document.getElementById('glavno'));
	FiltrirajRaspored.filtrirajTip(drugo);

}
function treca (nesto4) {
	FiltrirajRaspored.postaviRaspored(document.getElementById('glavno'));
	var i = 0;
	var pomocni ='';
	var dan = '';
	var j = 0;
	for(i = 0;i < nesto4.length;i++) {
		if(i == 0) {
			if(nesto4[i]!='+' && nesto4[i]!='-') {
				alert("Potrebno je unijeti plus ili minus");
			}
			else {
				pomocni = nesto4[i];
			}
		}
		else{
			dan+=nesto4[i];
		}
	}
	if (pomocni == '+') {
		FiltrirajRaspored.filtrirajBuduce(dan);
	}
	if (pomocni == '-') {
		FiltrirajRaspored.filtrirajProslo(dan);
	}
}
