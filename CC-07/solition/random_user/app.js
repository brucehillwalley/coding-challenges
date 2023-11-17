const container =document.getElementById("user-container")
console.log(container);

const randomUser= async ()=>{
    
    const res = await fetch("https://randomuser.me/api/")
    const data= await res.json()
    
    showData(data)
}

randomUser()

const showData= (veri)=>{
    const {picture:{large},name:{title,first,last},email,phone}=veri.results[0]
container.innerHTML=`
<img src="${large}" />
<p>name: ${title} ${first} ${last}</p>
<p>email: ${email}</p>
<p>phone: ${phone}</p>

`  
}



