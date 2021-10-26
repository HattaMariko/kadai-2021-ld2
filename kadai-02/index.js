const firstName = 'Hanako'
const familyName = 'Yamada'
console.log(familyName +' '+firstName)

const sum = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
console.log(sum)

const dog = true
const cat = false
console.log(dog || cat) //犬または猫を飼っているかどうか
console.log(dog && cat) //犬と猫の両方を飼っている
console.log(!dog && !cat) //犬も猫も飼っていない
console.log(!(dog || cat)) //同上

//おまけ
console.log(cat && !dog)//猫を飼っているが犬は飼っていない
console.log(dog && !cat)//犬を飼っているが猫を飼っていない