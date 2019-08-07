class Character{

constructor(name,livePoints,attackPoints){
    this.name=name;
    this.livePoints=livePoints;
    this.attackPoints=attackPoints;
}

attack=function(oponent){
let 
newlivePoints=oponent.livePoints-this.attackPoints;
document.getElementById('console').innerHTML=`<p> ${this.name} attacking......`;
update();
}

print=function(){
 document.getElementById(this.name).innerHTML=`<h4>Name: ${this.name} Live Points: ${this.livePoints} <br>
 Attack Points: ${this.attackPoints}<br> </h4>`;

}

}

const toad= new Character('Toad',100,20);
const yoshi= new Character('Yoshi',100,18);

function update(){
    toad.print();
    yoshi.print();
}

update();