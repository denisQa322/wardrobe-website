window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;

        if(revealtop = windowheight){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}

document.getElementById('captureArea').addEventListener('click', function() {
    // Запрос пользователю выбрать область на странице
    var area = prompt('Введите координаты и размеры области (например, "x y width height"):');

    if (area) {
        var [x, y, width, height] = area.split(' ').map(Number);

        // Создание скриншота заданной области
        var canvas = document.getElementById('screenshotCanvas');
        var ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(document.documentElement, x, y, width, height, 0, 0, width, height);

        // Скачивание скриншота
        var link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    }
});



