import { getHtmlTagDefinition } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainchar',
  templateUrl: './mainchar.component.html',
  styleUrls: ['./mainchar.component.css']
})
export class MaincharComponent implements OnInit {
  public anime:any="";
  public nameser=""
  public info=""
  public rating=""
  public imgsrc=""
  
  constructor() { }

  ngOnInit(): void {
  }
  searchForUser(){
    if(this.anime==="Naruto"){
      this.nameser = "Naruto";
      this.imgsrc = `<img src="assets/Naruto.jpg"  width="400" height="300">`
      this.info="The  tale of Naruto UzumakiThe Boy Who Survived is the starting of the story,A true zero to hero story in simple words a boy who has nothing gained everyting"

    }else if(this.anime=="Komi can't communicate"){
      this.nameser = "Komi can't communicate";
      this.imgsrc = `<img src="assets/Komi.jpg"  width="400" height="300">`
      this.info="A budding school romance and freindship movie between Tadako and Kyoko"
    }else if(this.anime=="Eyesheild"){
      this.nameser = "Eyesheild";
      this.imgsrc = `<img src="assets/img3.jpg"  width="400" height="300">`
      this.info="The Boy who escaped bully developed a good running power which helps to get in the amreican football club in school"
    }
    else if(this.anime=="Ace no Diamond"){
      this.nameser = "Ace no Diamond";
      this.imgsrc = `<img src="assets/Ace.jpg"  width="400" height="300">`
      this.info="The group who invested the time at school for baseball a comedy mixed frienship series"
    }
    else if(this.anime=="Iruma"){
      this.nameser = "Iruma";
      this.imgsrc = `<img src="assets/img1.png"  width="400" height="300">`
      this.info="A human to demon king is the story plotline"
    }else{
      this.nameser=""
      this.imgsrc=""
      this.info="Not Found"
    }
    
  }
  

}
