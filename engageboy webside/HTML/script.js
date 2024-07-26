let branch = document.querySelectorAll('.branch');
let count = 0;
branch.forEach(
    (branch,index) => {
        branch.style.left = `${index*100}%`
    }
)
let prev = () => {
    count--
    if(count<0){
        count = branch.length-1
    }
    image()
}
let next = () => {
    count++
    if(count>branch.length-1){
        count = 0
    }
    image()
}
let image = () => {
    branch.forEach(
        (branch) => {
            branch.style.transform = `translateX(-${count*100}%)`
        }
    )
}