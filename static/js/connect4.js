alert("Connect 4");

function drawBoard() {
    const canvas = document.getElementById('board');
    const ctx = canvas.getContext('2d');

    const size = 7;
    const cellSize = canvas.width / size;

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
        }
    }
}
