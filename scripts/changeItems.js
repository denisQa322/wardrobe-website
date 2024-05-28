function changeHat() {
    const hats = document.querySelectorAll('.hat-item');
    hats.forEach(hat => {
        hat.addEventListener('click', () => {
            hats.forEach(otherHat => {
                otherHat.classList.remove('active');
            });
            hat.classList.add('active');
        });
    });
}

changeHat();

function changeAccessories(){
    const accessories = document.querySelectorAll('.accessories-item');
    accessories.forEach(accessory => {
        accessory.addEventListener('click', () => {
            accessories.forEach(otherAccessory => {
                otherAccessory.classList.remove('active');
            });
            accessory.classList.add('active');
        });
    });
}

changeAccessories();

function changeBottoms(){
    const bottoms = document.querySelectorAll('.bottom-item');
    bottoms.forEach(bottom => {
        bottom.addEventListener('click', () => {
            bottoms.forEach(otherBottom => {
                otherBottom.classList.remove('active');
            });
            bottom.classList.add('active');
        });
    });
}

changeBottoms();

function changeItem(type, src) {
    const element = document.getElementById(type);
    if (src) {
        element.src = src;
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

