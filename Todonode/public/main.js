var start=()=>{
    fetch('http://localhost:3000/karan/')
        .then(d => (
            d.json()
        ))
        .then((data) => {
            data.forEach(v => {
                var l = document.createElement('li')
                l.innerText = v.data;
                l.style.fontSize = '2em'
                var btn = document.createElement('button')
                btn.innerText = 'X'

                btn.style.marginLeft = '5%'
                btn.style.backgroundColor = 'red';
                btn.style.color = 'grey'
                btn.className = 'delete'
                btn.setAttribute('id', v._id)
                l.appendChild(btn);

                list.appendChild(l)
                console.log('fetch')
            })
        })
}

(function(){
    start()
}
)()

var  list = document.getElementById('list')
var k = document.getElementById('todoInput');
console.log(list)
var cross=document.getElementsByClassName('cross');
var v =''
k.addEventListener('keypress',(e)=>{
    if(e.which==13)
    {
        fetch('http://localhost:3000/karan/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ id:Math.floor(Math.random()*100),data:e.target.value})
        })
        .then(d=>{
            start()
        })
    }
})

list.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete'))
    {
        fetch('http://localhost:3000/karan/'+e.target.id,{method:'delete'})
        .then(d=>{
           
        })
    }
})