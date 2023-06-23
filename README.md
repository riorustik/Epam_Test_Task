# Epam Test Task

# ИГРА КОСМИЧЕСКИЙ РЫЦАРЬ | GAME SPACE KNIGHT

Учебный проект, реализован в 2021 году на языке **`JavaScript`**

Данный репозиторий хранит тестовые задания выполненные с целью выявления уровня знаний:
+ HTML;
+ CSS;
+ JavaScript.
_______

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







