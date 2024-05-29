// Функция для смены элемента
function changeItem(itemType, itemSrc) {
    document.getElementById(itemType).src = itemSrc;
    updateCanvas();
}

// Функция для обновления canvas
function updateCanvas() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    // Очищаем canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Получаем все слои в правильном порядке
    let layersOrder = ['background', 'avatar', 'hat', 'body', 'bottom', 'glasses', 'accessories-left', 'accessories-right'];
    
    // Рисуем каждый слой на canvas
    layersOrder.forEach(layerId => {
        let layer = document.getElementById(layerId);
        if (layer && layer.src) {
            let img = new Image();
            img.src = layer.src;
            img.onload = function() {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
        }
    });
}

// Функция для скачивания изображения
function downloadImage() {
    let canvas = document.getElementById('canvas');
    let imageUrl = canvas.toDataURL('image/png');

    // Создаем временную ссылку для скачивания изображения
    let link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'downloaded_image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Привязываем функцию скачивания к кнопке
document.getElementById('download-btn').addEventListener('click', downloadImage);

// Обновляем canvas при загрузке страницы
window.onload = updateCanvas;
