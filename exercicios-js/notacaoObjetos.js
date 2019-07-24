const obj = {
    nome:'Joao',
    endereco: 'Rua ABC',
    cidade: 'Belo Horizonte'
}

console.log(obj.nome)

Object.freeze(obj)


obj.nome = 'Maria'

console.log(obj)