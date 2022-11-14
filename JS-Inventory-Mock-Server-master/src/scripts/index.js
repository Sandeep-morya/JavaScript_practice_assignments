//<<----------- Selectors & Variables ----------->>
const url=`https://cryptic-caverns-87011.herokuapp.com/products`;
getData(url);

const add_product=document.getElementById('add_product');
const container=document.getElementById('container');
//<<----------- Append in Container Function ----------->>

const displayData=(array)=>{
    container.innerHTML=null
    array.forEach((e) => {
        //--> Creating Elements
        let item=document.createElement('div');
        let button_div=document.createElement('div');
        let img=document.createElement('img');
        let h4=document.createElement('h4');
        let p_date=document.createElement('span');
        let p_price=document.createElement('span');
        let desc=document.createElement('span');
        let remove_item=document.createElement('button');
        let update_price=document.createElement('button');

        //--> Classes
        item.className='item';
        p_price.className='product_price';
        p_date.className='product_delivery';
        item.className='item',
        remove_item.className='remove_item';
        update_price.className='update_price';
        button_div.className='button_div'

        //--> values
        img.src=e.image;
        h4.textContent=e.name;
        p_price.textContent=+(e.price);
        p_date.textContent=e.delivery;
        desc.textContent=e.description;
        remove_item.textContent='Remove';
        update_price.textContent='Update Price';

        //--> append
        button_div.append(remove_item,update_price);
        item.append(img,h4,p_price,p_date,desc,button_div)
        container.append(item);

        //-->funcionlity
        remove_item.onclick=()=>{
            deleteData(e.id);
        }
        update_price.onclick=()=>{
            let x=prompt('Enter New Price')
            let obj={price:x};
            updateData(obj,e.id);
        }
    });
    
}

async function getData(url){
    let temp=await fetch(url);
    let res=await temp.json();
    displayData(res)
    // console.log(res)  
}


add_product.onclick=()=>{
    //----> ID's
    const name=document.getElementById('name').value;
    const price=document.getElementById('price').value;
    const description=document.getElementById('description').value;
    const delivery=document.getElementById('delivery').value;
    const image=document.getElementById('image').value;
    const id=Math.floor(Math.random()*1000000000000)+name;
    let obj={id,name,price,description,delivery,image}
    sendData(obj);
};

async function sendData(data){
    await fetch(url,{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    });
    getData(url);
}
async function updateData(data,id){
    await fetch(`${url}/${id}`,{
        method:'PATCH',
        body:JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    });
    getData(url);
}

async function deleteData(id){
    await fetch(`${url}/${id}`,{
        method:'DELETE',
    });
    getData(url);
}



document.getElementById('sort-low-to-high').onclick=()=>{
    getData(`${url}?_sort=price&_order=asc`)
}
document.getElementById('sort-high-to-low').onclick=()=>{
    getData(`${url}?_sort=price&_order=desc`)
}
document.getElementById('greater-than').onclick=()=>{
    getData(`${url}?price_gte=4001`)
}
document.getElementById('less-than').onclick=()=>{
    getData(`${url}?price_lte=4000`)
}

