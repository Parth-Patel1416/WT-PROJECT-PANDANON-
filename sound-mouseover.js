
function playclip() 
 {
if (document.all)
 {
  document.all.sound.src = "lion.mp3";
 }
else {
var audio = document.getElementsByTagName("audio")[0];
audio.play();

}
}
