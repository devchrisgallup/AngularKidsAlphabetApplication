import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContentComponent implements OnInit {

  constructor(public ref: ChangeDetectorRef) {

   }

  ngOnInit() {

  }

  // audio files
  private a = new Audio('./assets/a.m4a');
  private b = new Audio('./assets/b.m4a');
  private c = new Audio('./assets/c.m4a');
  private d = new Audio('./assets/d.m4a');
  private e = new Audio('./assets/e.m4a');
  private f = new Audio('./assets/f.m4a');
  private g = new Audio('./assets/g.m4a');
  private h = new Audio('./assets/h.m4a');
  private i = new Audio('./assets/i.m4a');
  private j = new Audio('./assets/j.m4a');
  private k = new Audio('./assets/k.m4a');
  private l = new Audio('./assets/l.m4a');
  private m = new Audio('./assets/m.m4a');
  private n = new Audio('./assets/n.m4a');
  private o = new Audio('./assets/o.m4a');
  private p = new Audio('./assets/p.m4a');
  private q = new Audio('./assets/q.m4a');
  private r = new Audio('./assets/r.m4a');
  private s = new Audio('./assets/s.m4a');
  private t = new Audio('./assets/t.m4a');
  private u = new Audio('./assets/u.m4a');
  private v = new Audio('./assets/v.m4a');
  private w = new Audio('./assets/w.m4a');
  private x = new Audio('./assets/x.m4a');
  private y = new Audio('./assets/y.m4a');
  private z = new Audio('./assets/z.m4a');

  // innerHTML
  public Adisplay = 'A'; 

  // determin which value was passed to 
  // play the correct sound
  processData(item) {
    if (item == 'a'){
      this.a.play();
      this.Adisplay = "<img src='./assets/img/apple.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000);
    } else if (item == 'b') {
      this.b.play(); 
    } else if (item == 'c') {
      this.c.play(); 
    } else if (item == 'd') {
      this.d.play(); 
    } else if (item == 'e') {
      this.e.play(); 
    } else if (item == 'f') {
      this.f.play(); 
    } else if (item == 'g') {
      this.g.play(); 
    } else if (item == 'h') {
      this.h.play(); 
    } else if (item == 'i') {
      this.i.play(); 
    } else if (item == 'j') {
      this.j.play(); 
    } else if (item == 'k') {
      this.k.play(); 
    } else if (item == 'l') {
      this.l.play(); 
    } else if (item == 'm') {
      this.m.play(); 
    } else if (item == 'n') {
      this.n.play(); 
    } else if (item == 'o') {
      this.o.play(); 
    } else if (item == 'p') {
      this.p.play(); 
    } else if (item == 'q') {
      this.q.play(); 
    } else if (item == 'r') {
      this.r.play(); 
    } else if (item == 's') {
      this.s.play(); 
    } else if (item == 't') {
      this.t.play(); 
    } else if (item == 'u') {
      this.u.play(); 
    } else if (item == 'v') {
      this.v.play(); 
    } else if (item == 'w') {
      this.w.play(); 
    } else if (item == 'x') {
      this.x.play(); 
    } else if (item == 'y') {
      this.y.play(); 
    } else if (item == 'z') {
      this.z.play(); 
    } else {
      console.log('Opps! Looks like there was a coding error, sorry.'); 
    }
  }
}
