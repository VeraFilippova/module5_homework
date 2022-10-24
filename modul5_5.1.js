let promtNum = +prompt('Введите число')

if (isNaN(promtNum) || promtNum === 0 || promtNum == NaN) {
    alert('Упс, кажется, вы ошиблись')
} else {
    let numVariant = promtNum % 2 === 0 ? 'Четное' : 'Нечетное'
    console.log(`${promtNum} ${numVariant}`)
}
