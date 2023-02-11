function Button(width, height, type, color) {
    this.width = width;
    this.height = height;
    this.type = type;
    this.color = color;

    this.onClick = () => {
        console.log('~~~~~~~~~~~~~~~~');
        console.log('Все свойства кнопки: ');
        console.log(`Ширина: ${width}`);
        console.log(`Высота: ${height}`);
        console.log(`Тип: ${type}`);
        console.log(`Цвет: ${color}`);
        console.log('~~~~~~~~~~~~~~~~');
        console.log('');
    };
}

function testButton(btnToTest, btnOriginal) {
    const isEqual = btnToTest.width === btnOriginal.width &&
        btnToTest.height === btnOriginal.height &&
        btnToTest.type === btnOriginal.type &&
        btnToTest.color === btnOriginal.color;

    console.log('~~~~~~~~~~~~~~~~');
    console.log(`Кнопка для сравнения: ${JSON.stringify(btnToTest)}`);
    console.log(`Кнопка оригинал: ${JSON.stringify(btnOriginal)}`);

    if (isEqual) {
        console.log('Обе кнопки имеют одинаковые свойства');
    } else {
        console.log('Свойства двух кнопок различаются');
    }
    console.log('~~~~~~~~~~~~~~~~');
    console.log('');
}

const btn = new Button(100, 20, 'button', 'green');

const btnSame = new Button(100, 20, 'button', 'green');
const btnDiff = new Button(150, 20, 'button', 'red');

// DUMP all props
// console.log(`Кнопка ${JSON.stringify(btn)}`);

// Print all props of the original button
btn.onClick();

// compare 2 equal buttons
testButton(btn, btnSame);

// compare 2 different buttons
testButton(btn, btnDiff);