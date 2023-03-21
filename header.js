const itemData = [
    {
        index: '01',
        name: 'Green Garland',
        image: 'green.jpg',
        des: 'The frock is a lovely shade of Royal green with a add-on tropical vibe to it, with a subtle sheen to the fabric that catches the light as the wearer moves. The material is lightweight and breathable, perfect for warm weather. '
    },
    {
        index: '02',
        name: 'Afro Sapphire',
        image: 'blue.jpg',
        des: 'This piece is made of a luxurious sapphire blue fabric that shimmers in the light. Its a rich, deep hue that is both eye-catching and sophisticated. The dress has a fitted bodice that is accentuated by a sweetheart neckline, which is both feminine and flattering.'
    },
    {
        index: '03',
        name: 'summer tee',
        image: 'red.jpg',
        des: "Our vibrant and comfortable women's summer t-shirt, perfect for any warm-weather occasion! Made with a lightweight, breathable fabric in a bold shade of red, this t-shirt is sure to turn heads."
    }
]

//assigning the next button  (the next buttton image)
const nxtBtn = document.querySelector('.nxt_button')

//creating variables and assigning values for it
let smlImgContainer = document.querySelector('.small_img_container');
let smlImg = document.querySelector('.small_img');
let itemNo = document.querySelector('.item_no');


let itemImgContainer = document.querySelector('.item_img_container');
let itemImg = document.querySelector('.item_img');
let backgroungImg = document.querySelector('.background_img');

let itemDetail = document.querySelector('.item_details');
let itemName = document.querySelector('.item_name');
let itemDescription = document.querySelector('.item_description');

//creating a variable, This is used to keep track of the item number that has been clicked on.
let currentItem = 0;

//createing an event listener for when the user clicks on the next button, which will incrementally increase the value of currentItem and set it back to 0 if there are no more items in the list.
nxtBtn.addEventListener('click', () =>{

    if(currentItem >= itemData.length - 1){
        currentItem = 0;
    }else{
        currentItem++;
    }

    itemNo.innerHTML = itemData[currentItem].index;
    
    // adding the animation "slide" for the left and right side image on each next clicks 
    smlImgContainer.classList.add('slide');
    itemImgContainer.classList.add('slide');

    //classList is being utilized to change both slide classes at once with setTimeout().
    setTimeout(() => {
        //displays the name and description of the selected item. 
       itemName.innerHTML = itemData[currentItem].name;
       itemDescription.innerHTML = itemData[currentItem].des;

       //display the same images of the selected item on the screen.
       smlImg.src = itemImg.src = backgroungImg.src = `img/${itemData[currentItem].image}`
    }, 500);

    //the animantion ending
    setTimeout(() =>{
        smlImgContainer.classList.remove('slide');
        itemImgContainer.classList.remove('slide');
    }, 1000);
    
})
