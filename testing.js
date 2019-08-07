class Character{

    constructor(name,livePoints,attackPoints){
        this.name=name;
        this.livePoints=livePoints;
        this.attackPoints=attackPoints;
    }


    attack=function(oponent,item){

let newlivePoints=oponent.livePoints-item.attackPointsItem;
oponent.livePoints=newlivePoints;

if(oponent.livePoints<=0){
    update();
    document.getElementById('console').innerHTML=`<p> GAME OVER <br> ${this.name} Won!`;
}
else{
    update();
    document.getElementById('console').innerHTML=`<p> ${this.name} attacking...... with ${item.img}`;
    
}

}
print=function(){
    document.getElementById(this.name).innerHTML=`<h4>Name: ${this.name} <br> Live Points: ${this.livePoints} <br>
    Attack Points: ${this.attackPoints}<br> </h4>`;
}




}


const rei= new Character('rei',100,20);
const uravity= new Character('uravity',100,18);

function update(){
rei.print();
uravity.print();
 }

update();


function Item(name,attackPointsItem,img){
this.name=name;
this.attackPointsItem=attackPointsItem;
this.img=img;
}
const item1= new Item('pokys',20,'<img src="img/owo.jpg" class="item">');
const item2= new Item('uwu face',10,'<img src="img/uwu.png class="item">');
const item3= new Item('bluais',500,'<img src="img/blu.jpg class="item">');

const items=[item1,item2, item3];

function selectItem(){
    let x=Math.floor(Math.random()*items.length);
    return items[x];
}
selectItem();