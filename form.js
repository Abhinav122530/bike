class Form {
constuctor (){
this.input=createInput("Name");
this.button=createButton('Play')
this.greeting=createElement('h2')
this.title=createTitle('h2');




}
handleElementPosition(){
this.input.position(width/2-110,height/2-80);
this.button.position(width/2-90,height/2-20);
this.greeting.position(width/2-300,height/2-100);
this.title.position(800,0);
}


handleElementStyle(){
this.input.class("customInput");
this.button.class("customButton");
this.greeting.class("greeting");
}

display(){
    //this.title.html("BikeRacingGame")
    this.handleElementPosition();
    this.handleElementStyle();
    
    
    }




}