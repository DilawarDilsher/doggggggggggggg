class Food {
    constructor(){
 var foodStock, lastFed;
 var getFoodStock, updateFoodStock, deductFoodstock ;
        
    }

    preload(){
        milk_Img=loadImage("images/Milk.png");
    }

    display(){
        feed=createButton("Feed The Good Doggy");
        feed.position(700,95);
        feed.mousePressed(feedDog);

        addFood=createButton("Add Food");
        addFood.position(800,95);
        addFood.mousePressed(addFoods);
        
        fill(255,255,254);
        textSize(15);
        if(lastFed>=12){
            text("Last Feed:"+lastfeed%12+"pm",350,30);
        }else if(lastFed==0){
            text("Last Fed:12 AM",350,30);
        }else{
            text("Last Feed:"+ lastFed + "AM",350,30);
        }
        
    }

    function feedDog(){
       feedDog.addImage(happyDog);
       
       foodObl.updateFoodStock(foodObj.getFoodStock()-1);
       database.ref('/').update({
           Food:foodObj.getFoodStock(),
           FeedTime:hour()
       })
    }

}