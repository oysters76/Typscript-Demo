function performAction(event:Event){
  const val = (<HTMLInputElement>document.getElementById("textbox")).value;
  let liTag = document.createElement("li");
  liTag.innerHTML = val; 
  document.querySelector(".list")?.appendChild(liTag);
}