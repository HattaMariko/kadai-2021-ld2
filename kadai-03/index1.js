const n = parseInt(process.argv[2])
for(let i = 2; i < n; i = i +1){
    if(n % i == 0){
        console.log(`${n}は素数でない`)
        break        
    }else{
        console.log(`${n}は素数である`)
        break
    }
}

