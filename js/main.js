// 1. Запитайте у юзера скільки йому років: «Привіт мені - “” років!». //
function UserAge() {
    let UserAge = document.getElementById("UserAge").value;
    document.getElementById("AnswerTask1").style.display = "";
    document.getElementById("AnswerUserAge").innerHTML = 'Привіт, мені - ' + UserAge + ' років.';
}
// 2. Запитайтесь якого року народження юзер, теперішній рік візьмемо за константу. Виведемо скільки йому років. //
function YearUserAge() {
    let getDate = new Date()
    const TODAY_YEAR = getDate.getFullYear()
    let YearUserAge = parseInt(document.getElementById("YearUserAge").value);
    CalcUserAge = TODAY_YEAR - YearUserAge;
    document.getElementById("AnswerTask2").style.display = "";
    document.getElementById("AnswerUserAgeYear").innerHTML = 'Народився я в ' + YearUserAge + '.<br>Отже мені ' + CalcUserAge + ' років.';
}
// 3. Запитайтесь у юзера довжини сторін прямокутника та виведіть його периметр.
function Perimeter() {
    let length = parseInt(document.getElementById("length").value);
    let width = parseInt(document.getElementById("width").value);
    let P = 2 * (length + width)
    document.getElementById("AnswerTask3").style.display = "";
    document.getElementById("ResultPerimeter").innerHTML = 'Периметр дорівнює ' + P + '';
}
// 4. Запитайтесь в юзера радіус кола та виведіть його площу.(число пі)
function Radius() {
    const PI = 3.1415;
    let radius = parseInt(document.getElementById("radius").value);
    let Square = PI * Math.pow(radius, 2)
    document.getElementById("AnswerTask4").style.display = "";
    document.getElementById("ResultRadius").innerHTML = 'Площа кола дорівнює ' + Square.toFixed(2) + '';
}
// 5. Водій їде з середньою швидкістю 50 км в годину. Запитайтесь у нього скільки ще йому необхідно часу їхати, та виведіть відстань.
function distance() {
    let AverageSpeed = 50;
    let TimeToEndWay = parseFloat(document.getElementById("CurrentTime").value);
    document.getElementById("AnswerTask5").style.display = "";
    document.getElementById("distance").innerHTML = 'Відстань яку потрібно проїхати = ' + (AverageSpeed * TimeToEndWay).toFixed(1) + 'км';
}
// 6. Реалізуємо конвертер кілометрів в милі і навпаки =) 
function MilesResult() {
    const CONSTANT_VALUE = 0.62137;
    let km = parseFloat(document.getElementById("kilometers").value);
    document.getElementById("MilesResult").value = (km * CONSTANT_VALUE).toFixed(3);
}
function KilometersResult() {
    const CONSTANT_VALUE = 0.62137;
    let mi = parseFloat(document.getElementById("miles").value);
    document.getElementById("KilometersResult").value = (mi / CONSTANT_VALUE).toFixed(3);
}
// 7. Юзер вводить скільки коштів на його картці та ціну одного літра бензину. Виводимо скільки бензину він може купити та скільки грошей у нього залишиться.
function CardMoney() {
    document.getElementById("msg").style.display = "";
    let MoneyOnCard = parseFloat(document.getElementById("MoneyOnCard").value);
    let PriceGasoline = parseFloat(document.getElementById("PriceGasoline").value);
    let AmountGasoline = Math.trunc(MoneyOnCard / PriceGasoline);
    document.getElementById("MsgResult").innerHTML ='Кількість бензину яку може купити юзер = ' +
        AmountGasoline + 'л.' + '<br>На картці залишилось ' +
        ((MoneyOnCard / PriceGasoline - AmountGasoline) * PriceGasoline).toFixed(2) +'гривні';
}