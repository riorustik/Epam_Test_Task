function main () 
{
  const panelsElements = document.querySelector('.wrapper');
  const redBlock = document.querySelector('.red');
  const greenBlock = document.querySelector('.green');
  const blueBlock = document.querySelector('.blue');
  const redCounter = document.querySelector('.red-counter');
  const greenCounter = document.querySelector('.green-counter');
  const blueCounter = document.querySelector('.blue-counter');
  let redClick = 0;
  let greenClick = 0;
  let blueClick = 0;

  panelsElements.onclick = function(event) 
  {
    let link = event.target;
    if(redBlock == link)
      redClick = output(redClick, redBlock, redCounter);
    if(greenBlock == link)
      greenClick = output(greenClick, greenBlock, greenCounter); 
    if(blueBlock == link)
      blueClick = output(blueClick, blueBlock, blueCounter);
  }
}
window.onload = main;

function output(counter,inUnit,inLine)
{
  counter++;
  inUnit.innerHTML = counter;
  inLine.innerHTML = counter;
  return counter;
}