import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img:string = "";
  @Output() loaded = new EventEmitter<string>();
  
  defaulError = "../../assets/images/default-featured-image.png";

  constructor( ) { 
    //before render
    //
    console.log('constructor', 'imgValue =>', this.img);    
  }
  
  ngOnInit(): void {
  }


  imgError() {
    this.img = this.defaulError;
  }

  imgLoaded() {
    console.log("Loaded");
    this.loaded.emit(this.img);
    
  }

}
