// const boxes = [...document.querySelectorAll(".box")];

// boxes.forEach(box => {
//     box.addEventListener("click", (e)=>{
//         console.log(e.target.dataset);
//     })
// })


const lis = [...document.querySelectorAll("ul li")]

lis.forEach(li => {
    li.addEventListener("click", (e)=> {
        console.log(e.target.innerText);
    })
})
