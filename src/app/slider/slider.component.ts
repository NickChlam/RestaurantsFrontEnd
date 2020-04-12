import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DataService } from '../_services/data.service';

declare var Swiper: any;


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
    // tslint:disable-next-line: no-host-metadata-property
    host: {
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class SliderComponent implements OnInit {

  constructor(private data: DataService ) { }

  @Output() foodType = new EventEmitter();

  isMobile: boolean;
  width:number = window.innerWidth;
  height:number = window.innerHeight;
  mobileWidth:number  = 760;
  slides: number = 8;
  mySwiper: any;


ngOnInit() {
    
    if (this.width > 800 ) { this.isMobile = false
    } else {
      this.isMobile = true;
    }
    if (this.isMobile) {
      
      this.mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 0,
        slidesPerGroup: 4,
       
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
  } else {
    this.mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 9,
      spaceBetween: 0,
      slidesPerGroup: 9,
     
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

  }
}


  onWindowResize(event) {
      this.width = event.target.innerWidth;
      this.height = event.target.innerHeight;
      this.isMobile = this.width < this.mobileWidth;

      if (this.isMobile) {
        this.mySwiper = new Swiper('.swiper-container', {
          slidesPerView: 4,
          spaceBetween: 0,
          slidesPerGroup: 4,

          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      } else {
        this.mySwiper = new Swiper('.swiper-container', {
          slidesPerView: 9,
          spaceBetween: 0,
          slidesPerGroup: 9,

          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });

      }

  }

  filter(filterby: string) {

    // this.data.getFoodType(filterby).subscribe(data => {
    //   this.foodType.emit(data);
    // });

    this.data.getFoodType(filterby).subscribe(data => {
      this.foodType.emit(data);
    });

  }


}
