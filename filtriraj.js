
var FiltrirajRaspored =(function(){
   var raspored;
   var suma;
   var filtrirajPredmet = function(predmet) {
    var velika = predmet.toUpperCase();
    if (predmet.length == 0) {
      return;
    }
    else if (raspored!=document.getElementById('glavno')) {
      console.log("Potrebno je postaviti raspored!");
    }
    else {
      var pon, uto, sri, cet, pet;
      var celija = raspored.getElementsByTagName("TD");
      for (var i=0;i<celija.length;i++) {
        var pomocna = celija[i];
        if (pomocna.innerText == 'Ponedjeljak') {
          pon = i;
        }
        if (pomocna.innerText == 'Utorak') {
          uto = i;
        }
        if (pomocna.innerText == 'Srijeda') {
          sri = i;
        }
        if (pomocna.innerText == 'Cetvrtak') {
          cet = i;
        }
        if (pomocna.innerText == 'Petak') {
          pet = i;
        }
      }
      for (var i=pon;i<celija.length;i++) {
        var pomocna = celija[i];
        if (pomocna.innerText == 'Utorak') {
          break;
        }
        else {
          if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' &&  pomocna.innerText.toUpperCase().match(velika) == null) {
                  suma = pomocna.colSpan;
                  pomocna.innerText = '';
                  pomocna.colSpan = "1";
                  for(var k = 0; k < suma-1;k++) {
                   
                    raspored.getElementsByTagName("tr")[1].insertCell(1);
                  }
          }
        }
      }
      for (var i=uto;i<celija.length;i++) {
        var pomocna = celija[i];
        if (pomocna.innerText == 'Srijeda') {
          break;
        }
        else {
          if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' &&  pomocna.innerText!='Srijeda'
            && pomocna.innerText.toUpperCase().match(velika) == null) {
                  suma = pomocna.colSpan;
                  pomocna.innerText = '';
                  pomocna.colSpan = "1";
                  for(var k = 0; k < suma-1;k++) {
                   
                    raspored.getElementsByTagName("tr")[2].insertCell(1);
                  }
          }
        }
      }
      for (var i=sri;i<celija.length;i++) {
        var pomocna = celija[i];
        if (pomocna.innerText == 'Cetvrtak') {
          break;
        }
        else {
          if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' &&  pomocna.innerText!='Srijeda' && pomocna.innerText!='Cetvrtak'
            && pomocna.innerText.toUpperCase().match(velika) == null) {
                  suma = pomocna.colSpan;
                  pomocna.innerText = '';
                  pomocna.colSpan = "1";
                  for(var k = 0; k < suma-1;k++) {
                   
                    raspored.getElementsByTagName("tr")[3].insertCell(1);
                  }
          }
        }
      }
       for (var i=cet;i<celija.length;i++) {
        var pomocna = celija[i];
        if (pomocna.innerText == 'Petak') {
          break;
        }
        else {
          if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' &&  pomocna.innerText!='Srijeda' && pomocna.innerText!='Cetvrtak'
            && pomocna.innerText!='Cetvrtak'&& pomocna.innerText.toUpperCase().match(velika) == null) {
                  suma = pomocna.colSpan;
                  pomocna.innerText = '';
                  pomocna.colSpan = "1";
                  for(var k = 0; k < suma-1;k++) {
                   
                    raspored.getElementsByTagName("tr")[4].insertCell(1);
                  }
          }
        }
      }
         for (var i=pet;i<celija.length;i++) {
        var pomocna = celija[i];
        
      
          if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' &&  pomocna.innerText!='Srijeda' && pomocna.innerText!='Cetvrtak'
            && pomocna.innerText!='Cetvrtak'&& pomocna.innerText!='Petak' && pomocna.innerText.toUpperCase().match(velika) == null) {
                  suma = pomocna.colSpan;
                  pomocna.innerText = '';
                  pomocna.colSpan = "1";
                  for(var k = 0; k < suma-1;k++) {
                   
                    raspored.getElementsByTagName("tr")[5].insertCell(1);
                  }
          }
        
      }

    }
   	for (var i=pon;i<celija.length;i++) {
      var pomocna = celija[i];
      if (pomocna.innerText == '') {
        pomocna.style.backgroundColor = "#B2BEB5";
      }
      else if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!='Srijeda' && pomocna.innerText!='Cetvrtak'
        && pomocna.innerText!='Petak' && pomocna.innerText!='') {
          pomocna.style.backgroundColor = "#BCD4E6";
      }
    }
   }



   var filtrirajTrajanje = function(string) {
      
   }




   var filtrirajTip = function(tip) {
      if (tip.length == 0) {
        return;
      }
      else {
        var velika = tip.toUpperCase();
       var celija = raspored.getElementsByTagName("TD");
        var pon,uto,sri,cet,pet;
        var suma;
        for (var i = 0; i <celija.length;i++) {
          var pomocna = celija[i];
          if (pomocna.innerText == 'Ponedjeljak') {
            pon = i;
          }
          if (pomocna.innerText == 'Utorak') {
            uto = i;
          }
          if (pomocna.innerText == 'Srijeda') {
            sri = i;
          }
          if (pomocna.innerText == 'Cetvrtak') {
            cet = i;
          }
          if (pomocna.innerText == 'Petak') {
            pet = i;
          }
        }
        for (var i = pon;i < celija.length;i++) {
          var pomocna = celija[i];
          if (pomocna.innerText == 'Utorak') {
            break;
          }
          else if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText.toUpperCase().match(velika)==null
            && pomocna.innerText!='') {
                  suma = pomocna.colSpan;
                  pomocna.innerText = '';
                  pomocna.colSpan = "1";
                  for(var k = 0; k < suma-1;k++) {
                   
                    raspored.getElementsByTagName("tr")[1].insertCell(1);
                  }
          }
        }
        for (var i = uto;i < celija.length;i++) {
          var pomocna = celija[i];
          if (pomocna.innerText == 'Srijeda') {
            break;
          }
          else if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText.toUpperCase().match(velika)==null) {
                  suma = pomocna.colSpan;
                  pomocna.innerText = '';
                  pomocna.colSpan = "1";
                  for(var k = 0; k < suma-1;k++) {
               
                    raspored.getElementsByTagName("tr")[2].insertCell(1);
                  }
          }
        }
        for (var i = sri;i < celija.length;i++) {
          var pomocna = celija[i];
          if (pomocna.innerText == 'Cetvrtak') {
            break;
          }
          else if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!='Srijeda'
            && pomocna.innerText.toUpperCase().match(velika)==null && pomocna.innerText!='') {
                  suma = pomocna.colSpan;
                  pomocna.innerText = '';
                  pomocna.colSpan = "1";
                  for(var k = 0; k < suma-1;k++) {
                    raspored.getElementsByTagName("tr")[3].insertCell(1);
                  }
          }
        }
        for (var i = cet;i < celija.length;i++) {
          var pomocna = celija[i];
          if (pomocna.innerText == 'Petak') {
            break;
          }
          else if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!='Srijeda'
            && pomocna.innerText.toUpperCase().match(velika)==null && pomocna.innerText!='' && pomocna.innerText!='Cetvrtak' &&
            pomocna.innerText!='') {
                  suma = pomocna.colSpan;
                  pomocna.innerText = '';
                  pomocna.colSpan = "1";
                  for(var k = 0; k < suma-1;k++) {
                    raspored.getElementsByTagName("tr")[4].insertCell(1);
                  }
          }
        }
        for (var i = pet;i < celija.length;i++) {
          var pomocna = celija[i];
          
           if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!='Srijeda'
            && pomocna.innerText.toUpperCase().match(velika)==null && pomocna.innerText!='' && pomocna.innerText!='Cetvrtak' &&
            pomocna.innerText!='' && pomocna.innerText!='Petak') {
                  suma = pomocna.colSpan;
                  pomocna.innerText = '';
                  pomocna.colSpan = "1";
                  for(var k = 0; k < suma-1;k++) {
                    raspored.getElementsByTagName("tr")[5].insertCell(1);
                  }
          }
        }
        for (var i = pon;i<celija.length;i++) {
          var pomocna = celija[i];
          if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!='Srijeda' && 
            pomocna.innerText!='Cetvrtak' &&  pomocna.innerText!='Petak' &&  pomocna.innerText=='') {
             pomocna.style.backgroundColor = "#B2BEB5";
          }
          else if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!='Srijeda' && 
            pomocna.innerText!='Cetvrtak' &&  pomocna.innerText!='Petak' &&  pomocna.innerText!='') {
             pomocna.style.backgroundColor = "#BCD4E6";
          }
        }
   		
   		}
   }



   var filtrirajBuduce = function(dan) {
          var celija = raspored.getElementsByTagName("TD");
        
          var pocetak;

        if (dan == 'Ponedjeljak') {
          var pon, uto, sri, cet, pet;
          var suma;
          for (var i = 0; i < celija.length;i++) {
            var pomocna = celija[i];
            if (pomocna.innerText == 'Ponedjeljak') {
              pon = i;
            }
            if (pomocna.innerText == 'Utorak') {
              uto = i;
            }
            if (pomocna.innerText == 'Srijeda') {
              sri = i;
            }
            if (pomocna.innerText == 'Cetvrtak') {
              cet = i;
            }
            if (pomocna.innerText == 'Petak') {
              pet = i;
            }
          }
          for (var i = uto;i < celija.length;i++) {
            var pomocna = celija[i];
            if (pomocna.innerText == 'Srijeda') {
              break;
            }
            else {
              if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!='' && 
                pomocna.innerText!='Srijeda'){
                  suma = pomocna.colSpan;
                  pomocna.innerText = '';
                  pomocna.colSpan = "1";
                  for(var k = 0; k < suma-1;k++) {
                    raspored.getElementsByTagName("tr")[2].insertCell(1);
                  }
              } 
            }
          }
          for (var i = sri;i < celija.length;i++) {
            var pomocna = celija[i];
            if (pomocna.innerText == 'Cetvrtak') {
              break;
            }
            else {
              if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!='' && 
                pomocna.innerText!='Srijeda' && pomocna.innerText!='Cetvrtak'){
                  suma = pomocna.colSpan;
                  pomocna.innerText = '';
                  pomocna.colSpan = "1";
                  for(var k = 0; k < suma-1;k++) {
                    raspored.getElementsByTagName("tr")[3].insertCell(1);
                  }
              } 
            }
          }
           for (var i = cet;i < celija.length;i++) {
            var pomocna = celija[i];
            if (pomocna.innerText == 'Petak') {
              break;
            }
            else {
              if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!='' && 
                pomocna.innerText!='Srijeda' && pomocna.innerText!='Cetvrtak'){
                  suma = pomocna.colSpan;
                  pomocna.innerText = '';
                  pomocna.colSpan = "1";
                  for(var k = 0; k < suma-1;k++) {
                    raspored.getElementsByTagName("tr")[4].insertCell(1);
                  }
              } 
            }
          }
          for (var i = cet;i < celija.length;i++) {
            var pomocna = celija[i];
            /*if (pomocna.innerText == 'Petak') {
              break;
            }*/ 
                if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!='' && 
                pomocna.innerText!='Srijeda' && pomocna.innerText!='Cetvrtak' && pomocna.innerText!='Petak'){
                  suma = pomocna.colSpan;
                  pomocna.innerText = '';
                  pomocna.colSpan = "1";
                  for(var k = 0; k < suma-1;k++) {
                    raspored.getElementsByTagName("tr")[5].insertCell(1);
                  }
              } 
            
          }
          for (var i = uto;i < celija.length;i++) {
            var pomocna = celija[i];
            if (pomocna.innerText!='Utorak' && pomocna.innerText!='Srijeda' && pomocna.innerText!='Cetvrtak' && pomocna.innerText!='Petak'){
              pomocna.style.backgroundColor = "#B2BEB5";
            }
          }
          

         }
        if (dan == 'Utorak') {
            var uto,sri,cet,pet;
            var suma;
            for (var i = 0 ;i < celija.length;i++) {
              var pomocna = celija[i];
              if (pomocna.innerText == 'Srijeda') {
                sri = i;
              }
              if (pomocna.innerText == 'Cetvrtak') {
                cet = i;
              }
              if (pomocna.innerText == 'Petak') {
                pet = i;
              }
            }
           
            for (var i=sri;i < celija.length;i++) {
              var pomocna = celija[i];
              if (pomocna.innerText == 'Cetvrtak') {
                  break;
              }
              else {
                if (pomocna.innerText!='Cetvrtak' && pomocna.innerText!='Srijeda' && pomocna.innerText!='') {
                     suma = pomocna.colSpan;
                    pomocna.innerText = '';
                    pomocna.colSpan = "1";
                    for(var k = 0; k < suma-1;k++) {
                      raspored.getElementsByTagName("tr")[3].insertCell(1);
                    }
                }
              }
            }
            for (var i = cet;i < celija.length;i++) {
                var pomocna = celija[i];
                if (pomocna.innerText == 'Petak') {
                  break;
                }
                else {
                    if (pomocna.innerText!='Cetvrtak' && pomocna.innerText!='Petak' && pomocna.innerText!=''){
                      suma = pomocna.colSpan;
                      pomocna.innerText = '';
                      pomocna.colSpan = "1";
                      for(var k = 0; k < suma-1;k++) {
                        raspored.getElementsByTagName("tr")[4].insertCell(1);
                      }
                    }
                }
            }
            for (var i=pet;i<celija.length;i++) {
              var pomocna = celija[i];
              if (pomocna.innerText!='Petak' && pomocna.innerText!='') {
                  suma = pomocna.colSpan;
                  pomocna.innerText = '';
                  pomocna.colSpan = "1";
                  for(var k = 0; k < suma-1;k++) {
                      raspored.getElementsByTagName("tr")[5].insertCell(1);
                  }
              }
            }
            for (var i = sri;i<celija.length;i++) {
              var pomocna = celija[i];
              if(pomocna.innerText!='Srijeda' && pomocna.innerText!='Cetvrtak' && pomocna.innerText!='Petak') {
                pomocna.style.backgroundColor = "#B2BEB5";
              }
            }


        }


        if (dan == 'Srijeda') {
          var cet,pet;
          var suma;
          for (var i = 0 ;i < celija.length;i++) {
            var pomocna = celija[i];
            if (pomocna.innerText == 'Srijeda') {
              sri = i;
            }
            if (pomocna.innerText == 'Cetvrtak') {
              cet = i;
            }
            if (pomocna.innerText == 'Petak') {
              pet = i;
            }
          }
          for (var i = cet;i<celija.length;i++) {
            var pomocna = celija[i];
            if (pomocna.innerText == 'Petak') {
              break;
            }
            else {
              if (pomocna.innerText!='Cetvrtak' && pomocna.innerText!='Petak' && pomocna.innerText!='') {
                  suma = pomocna.colSpan;
                  pomocna.innerText = '';
                  pomocna.colSpan = "1";
                  for(var k = 0; k < suma-1;k++) {
                      raspored.getElementsByTagName("tr")[4].insertCell(1);
                  }
              }
            }
          }
          for (var i = pet;i < celija.length;i++) {
            var pomocna = celija[i];
            if (pomocna.innerText!='Petak' && pomocna.innerText!='') {
                  suma = pomocna.colSpan;
                  pomocna.innerText = '';
                  pomocna.colSpan = "1";
                  for(var k = 0; k < suma-1;k++) {
                      raspored.getElementsByTagName("tr")[5].insertCell(1);
                  }
            }
          }
          
       
        }
        if (dan == 'Cetvrtak') {
          var pet;
          var suma;
          for (var i=0;i<celija.length;i++) {
              var pomocna = celija[i];
              if (pomocna.innerText == 'Petak') {
                pet = i;
              }
          }
          for (var i=pet;i<celija.length;i++) {
                  var pomocna = celija[i];
                  if (pomocna.innerText!='Petak' && pomocna.innerText!='') {
                    suma = pomocna.colSpan;
                    pomocna.innerText = '';
                    pomocna.colSpan = "1";
                    for(var k = 0; k < suma-1;k++) {
                      raspored.getElementsByTagName("tr")[5].insertCell(1);
                    }
                  }
          }
        }

       
   }




   var filtrirajProslo = function (dan) {
      var celija = raspored.getElementsByTagName("TD");
   		
        if (dan == 'Petak') {
            var pon,uto,sri,cet;
            for(var i = 0; i < celija.length;i++) {
              var pomocna = celija[i];
              if (pomocna.innerText == 'Ponedjeljak') {
                pon = i;
              }
              if (pomocna.innerText == 'Utorak') {
                uto = i;
              }
              if (pomocna.innerText == 'Srijeda') {
                sri = i;
              }
              if (pomocna.innerText == 'Cetvrtak') {
                cet = i;
              }
            }
            for (var i = pon; i < celija.length;i++) {
              var pomocna = celija[i];
              if (pomocna.innerText == 'Utorak') {
                break;
              }
              else {
                if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!=''){
                    suma = pomocna.colSpan;
                    pomocna.innerText = '';
                    pomocna.colSpan = "1";
                    for(var k = 0; k < suma-1;k++) {
                      raspored.getElementsByTagName("tr")[1].insertCell(1);
                    }
                }
              }
            }
             for (var i = uto; i < celija.length;i++) {
              var pomocna = celija[i];
              if (pomocna.innerText == 'Srijeda') {
                break;
              }
              else {
                if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!=''){
                    suma = pomocna.colSpan;
                    pomocna.innerText = '';
                    pomocna.colSpan = "1";
                    for(var k = 0; k < suma-1;k++) {
                      raspored.getElementsByTagName("tr")[2].insertCell(1);
                    }
                }
              }
            }
            for (var i = sri; i < celija.length;i++) {
              var pomocna = celija[i];
              if (pomocna.innerText == 'Cetvrtak') {
                break;
              }
              else {
                if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!='Srijeda' 
                  && pomocna.innerText!=''){
                    suma = pomocna.colSpan;
                    pomocna.innerText = '';
                    pomocna.colSpan = "1";
                    for(var k = 0; k < suma-1;k++) {
                      raspored.getElementsByTagName("tr")[3].insertCell(1);
                    }
                }
              }
            }
             for (var i = cet; i < celija.length;i++) {
              var pomocna = celija[i];
              if (pomocna.innerText == 'Petak') {
                break;
              }
              else {
                if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!='Srijeda' 
                  && pomocna.innerText!=''  && pomocna.innerText!='Cetvrtak'){
                    suma = pomocna.colSpan;
                    pomocna.innerText = '';
                    pomocna.colSpan = "1";
                    for(var k = 0; k < suma-1;k++) {
                      raspored.getElementsByTagName("tr")[4].insertCell(1);
                    }
                }
              }
            }

            for (var i = pon;i < celija.length;i++) {
                var pomocna = celija[i];
                if (pomocna.innerText == 'Petak') {
                  break;
                }
                else if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!='Srijeda' 
                  && pomocna.innerText!='Cetvrtak') {
                    pomocna.style.backgroundColor = "#B2BEB5";
                }
            }
            
        } 
        if (dan == 'Cetvrtak') {
            var pon, uto, sri;
            var suma = 0;
            for (var i = 0 ;i < celija.length;i++) {
              var pomocna = celija[i];
              if (pomocna.innerText == 'Ponedjeljak'){
                pon = i;
              }
              if (pomocna.innerText == 'Utorak') {
                uto = i;
              }
              if (pomocna.innerText == 'Srijeda') {
                sri = i;
              }
            }
             for (var i = pon; i < celija.length;i++) {
              var pomocna = celija[i];
              if (i == uto) {
                break;
              }
              else {
                if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!=''){
                    suma = pomocna.colSpan;
                    pomocna.innerText = '';
                    pomocna.colSpan = "1";
                    for(var k = 0; k < suma-1;k++) {
                      raspored.getElementsByTagName("tr")[1].insertCell(1);
                    }
                }
              }
            }
            for (var i = uto; i < celija.length;i++) {
              var pomocna = celija[i];
              if (pomocna.innerText == 'Srijeda') {
                break;
              }
              else {
                if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!='Srijeda'
                 &&pomocna.innerText!=''){
                    suma = pomocna.colSpan;
                    pomocna.innerText = '';
                    pomocna.colSpan = "1";
                    for(var k = 0; k < suma-1;k++) {
                      raspored.getElementsByTagName("tr")[2].insertCell(1);
                    }
                }
              }
            }
            for (var i = sri; i < celija.length;i++) {
              var pomocna = celija[i];
              if (pomocna.innerText == 'Cetvrtak') {
                break;
              }
              else {
                if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!='Srijeda'
                 &&pomocna.innerText!=''){
                    suma = pomocna.colSpan;
                    pomocna.innerText = '';
                    pomocna.colSpan = "1";
                    for(var k = 0; k < suma-1;k++) {
                      raspored.getElementsByTagName("tr")[3].insertCell(1);
                    }
                }
              }
            }
            for (var i = pon;i < celija.length;i++) {
                var pomocna = celija[i];
                if (pomocna.innerText == 'Cetvrtak') {
                  break;
                }
                else if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!='Srijeda') {
                    pomocna.style.backgroundColor = "#B2BEB5";
                }
            }
        		
         
        } 
        if (dan == 'Srijeda')  {
          
            var pon;
            var uto;
            var suma = 0;
            for (var i = 0;i < celija.length;i++) {
              var pomocna = celija[i];
              if (pomocna.innerText == 'Ponedjeljak') {
                pon = i;
              }
              if (pomocna.innerText == 'Utorak') {
                uto = i;
              }
            }
            for (var i = pon; i < celija.length;i++) {
              var pomocna = celija[i];
              if (i == uto) {
                break;
              }
              else {
                if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!=''){
                    suma = pomocna.colSpan;
                    pomocna.innerText = '';
                    pomocna.colSpan = "1";
                    for(var k = 0; k < suma-1;k++) {
                      raspored.getElementsByTagName("tr")[1].insertCell(1);
                    }
                }
              }
            }
            for (var i = uto; i<celija.length;i++) {
              var pomocna = celija[i];
              if (pomocna.innerText == 'Srijeda') {
                break;
              }
              else {
                if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak' && pomocna.innerText!='') {
                    suma = pomocna.colSpan;
                    pomocna.innerText = '';
                    pomocna.colSpan = "1";
                    for(var k = 0; k < suma-1;k++) {
                      raspored.getElementsByTagName("tr")[2].insertCell(1);
                    }
                }
              }
            }
            for (var i = pon;i < celija.length;i++) {
                var pomocna = celija[i];
                if (pomocna.innerText == 'Srijeda') {
                  break;
                }
                else if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak') {
                    pomocna.style.backgroundColor = "#B2BEB5";
                }
            }
        } 

        if (dan == 'Utorak') {
          var suma = 0;
          var brojac=0;
          var pon;
          for(var i = 0;i<celija.length;i++) {
            	var pomocna = celija[i];
            	if (pomocna.innerText == 'Ponedjeljak') {
                  pon = i;
            		for(var j = i;j < celija.length;j++) {
            			var pomocna1 = celija[j];
            			if (pomocna1.innerText == 'Utorak') {
            				break;
            			}
            			if ( pomocna1.innerText!='Ponedjeljak' &&pomocna1.innerText!='Utorak' && pomocna1.innerText!='Srijeda' && 
            				pomocna1.innerText!='Cetvrtak' && pomocna1.innerText!='') {
                    suma = pomocna1.colSpan;
            				pomocna1.innerText = '';
                    pomocna1.colSpan = "1";
                    for(var k = 0;k<suma-1;k++) {
                      raspored.getElementsByTagName("tr")[1].insertCell(1);
                    }
            			}
            		}
            	}
          	}
            for (var i = pon;i < celija.length;i++) {
                var pomocna = celija[i];
                if (pomocna.innerText == 'Utorak') {
                  break;
                }
                else if (pomocna.innerText!='Ponedjeljak' && pomocna.innerText!='Utorak') {
                    pomocna.style.backgroundColor = "#B2BEB5";
                }
            }
          
        }
   
   }
    var postaviRaspored  = function(div) {
        raspored  = div;
   }


  
    return {
      filtrirajPredmet : filtrirajPredmet,
      filtrirajTrajanje: filtrirajTrajanje,
      filtrirajTip: filtrirajTip,
      filtrirajBuduce: filtrirajBuduce,
      filtrirajProslo: filtrirajProslo,
      postaviRaspored: postaviRaspored
   
  }
}());

//primjer korištenja modula
/*Operacije.filtrirajPredmet('emina');
Operacije.filtrirajTrajanje('emina');
Operacije.filtrirajTip('tip');
Operacije.filtrirajBuduce('dan');
Operacije.filtrirajProslo('emina');*/
//Operacije.postaviRaspored(document.getElementById('glavno'));
//Operacije.filtrirajPredmet('RMA');
//Operacije.filtrirajBuduce('Ponedjeljak');
//Operacije.filtrirajProslo('Srijeda');
//Operacije.filtrirajTip('predavanje');
//Operacije.filtrirajPredmet("RMA");

/*Operacije.postaviX1({x:1,y:0});
Operacije.ispisi();
var operand1={x:1,y:1};
Operacije.saberi({x:2,y:2});
Operacije.ispisi();*/