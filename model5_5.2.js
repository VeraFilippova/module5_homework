let x = prompt() ;

if (x === 'true' || x === 'false') {
 x = Boolean(x)
} else if (Number(x)) {
 x = Number(x)
} 

if (typeof x === 'string') {
 console.log('x=строка')
 alert('Это строка')
} else if (typeof x === 'boolean') {
 console.log('x=логический тип')
 alert('Это логический тип')
} else if (typeof x === 'number') {
 console.log('Это число')
 alert ('Это число')
} else {alert ('Тип x не определён')
}