
fetch("https://randomuser.me/api/?results=10")
.then((result) => {
return result.json()
}).then((res) => {
    console.log(res)
    
})
.catch((error) => {
    console.log(error)
})
