# Epam Test Task

Учебный проект, реализован в 2021 году на языке **`JavaScript`**

Данный репозиторий хранит тестовые задания выполненные с целью выявления уровня знаний:
+ HTML;
+ CSS;
+ JavaScript.

###### Демонстрация
<dl>
  <dd>
    <dl>
      <dd>
          <h3><a href="https://riorustik.github.io/Epam_Test_Task/">GitHub Pages</a> :octocat:</h3>
      </dd>
    </dl>
  </dd>
</dl> 



Навигация репозитория.

В папке ***"task one"*** находится задание №1 (Функция глубого копирования объектов).
```
function deepCopy(obj)
{
    let copyObj = {};
    for(let i in obj)
    {
        if(obj[i] instanceof Object)
        {
            copyObj[i] = deepCopy(obj[i]);
            continue;
        }
        copyObj[i] = obj[i];
    }
    return copyObj;
}
```

В папке ***"docs"*** находится задание №2 (Функция "кликер", позволяет считать количество кликов мышью по разным цветам квадрата).
```
function main () 
{
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
```






