const map = new Map()

map.set('name','Vera')
map.set('age',27)
map.set('job','frontend developer')
map.set('year', 1995)

map.forEach((value, key) => {
    console.log(`Ключ - ${key}, Значение - ${value}`)
})