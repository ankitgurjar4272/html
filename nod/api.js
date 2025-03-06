
fetch("https://randomuser.me/api/?results=500")
.then((result) => {
return result.json()
})
.then((res) => {
    console.log(res)
    
})
.catch((error) => {
    console.log(error)
})
