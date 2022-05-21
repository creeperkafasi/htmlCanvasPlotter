
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.strokeStyle = "#f00"
ctx.lineWidth = 1;

function drawLine(ctx, x1, y1, x2, y2) {
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

ctx.strokeStyle = "gray"
for (let i = 1; i < 25; i++) {
    drawLine(ctx, i * 20, 0, i * 20, 500)
    drawLine(ctx, 0, i * 20, 500, i * 20)
}
ctx.strokeStyle = "blue"
drawLine(ctx, 250, 0, 250, 500)
drawLine(ctx, 0, 250, 500, 250)

function f(x, y) {
    return Math.abs(y - (Math.sin(x / 10) * 50 + (x * x / 200)))
}

function g(x, y) {
    // console.log(Math.abs(Math.sqrt((y * y) + (x * x)) + 10))
    return Math.abs(y + (x * x * x / 10000 + Math.sin(x/5)*10) )
}

let graphs = [
    {
        func: f,
        color: "red"
    },
    {
        func: g,
        color: "green"
    }
]

graphs.forEach(graph => {

    ctx.strokeStyle = graph.color
    let points = [];

    for (let xr = 0; xr <= canvas.width; xr++) {
        let x = xr - 250
        for (let yr = 0; yr < canvas.width; yr++) {
            let y = -yr + 250
            if (Math.round(graph.func(x, y)) == 0) points.push([xr, yr])
        }
    }

    for (let i = 0; i < points.length - 1; i++) {
        drawLine(ctx, points[i][0], points[i][1], points[i + 1][0], points[i + 1][1])
    }


});

