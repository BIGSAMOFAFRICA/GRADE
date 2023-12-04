function show_result(){
    let c = document.querySelector("#c").value;
    let mt = document.querySelector("#mt").value;
    let ph = document.querySelector("#ph").value; 
    let ja = document.querySelector("#ja").value;
    let csa = document.querySelector("#csa").value;

  let to =  parseFloat(c) + parseFloat(mt) + parseFloat(ph) + parseFloat(ja) + parseFloat(csa);
  let per =  (to * 100)/500;
  if(per >=90){
    document.querySelector(".gra").innerHTML = "a+"
    var snd = new Audio('./MUSIC/ameno.mp3');
    snd.play();
  }else if(per >  80){
    document.querySelector(".gra").innerHTML = "a"
    var snd = new Audio('./MUSIC/ameno.mp3');
    snd.play();
} else if(per >  70){
    document.querySelector(".gra").innerHTML = "b+"
    var snd = new Audio('./MUSIC/AVENGERS.mp3');
    snd.play();
    } else if(per >  60){
        document.querySelector(".gra").innerHTML = "b"
        var snd = new Audio('./MUSIC/AVENGERS.mp3');
    snd.play();
        } else if(per >  50){
            document.querySelector(".gra").innerHTML = "c+"
            var snd = new Audio('./MUSIC/Are-you-playing.mp3');
    snd.play();
            } else if(per >  40){
                document.querySelector(".gra").innerHTML = "c"
                var snd = new Audio('./MUSIC/Are-you-playing.mp3');
                snd.play();
                } else if(per >  35){
                    document.querySelector(".gra").innerHTML = "d+"
                    var snd = new Audio('./MUSIC/whine.mp3');
                    snd.play();
                    }
                    else if(per >  30){
                        document.querySelector(".gra").innerHTML = "d"
                        var snd = new Audio('/.MUSIC/whine.mp3');
                    snd.play();
                        } else {
                            document.querySelector(".gra").innerHTML = "YOU ARE A FAILURE"
                            var snd = new Audio('./MUSIC/MUMU.mp3');
                    snd.play();
                        }

 document.querySelector(".to").innerHTML = to;
 document.querySelector(".per").innerHTML=per;
 
 if(per > 30){
    document.querySelector(".result h2").innerHTML ="Congratulation you pass";
    
 } else{
    document.querySelector(".result h2").innerHTML = "You are a failure";
 }
 }
 









