$("#entry button").on("click", saveOnePost);
$("#restart button").on("click", deleteIt);
$("#p2").hide();


//array das prompts para o utilizador responder
let prompt1 = ["-I don't know figure it out.", "-Go look for them and talk to them!", "-I'm not sure how to help maybe you should try looking for them.", "-The answer is aways love, honey!", "-(...)"];
let prompts1 = prompt1[Math.floor(Math.random() * prompt1.length)];
let prompt2 = ["-Thank you! - <input type='text' id='firstnamerep' name='firstname' class='firstnamereplace' onkeyup='twoWay(event)'> replied.", "-I shouldn't have asked... - <input type='text' id='firstnamerep' name='firstname' class='firstnamereplace' onkeyup='twoWay(event)'> replied.", "-Ok! I'll try that thank you so much! - <input type='text' id='firstnamerep' name='firstname' class='firstnamereplace' onkeyup='twoWay(event)'> replied.", "-That helps a lot thanks! - <input type='text' id='firstnamerep' name='firstname' class='firstnamereplace' onkeyup='twoWay(event)'> replied.", "-(...) - <input type='text' id='firstnamerep' name='firstname' class='firstnamereplace' onkeyup='twoWay(event)'> replied."];
let prompts2 = prompt2[Math.floor(Math.random() * prompt2.length)];
let prompt3 = ["-Where the hell have you been?", "-You found me congrats!", "-Took you long enough huh?", "-Oh hi there.", "-(...)"];
let prompts3 = prompt3[Math.floor(Math.random() * prompt3.length)];
let prompt4 = ["-Fuck off.", "-I'm happy you're here!", "-I'm not sure how to react.", "-I hate you!", "-(...)"];
let prompts4 = prompt4[Math.floor(Math.random() * prompt4.length)];
/*
    $("#refreshbutton").on("click", refresh);
function refresh() {
        //volta a dar uma prompt random através do math random
    let prompt = prompts[Math.floor(Math.random()*prompts.length)];
    $(".writingprompt1").html(prompt);
}
*/
var title = $("#ftitle").val();
var fn = $("#firstname").val();
var sn = $("#secondname").val();
var search = $("#search").val();
var search2 = $("#search2").val();
var search3 = $("#search3").val();
var search4 = $("#search4").val();
var search5 = $("#search5").val();
var search6 = $("#search6").val();
var search7 = $("#search7").val();
var search8 = $("#search8").val();
var search9 = $("#search9").val();
var search10 = $("#search10").val();
var search11 = $("#search11").val();
var search12 = $("#search12").val();
var search15 = $("#search15").val();
var search16 = $("#search16").val();
var search17 = $("#search17").val();
var search18 = $("#search18").val();
var search20 = $("#search20").val();
var search22 = $("#search22").val();
var search23 = $("#search23").val();
var search24 = $("#search24").val();
var search25 = $("#search25").val();
var search26 = $("#search26").val();
var search27 = $("#search27").val();
var chance = " ";



let x = Math.floor((Math.random() * 100) + 1);
let y = Math.floor((Math.random() * 100) + 1);
let z = Math.floor((Math.random() * 100) + 1);
let k = Math.floor((Math.random() * 100) + 1);
let l = Math.floor((Math.random() * 100) + 1);
let m = Math.floor((Math.random() * 100) + 1);
let n = Math.floor((Math.random() * 100) + 1);

var tiitl = "https://loremflickr.com/200/200/" + title +"?lock=" +  x;
var url1 = "https://loremflickr.com/200/200/"+ search + "," + search2 + "?lock=" +  y;
var url2 = "https://loremflickr.com/200/200/"+ search7 + "," + search27 + "?lock=" +  z;
var url3 = "https://loremflickr.com/200/200/"+ search11 + "," + search12 + "?lock=" +  k;
var url4 = "https://loremflickr.com/200/200/"+ search15 + "," + search17 + "?lock="  +  l;
var url5 = "https://loremflickr.com/200/200/"+ search20 + "," + chance + "?lock=" +  m;
var url6 = "https://loremflickr.com/200/200/"+ search22 + "," + search26 + "?lock=" +  n;



/*
while (title == "" || search == "" || fn == "" || search24 == "" || search2 == "" || search3 == "" || search4 == "" || search5 == "")  {

} */
$("#search").on('click', function(){
    $("#title").attr("src", tiitl);
    $("#ppt2").html(prompts2);

});

$("#search6").on('click', function(){
  $("#img1").attr("src", url1);
  $("#ppt1").html(prompts1);
});

$("#search11").on('click', function(){
  $("#img2").attr("src", url2);
  $("#ppt3").html(prompts3);
});

$("#search15").on('click', function(){
  $("#img3").attr("src", url3);
  $("#ppt4").html(prompts4);
});

$("#search20").on('click', function(){
  $("#img4").attr("src", url4);
});

$("#search22").on('click', function(){
  $("#img5").attr("src", url5);
});

$("#search26").on('click', function(){
  console.log("hi")
  $("#search26").mouseout(function(){
    console.log("hi")
    $("#img6").attr("src", url6);
    console.log("hi")
  });
});

twoWay=function(event){
  var elem =document.getElementsByClassName(event.currentTarget.className);
  for(var key in elem){
      elem[key].value=event.currentTarget.value;
  }
  }

function saveOnePost() {

  if (title == "" || search == "" || search2 == "" || search3 == "" || search4 == "" || search5 == "" || search6 == "" || search7 == "" || search8 == "" || search9 == "" || search10 == "" || search11 == "" || search12 == "" || search15 == "" || search16 == "" || search17 == "" || search18 == "" || search20 == "" || search22 == "" || search23 == "" || search24 == "" || search25 == "" || search26 == "" || search27 == ""){
    alert('Please fill all the text fields. This is an order.');
  } else{
    alert('Written by you and the computer. Your story is ready.');
    window.location.href= 'read.html';
    /*
  $("#title").attr("src", tiitl);

  $("#img1").attr("src", url1);

  //segunda imagem
  $("#img2").attr("src", url2);

   //terceira imagem
   $("#img3").attr("src", url3);

   //quarta imagem
   $("#img4").attr("src", url4);

    //primeira imagem
  $("#img5").attr("src", url5);

  //segunda imagem
  $("#img6").attr("src", url6);
*/
$("#img6").attr("src", url6);
  //fazer alguma coisa com o id para selecionar não me lembro
  var i =  localStorage.length;
var titulos = title;
   //let conteudo = '<h1>'+ title +'</h1>  <div class="img-wrapper"><img src="'+ tiitl +'" alt="" id="t'+i+'"></div> <p> Once upon a time there was a '+ search + ' named '+ fn +', from '+ search25 +'. They had really '+ search2 +' and '+ search3 +'. They were known for '+ search4 +' and everyday they would '+ search5 +'.</p> <div class="img-wrapper"><img src="'+ url1 +'" alt="" id="img1"></div> <p> But on a '+ search6 +' '+ fn +' was in '+ search7 +' and a '+ search27 +' named '+ sn +' showed up. '+ sn +' was know for '+ search8 +'. Suddenly, something unexpected happened. '+ sn +' '+ search9 +' and disappeared. They '+ search10 +'. '+ fn +' was devastated. </p> <div class="img-wrapper"><img src="'+ url2 +'" alt="" id="img2"></div>  <p>'+ fn +' didn’t know what to do so they went to '+ search11 +' looking for '+ search12 +' who gave them advice: <br> -'+ search13 +' <br> -'+ search14 +' - '+ fn +' replied.</p><div class="img-wrapper"><img src="'+ url3 +'" alt="" id="img3"></div> <p>'+ fn +' was '+ search15 +' and decided to go looking for '+ sn +'. After '+ search16 +' for '+ search17 +' hours they finally found them. '+ sn +' was '+ search18 +', and said: <br>- '+ search19 +' </p><div class="img-wrapper"><img src="'+ url4 +'" alt="" id="img4"></div> <p>Unexpectedly '+ fn +' '+ search20 +' and said: <br> - '+ search21 +'</p><div class="img-wrapper"><img src="'+ url5 +'" alt="" id="img5"></div> <p>'+ fn +' was so '+ search22 +' and decided to '+ search23 +' with '+ search24 +'. They lived '+ search26 +' ever after.</p><div class="img-wrapper"><img src="'+ url6 +'" alt="" id="img6"></div>'
   let conteudo = '<h1><em>'+ title +'</em></h1>  <div class="img-wrapper"><img src="'+ tiitl +'" alt="" id="t'+i+'"></div> <p> Once upon a time there was a <em>'+ search + '</em> named <em>'+ fn +'</em>, from <em>'+ search25 +'</em>. They had really <em>'+ search2 +'</em> and <em>'+ search3 +'</em>. They were known for <em>'+ search4 +'</em> and everyday they would <em>'+ search5 +'</em>.</p> <div class="img-wrapper"><img src="'+ url1 +'" alt="" id="img1"></div> <p> But on a <em>'+ search6 +'</em>, <em>'+ fn +'</em> was in <em>'+ search7 +'</em> and a <em>'+ search27 +'</em> named <em>'+ sn +'</em> showed up. <em>'+ sn +'</em> was know for <em>'+ search8 +'</em>. Suddenly, something unexpected happened. <em>'+ sn +'</em> <em>'+ search9 +'</em> and <em>'+ search10 +'</em>. <em>'+ fn +'</em> was devastated. </p> <div class="img-wrapper"><img src="'+ url2 +'" alt="" id="img2"></div>  <p><em>'+ fn +'</em> didn’t know what to do so they went to <em>'+ search11 +'</em> looking for <em>'+ search12 +'</em> who gave them advice: <br> -<em>'+ prompts1 +'</em> <br> -<em>'+ prompts2 +'</em> - <em>'+ fn +'</em> replied.</p><div class="img-wrapper"><img src="'+ url3 +'" alt="" id="img3"></div> <p><em>'+ fn +'</em> was <em>'+ search15 +'</em> and decided to go looking for <em>'+ sn +'</em>. After <em>'+ search16 +'</em> for <em>'+ search17 +'</em> hours they finally found them. <em>'+ sn +'</em> was <em>'+ search18 +'</em>, and said: <br>- <em>'+ prompts3 +'</em> </p><div class="img-wrapper"><img src="'+ url4 +'" alt="" id="img4"></div> <p>Unexpectedly <em>'+ fn +'</em> <em>'+ search20 +'</em> and said: <br> - <em>'+ prompts4 +'</em></p><div class="img-wrapper"><img src="'+ url5 +'" alt="" id="img5"></div> <p><em>'+ fn +'</em> was so <em>'+ search22 +'</em> and decided to <em>'+ search23 +'</em> with <em>'+ search24 +'</em>. They lived <em>'+ search26 +'</em> ever after.</p><div class="img-wrapper"><img src="'+ url6 +'" alt="" id="img6"></div>'
    console.log(conteudo);
    localStorage.setItem(titulos, conteudo);

 
    $("#p1").hide();
    $("#p2").show();
  }
  }


function deleteIt() {
  var elements = document.getElementsByTagName("input");
    for (var ii=0; ii < elements.length; ii++) {
      if (elements[ii].type == "text") {
        elements[ii].value = "";
        $("#p1").show();
      $("#p2").hide();
      }}
}