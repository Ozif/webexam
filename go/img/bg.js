// 获取canvas
const cvs = document.getElementById("bg");
// 获取视口尺寸
const width = window.innerWidth * devicePixelRatio, height = innerHeight * devicePixelRatio;
// 设置canvas尺寸
cvs.width = width;
cvs.height = height;
// 获取绘制上下文
const ctx = cvs.getContext('2d');
// 字体大小
const fontSize = 20 * devicePixelRatio;
// 列宽
const columnWidth = fontSize;
// 列数
const columnCount = Math.floor(width / columnWidth);
// 每一列下一个字符是第几个字符
const nextChars = new Array(columnCount).fill(0);

// 画一排文字
function draw() {
    ctx.fillStyle = 'rgba(0,0,0,.1)';
    ctx.fillRect(0, 0, width, height);
    for (let i = 0; i < columnCount; i++) {
        // 画第一列的字符
        // 画什么字符，什么颜色，字体大小，字体类型，什么位置（x，y）
        const char = getRandomChar();
        const color = getRandomColor();
        ctx.fillStyle = color;
        ctx.font = `${fontSize}px "Robbto Mono"`;
        const x = columnWidth * i;
        const index = nextChars[i];
        const y = (index + 1) * fontSize;
        ctx.fillText(char, x, y)
        if (y > height && Math.random() > 0.95) nextChars[i] = 0
        else nextChars[i]++;
        // 更新下一个字符位置
    }

}
// 随机颜色
function getRandomColor() {
    const fontColores = [
        '#0342ff',
        '#5e91ff',
        '#0374ff',
        '#0353ff',
        '#03ffe6',
        '#aaccff',
        '#0374ff',
        '#03c4ff',
    ]
    return fontColores[Math.floor(Math.random() * fontColores.length)]
}
// 随机文字
function getRandomChar() {
    const str = '"document.write("hello world")"';
    return str[Math.floor(Math.random() * str.length)];
}
draw();
setInterval(draw, 30)