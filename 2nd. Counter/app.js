// const val = document.querySelector('#span')
// const options = document.getElementsByClassName('btn')
// const dec = options[0];
// const reset = options[1];
// const inc = options[2];
// const input = document.getElementById('input')
// const add = document.querySelector('.add')


// dec.addEventListener('click', function(){
//     val.innerText = Number(val.innerText) - 1
// })

// reset.addEventListener('click', function(){
//     val.innerText = 0
// })

// inc.addEventListener('click', function(){
//     val.innerText = Number(val.innerText) + 1
// })

// add.addEventListener('click', () => {
//     console.log(typeof input.value)
//     val.innerText = Number(val.innerText) + Number(input.value)
// })

let count = 0;
const val = document.querySelector('#span')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            count--
        }else if(styles.contains('increase')){
            count++
        }else if(styles.contains('reset')){
            count = 0
        }
        if(count>0){
            val.style.color = 'lightgreen'
        }
        if(count<0){
            val.style.color = 'red'
        }
        if(count===0){
            val.style.color = 'black'
        }
        val.textContent = count;
        console.log(count)
    })
})
