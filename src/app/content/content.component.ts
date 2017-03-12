import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // audio files
  private a = new Audio('app/audio/a.m4a');
  private b = new Audio('app/audio/b.m4a');
  private c = new Audio('app/audio/c.m4a');
  private d = new Audio('app/audio/d.m4a');
  private e = new Audio('app/audio/e.m4a');
  private f = new Audio('app/audio/f.m4a');

  // determin which value was passed to 
  // play the correct sound
  processData(item) {
    if (item == 'a'){
      this.a.play();
    } else if (item == 'b') {
      this.b.play(); 
    } else if (item == 'c') {
      this.c.play(); 
    } else if (item == 'd') {
      this.d.play(); 
    } else if (item == 'e') {
      this.e.play(); 
    } else if (item ='f') {
      this.f.play(); 
    } else {
      console.log('Opps! Looks like there was a coding error, sorry.'); 
    }
  }
}
