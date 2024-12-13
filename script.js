// // Вызываем функцию updateTime каждую секунду
setInterval(updateTime, 1000);

function updateTime() {
    // Обновляем содержимое элемента с id="time"
    var timeHtml = document.getElementById("time").innerHTML;

    if (timeHtml.length === 0) {
        document.getElementById('loadingFooter').style.display = 'none';
    }
    // Получаем строку времени в формате "часы:минуты:секунды"
    document.getElementById("time").innerHTML = getTime();
}

function getTime() {
    // Получаем текущее время
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Добавляем ведущий ноль, если значение меньше 10
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // Формируем строку времени в формате "часы:минуты:секунды"
    return hours + ":" + minutes + ":" + seconds;
}
     
                            // Получаем все ячейки таблицы
                const cells = document.querySelectorAll('td');
                const cellIdDisplay = document.getElementById('cellIdDisplay');
    
                // Перебираем каждую ячейку и добавляем обработчик события клика
                cells.forEach(cell => {
                    cell.addEventListener('click', () => {
                        // При клике выводим ID ячейки внизу страницы
                        cellIdDisplay.textContent = 'номер ячейки: ' + cell.id;
                    });
                });
            
