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
  public Bdisplay = 'B'; 
  public Cdisplay = 'C'; 
  public Ddisplay = 'D'; 
  public Edisplay = 'E'; 
  public Fdisplay = 'F'; 
  public Gdisplay = 'G'; 
  public Hdisplay = 'H'; 
  public Idisplay = 'I'; 
  public Jdisplay = 'J'; 
  public Kdisplay = 'K'; 
  public Ldisplay = 'L'; 
  public Mdisplay = 'M'; 
  public Ndisplay = 'N'; 
  public Odisplay = 'O'; 
  public Pdisplay = 'P'; 
  public Qdisplay = 'Q'; 
  public Rdisplay = 'R'; 
  public Sdisplay = 'S'; 
  public Tdisplay = 'T'; 
  public Udisplay = 'U'; 
  public Vdisplay = 'V'; 
  public Wdisplay = 'W'; 
  public Xdisplay = 'X'; 
  public Ydisplay = 'Y'; 
  public Zdisplay = 'Z';  

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
      this.Bdisplay = "<img src='./assets/img/banana.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000);
    } else if (item == 'c') {
      this.c.play();
      this.Cdisplay = "<img src='./assets/img/cat.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000); 
    } else if (item == 'd') {
      this.d.play();
      this.Ddisplay = "<img src='./assets/img/dog.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000); 
    } else if (item == 'e') {
      this.e.play(); 
      this.Edisplay = "<img src='./assets/img/elephant.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000); 
    } else if (item == 'f') {
      this.f.play();
      this.Fdisplay = "<img src='./assets/img/family.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000);  
    } else if (item == 'g') {
      this.g.play(); 
      this.Gdisplay = "<img src='./assets/img/goat.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000); 
    } else if (item == 'h') {
      this.h.play(); 
      this.Hdisplay = "<img src='./assets/img/horse.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000); 
    } else if (item == 'i') {
      this.i.play(); 
      this.Idisplay = "<img src='./assets/img/igloo.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000); 
    } else if (item == 'j') {
      this.j.play(); 
      this.Jdisplay = "<img src='./assets/img/jacket.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000); 
    } else if (item == 'k') {
      this.k.play(); 
      this.Kdisplay = "<img src='./assets/img/boy.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000); 
    } else if (item == 'l') {
      this.l.play(); 
      this.Ldisplay = "<img src='./assets/img/legs.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000); 
    } else if (item == 'm') {
      this.m.play(); 
      this.Mdisplay = "<img src='./assets/img/man.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000); 
    } else if (item == 'n') {
      this.n.play(); 
      this.Ndisplay = "<img src='./assets/img/nut.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000); 
    } else if (item == 'o') {
      this.o.play(); 
      this.Odisplay = "<img src='./assets/img/open.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000); 
    } else if (item == 'p') {
      this.p.play(); 
      this.Pdisplay = "<img src='./assets/img/pop.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000); 
    } else if (item == 'q') {
      this.q.play(); 
      this.Qdisplay = "<img src='./assets/img/quilt.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000); 
    } else if (item == 'r') {
      this.r.play(); 
      this.Rdisplay = "<img src='./assets/img/run.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000); 
    } else if (item == 's') {
      this.s.play(); 
      this.Sdisplay = "<img src='./assets/img/stop.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000); 
    } else if (item == 't') {
      this.t.play(); 
      this.Tdisplay = "<img src='./assets/img/trump.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 3000); 
    } else if (item == 'u') {
      this.u.play(); 
      this.Udisplay = "<img src='./assets/img/up.png' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000); 
    } else if (item == 'v') {
      this.v.play(); 
      this.Vdisplay = "<img src='./assets/img/violin.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000); 
    } else if (item == 'w') {
      this.w.play(); 
      this.Wdisplay = "<img src='./assets/img/whale.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000); 
    } else if (item == 'x') {
      this.x.play(); 
      this.Xdisplay = "<img src='./assets/img/xray.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 3000); 
    } else if (item == 'y') {
      this.y.play(); 
      this.Ydisplay = "<img src='./assets/img/yellow.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000); 
    } else if (item == 'z') {
      this.z.play(); 
      this.Zdisplay = "<img src='./assets/img/zebra.jpg' />";
      setTimeout(() => {
        location.reload(); 
      }, 2000); 
    } else {
      console.log('Opps! Looks like there was a coding error, sorry.'); 
    }
  }
}
