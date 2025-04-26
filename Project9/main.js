const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

// Налаштування канвасу
canvas.width = 800;
canvas.height = 400;

// Проста анімація: рух прямокутника (гравець)
let player = {
    x: 50,
    y: canvas.height - 50,
    width: 40,
    height: 40,
    speed: 5,
    jumping: false,
    jumpPower: 15,
    velocityY: 0
};

// Основний цикл гри
function gameLoop() {
    // Очистка канвасу
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Малювання гравця
    ctx.fillStyle = 'red';
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Оновлення позиції
    if (player.jumping) {
        player.velocityY += 0.5; // Гравітація
        player.y += player.velocityY;
        if (player.y > canvas.height - player.height) {
            player.y = canvas.height - player.height;
            player.jumping = false;
            player.velocityY = 0;
        }
    }

    requestAnimationFrame(gameLoop);
}

// Керування
document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowRight') {
        player.x += player.speed;
    } else if (e.code === 'ArrowLeft') {
        player.x -= player.speed;
    } else if (e.code === 'Space' && !player.jumping) {
        player.jumping = true;
        player.velocityY = -player.jumpPower;
    }
});

// Запуск гри
window.addEventListener('load', function () {
    gameLoop();
    console.log('Game running without assets');
});
