var archive = [];
var titulo = [];
var url = [];

//titulo
for (var i = 0; i < localStorage.length; i++) {
  archive[i] = localStorage.getItem(localStorage.key(i));
  var imagens = $("img");

 let x = Math.floor((Math.random() * 1000) + i);
 let y = Math.floor((Math.random() * 1000) + i);
 let z = Math.floor((Math.random() * 1000) + i);
 let k = Math.floor((Math.random() * 1000) + i);
 let l = Math.floor((Math.random() * 1000) + i);
 let m = Math.floor((Math.random() * 1000) + i);
 let n = Math.floor((Math.random() * 1000) + i);
 let t = Math.floor((Math.random() * 1000) + i);

  console.log(localStorage.key(i));
  $('#myModal').append('<div id="historias" class="' + i + '">' + archive[i] + '</div>');
var mee = $("."+i+" img:first-child").attr('src');
var al = mee;
$('.coverss').append(' <figure><div class="square"></div><img src="'+ al +'" alt="" class= cov id="' + i + '"><figcaption>'+ localStorage.key(i) +'</figcaption> </figure> ');

 $('.'+i).hide();

  var hh = $('.' + i).children("p");
  
  for (var o = 0; o < hh.length; o++) {
    $('.' + i).children("p").addClass('p' + i);


    // Get the modal
    var modal = document.getElementById("myModal");
    
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById(i);
    img.onclick = function(){
      modal.style.display = "block";
      var myId = this.id;
      console.log(myId);
      if(this.id == 0){
        console.log('ok');
        $('.0').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.0').hide();
        }
      } else if(this.id == 1){
        console.log('fine');
        $('.1').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.1').hide();
        }
      }else if(this.id == 2){
        console.log('whatecer');
        $('.2').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.2').hide();
        } 
      }else if(this.id == 3){
        console.log('whatecer');
        $('.3').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.3').hide();
        }
      }else if(this.id == 4){
        console.log('whatecer');
        $('.4').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.4').hide();
        }
      } else if(this.id == 5){
        console.log('ok');
        $('.5').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.5').hide();
        }
      } else if(this.id == 6){
        console.log('fine');
        $('.6').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.6').hide();
        }
      }else if(this.id == 7){
        console.log('whatecer');
        $('.7').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.7').hide();
        } 
      }else if(this.id == 8){
        console.log('whatecer');
        $('.8').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.8').hide();
        }
      }else if(this.id == 9){
        console.log('whatecer');
        $('.9').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.9').hide();
        }
      }else if(this.id == 10){
        console.log('ok');
        $('.10').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.10').hide();
        }
      } else if(this.id == 11){
        console.log('fine');
        $('.11').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.11').hide();
        }
      }else if(this.id == 12){
        console.log('whatecer');
        $('.12').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.12').hide();
        } 
      }else if(this.id == 13){
        console.log('whatecer');
        $('.13').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.13').hide();
        }
      }else if(this.id == 14){
        console.log('whatecer');
        $('.14').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.14').hide();
        }
      } else if(this.id == 15){
        console.log('ok');
        $('.15').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.15').hide();
        }
      } else if(this.id == 16){
        console.log('fine');
        $('.16').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.16').hide();
        }
      }else if(this.id == 17){
        console.log('whatecer');
        $('.17').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.17').hide();
        } 
      }else if(this.id == 18){
        console.log('whatecer');
        $('.18').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.18').hide();
        }
      }else if(this.id == 19){
        console.log('whatecer');
        $('.19').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.19').hide();
        }
      } else if(this.id == 20){
        console.log('ok');
        $('.20').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.20').hide();
        }
      } else if(this.id == 21){
        console.log('fine');
        $('.21').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.21').hide();
        }
      }else if(this.id == 22){
        console.log('whatecer');
        $('.22').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.22').hide();
        } 
      }else if(this.id == 23){
        console.log('whatecer');
        $('.23').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.23').hide();
        }
      }else if(this.id == 24){
        console.log('whatecer');
        $('.24').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.24').hide();
        }
      } else if(this.id == 25){
        console.log('ok');
        $('.25').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.25').hide();
        }
      } else if(this.id == 26){
        console.log('fine');
        $('.26').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.26').hide();
        }
      }else if(this.id == 27){
        console.log('whatecer');
        $('.27').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.27').hide();
        } 
      }else if(this.id == 28){
        console.log('whatecer');
        $('.28').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.28').hide();
        }
      }else if(this.id == 29){
        console.log('whatecer');
        $('.29').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.29').hide();
        }
      } else if(this.id == 30){
        console.log('ok');
        $('.30').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.30').hide();
        }
      } else if(this.id == 31){
        console.log('fine');
        $('.31').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.31').hide();
        }
      }else if(this.id == 32){
        console.log('whatecer');
        $('.32').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.32').hide();
        } 
      }else if(this.id == 33){
        console.log('whatecer');
        $('.33').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.33').hide();
        }
      }else if(this.id == 34){
        console.log('whatecer');
        $('.34').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.34').hide();
        }
      } else if(this.id == 35){
        console.log('ok');
        $('.35').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.35').hide();
        }
      } else if(this.id == 36){
        console.log('fine');
        $('.36').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.36').hide();
        }
      }else if(this.id == 37){
        console.log('whatecer');
        $('.37').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.37').hide();
        } 
      }else if(this.id == 38){
        console.log('whatecer');
        $('.38').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.38').hide();
        }
      }else if(this.id == 39){
        console.log('whatecer');
        $('.39').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.39').hide();
        }
      } else if(this.id == 40){
        console.log('ok');
        $('.40').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.40').hide();
        }
      } else if(this.id == 41){
        console.log('fine');
        $('.41').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.41').hide();
        }
      }else if(this.id == 42){
        console.log('whatecer');
        $('.42').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.42').hide();
        } 
      }else if(this.id == 43){
        console.log('whatecer');
        $('.43').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.43').hide();
        }
      }else if(this.id == 44){
        console.log('whatecer');
        $('.44').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.44').hide();
        }
      } else if(this.id == 45){
        console.log('ok');
        $('.45').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.45').hide();
        }
      } else if(this.id == 46){
        console.log('fine');
        $('.46').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.46').hide();
        }
      }else if(this.id == 47){
        console.log('whatecer');
        $('.47').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.47').hide();
        } 
      }else if(this.id == 48){
        console.log('whatecer');
        $('.48').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.48').hide();
        }
      }else if(this.id == 49){
        console.log('whatecer');
        $('.49').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.49').hide();
        }
      } else if(this.id == 50){
        console.log('ok');
        $('.50').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.50').hide();
        }
      } else if(this.id == 51){
        console.log('fine');
        $('.51').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.51').hide();
        }
      }else if(this.id == 52){
        console.log('whatecer');
        $('.52').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.52').hide();
        } 
      }else if(this.id == 53){
        console.log('whatecer');
        $('.53').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.53').hide();
        }
      }else if(this.id == 54){
        console.log('whatecer');
        $('.54').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.54').hide();
        }
      } else if(this.id == 55){
        console.log('ok');
        $('.55').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.55').hide();
        }
      } else if(this.id == 56){
        console.log('fine');
        $('.56').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.56').hide();
        }
      }else if(this.id == 57){
        console.log('whatecer');
        $('.57').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.57').hide();
        } 
      }else if(this.id == 58){
        console.log('whatecer');
        $('.58').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.58').hide();
        }
      }else if(this.id == 59){
        console.log('whatecer');
        $('.59').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.59').hide();
        }
      } else if(this.id == 60){
        console.log('ok');
        $('.60').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.60').hide();
        }
      } else if(this.id == 61){
        console.log('fine');
        $('.61').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.61').hide();
        }
      }else if(this.id == 62){
        console.log('whatecer');
        $('.62').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.62').hide();
        } 
      }else if(this.id == 63){
        console.log('whatecer');
        $('.63').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.63').hide();
        }
      }else if(this.id == 64){
        console.log('whatecer');
        $('.64').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.64').hide();
        }
      } else if(this.id == 65){
        console.log('ok');
        $('.65').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.65').hide();
        }
      } else if(this.id == 66){
        console.log('fine');
        $('.66').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.66').hide();
        }
      }else if(this.id == 67){
        console.log('whatecer');
        $('.67').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.67').hide();
        } 
      }else if(this.id == 68){
        console.log('whatecer');
        $('.68').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.68').hide();
        }
      }else if(this.id == 69){
        console.log('whatecer');
        $('.69').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.69').hide();
        }
      } else if(this.id == 70){
        console.log('ok');
        $('.70').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.70').hide();
        }
      } else if(this.id == 71){
        console.log('fine');
        $('.71').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.71').hide();
        }
      }else if(this.id == 72){
        console.log('whatecer');
        $('.72').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.2').hide();
        } 
      }else if(this.id == 73){
        console.log('whatecer');
        $('.73').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.73').hide();
        }
      }else if(this.id == 74){
        console.log('whatecer');
        $('.74').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.74').hide();
        }
      } else if(this.id == 75){
        console.log('ok');
        $('.75').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.75').hide();
        }
      } else if(this.id == 76){
        console.log('fine');
        $('.76').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.76').hide();
        }
      }else if(this.id == 77){
        console.log('whatecer');
        $('.77').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.77').hide();
        } 
      }else if(this.id == 78){
        console.log('whatecer');
        $('.78').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.78').hide();
        }
      }else if(this.id == 79){
        console.log('whatecer');
        $('.79').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.79').hide();
        }
      } else if(this.id == 80){
        console.log('ok');
        $('.80').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.80').hide();
        }
      } else if(this.id == 81){
        console.log('fine');
        $('.81').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.81').hide();
        }
      }else if(this.id == 82){
        console.log('whatecer');
        $('.82').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.82').hide();
        } 
      }else if(this.id == 83){
        console.log('whatecer');
        $('.83').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.83').hide();
        }
      }else if(this.id == 84){
        console.log('whatecer');
        $('.84').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.84').hide();
        }
      } else if(this.id == 85){
        console.log('ok');
        $('.85').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.85').hide();
        }
      } else if(this.id == 86){
        console.log('fine');
        $('.86').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.86').hide();
        }
      }else if(this.id == 87){
        console.log('whatecer');
        $('.87').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.87').hide();
        } 
      }else if(this.id == 88){
        console.log('whatecer');
        $('.88').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.88').hide();
        }
      }else if(this.id == 89){
        console.log('whatecer');
        $('.89').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.89').hide();
        }
      } else if(this.id == 90){
        console.log('ok');
        $('.90').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.90').hide();
        }
      } else if(this.id == 91){
        console.log('fine');
        $('.91').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.91').hide();
        }
      }else if(this.id == 92){
        console.log('whatecer');
        $('.92').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.92').hide();
        } 
      }else if(this.id == 93){
        console.log('whatecer');
        $('.93').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.93').hide();
        }
      }else if(this.id == 94){
        console.log('whatecer');
        $('.94').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.94').hide();
        }
      } else if(this.id == 95){
        console.log('ok');
        $('.95').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.95').hide();
        }
      } else if(this.id == 96){
        console.log('fine');
        $('.96').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.96').hide();
        }
      }else if(this.id == 97){
        console.log('whatecer');
        $('.97').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.97').hide();
        } 
      }else if(this.id == 98){
        console.log('whatecer');
        $('.98').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.98').hide();
        }
      }else if(this.id == 99){
        console.log('whatecer');
        $('.99').show();
        span.onclick = function() { 
          modal.style.display = "none";
          $('.99').hide();
        }
      }
    }
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    
  }
}

var modals = document.getElementById("myModals");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("99");
img.onclick = function(){
  modals.style.display = "block";
  
}

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("closes")[0];

// When the user clicks on <span> (x), close the modal
spans.onclick = function() { 
  modals.style.display = "none";
}



var modalss = document.getElementById("myModalss");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementById("98");
imgs.onclick = function(){
  modalss.style.display = "block";
  
}

// Get the <span> element that closes the modal
var spanss = document.getElementsByClassName("closess")[0];

// When the user clicks on <span> (x), close the modal
spanss.onclick = function() { 
  modalss.style.display = "none";
}



var modalsss = document.getElementById("myModalsss");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgss = document.getElementById("97");
imgss.onclick = function(){
  modalsss.style.display = "block";
  
}

// Get the <span> element that closes the modal
var spansss = document.getElementsByClassName("closesss")[0];

// When the user clicks on <span> (x), close the modal
spansss.onclick = function() { 
  modalsss.style.display = "none";
}




var modalssss = document.getElementById("myModalssss");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgsss = document.getElementById("96");
imgsss.onclick = function(){
  modalssss.style.display = "block";
  
}

// Get the <span> element that closes the modal
var spanssss = document.getElementsByClassName("closessss")[0];

// When the user clicks on <span> (x), close the modal
spanssss.onclick = function() { 
  modalssss.style.display = "none";
}


var modalsssss = document.getElementById("myModalsssss");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgssss = document.getElementById("95");
imgssss.onclick = function(){
  modalsssss.style.display = "block";
  
}

// Get the <span> element that closes the modal
var spansssss = document.getElementsByClassName("closesssss")[0];

// When the user clicks on <span> (x), close the modal
spansssss.onclick = function() { 
  modalsssss.style.display = "none";
}



var modalssssss = document.getElementById("myModalssssss");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgsssss = document.getElementById("94");
imgsssss.onclick = function(){
  modalssssss.style.display = "block";
  
}

// Get the <span> element that closes the modal
var spanssssss = document.getElementsByClassName("closessssss")[0];

// When the user clicks on <span> (x), close the modal
spanssssss.onclick = function() { 
  modalssssss.style.display = "none";
}



var modalsssssss = document.getElementById("myModalsssssss");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgssssss = document.getElementById("93");
imgssssss.onclick = function(){
  modalsssssss.style.display = "block";
  
}

// Get the <span> element that closes the modal
var spansssssss = document.getElementsByClassName("closesssssss")[0];

// When the user clicks on <span> (x), close the modal
spansssssss.onclick = function() { 
  modalsssssss.style.display = "none";
}




var modalssssssss = document.getElementById("myModalssssssss");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgsssssss = document.getElementById("92");
imgsssssss.onclick = function(){
  modalssssssss.style.display = "block";
  
}

// Get the <span> element that closes the modal
var spanssssssss = document.getElementsByClassName("closessssssss")[0];

// When the user clicks on <span> (x), close the modal
spanssssssss.onclick = function() { 
  modalssssssss.style.display = "none";
}