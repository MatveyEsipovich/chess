function updateTime() {
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
    var timeString = hours + ":" + minutes + ":" + seconds;

    // Обновляем содержимое элемента с id="time"
    document.getElementById("time").innerHTML = timeString;
}

// Вызываем функцию updateTime каждую секунду
setInterval(updateTime, 1000);
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById('loadingFooter').style.display = 'none';
        document.getElementById('contentFooter').style.display = 'block';
    }, 3000); // Замените 3000 на нужное количество миллисекунд для эффекта загрузки
});


