const inp = document.getElementById('inp')
const searc = document.getElementById('searc')
const defaulttt = document.getElementById('default')
const tableDiv = document.getElementById('tableDiv')

function searchByName() {
    tableDiv.innerHTML = ''
    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        const filterData = db.filter(item => item.title.toLowerCase().startsWith(inp.value.toLowerCase()))
        filterData.map(item =>{
            const box = document.createElement('tr')
            box.className = 'myBox'
            box.innerHTML = `
            <td><img src="${item.image}" alt=""></td>
            <td><h3>${item.title}</h3></td>
            <td><h3>$${item.price}</h3></td>
            <td><button style="background-color: #F039AA; color: white; border: none; width: 60px; height: 30px; margin-right: 20px;" onclick="deleteFromForm(${item.id})">sil</button></td>
            `;
            tableDiv.appendChild(box);
        })
    })
}
searc.addEventListener('click',searchByName)



const Myform = document.getElementById('Myform')
const exampleInputEmail1 = document.getElementById('exampleInputEmail1')
const exampleInputPassword1 = document.getElementById('exampleInputPassword1')


function formPost(e) {
    e.preventDefault()
    axios.post('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts',{
        email: exampleInputEmail1.value,
        possword: exampleInputPassword1.value,
    })
    Myform.reset()
    setTimeout(() =>{
        formData()
    },1000)

}
Myform.addEventListener('submit',formPost)

function formData() {
    tableDiv.innerHTML = ''

    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        db.map(item =>{
            const box = document.createElement('tr')
            box.className = 'myBox'
            box.innerHTML = `
            <td><img src="${item.image}" alt=""></td>
            <td><h3>${item.title}</h3></td>
            <td><h3>$${item.price}</h3></td>
            <td><button style="background-color: #F039AA; color: white; border: none; width: 60px; height: 30px; margin-right: 20px;" onclick="deleteFromForm(${item.id})">sil</button></td>
            `;
            tableDiv.appendChild(box);
        })
    })
}
formData()

function deleteFromForm(id) {
    axios.delete(`https://65685f8d9927836bd974aa4c.mockapi.io/pradacts/${id}`)
    setTimeout(() =>{
        formData()
    },1000)
}

defaulttt.addEventListener('click',formData)



const btnAZ = document.getElementById('btnA-Z')

function sortAZ() {
    tableDiv.innerHTML = ''
    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        const sortData = db.sort((a,b) => a.title.localeCompare(b.title))
        sortData.map(item =>{
            const box = document.createElement('tr')
            box.className = 'myBox'
            box.innerHTML = `
            <td><img src="${item.image}" alt=""></td>
            <td><h3>${item.title}</h3></td>
            <td><h3>$${item.price}</h3></td>
            <td><button style="background-color: #F039AA; color: white; border: none; width: 60px; height: 30px; margin-right: 20px;" onclick="deleteFromForm(${item.id})">sil</button></td>
            `;
            tableDiv.appendChild(box);
        })
    })
}
btnAZ.addEventListener('click',sortAZ)



const btnZA = document.getElementById('btnZ-A')


function sortZa() {
    tableDiv.innerHTML = ''
    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        const sortData = db.sort((a,b) => b.title.localeCompare(a.title))
        sortData.map(item =>{
            const box = document.createElement('tr')
            box.className = 'myBox'
            box.innerHTML = `
            <td><img src="${item.image}" alt=""></td>
            <td><h3>${item.title}</h3></td>
            <td><h3>$${item.price}</h3></td>
            <td><button style="background-color: #F039AA; color: white; border: none; width: 60px; height: 30px; margin-right: 20px;" onclick="deleteFromForm(${item.id})">sil</button></td>
            `;
            tableDiv.appendChild(box);
        })
    })
}
btnZA.addEventListener('click',sortZa)