import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Swiper from  'swiper'
import { IVideoContent } from '../../models/video-content.interface';
import { CommonModule } from '@angular/common';
import { DescriptionPipe } from '../../pipes/description.pipe';
import { ImagePipe } from '../../pipes/image.pipe';
@Component({
  selector: 'app-movie-carousel',
  standalone: true,
  imports: [CommonModule,DescriptionPipe,ImagePipe],
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.css'
})
export class MovieCarouselComponent implements OnInit,AfterViewInit{

  @Input() videoContents: IVideoContent[] = [] 
  @Input() title!: string;
@ViewChild('swiperContainer') swiperContainer !: ElementRef
  ngOnInit(): void {
      
  }
  ngAfterViewInit(): void {
      this.initSwiper();
  }

  private initSwiper()
  {
    return new Swiper(this.swiperContainer.nativeElement,
      {
        slidesPerView:3,
        slidesPerGroup:2,
        centeredSlides:true,
        loop:true,
        breakpoints: {
          600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 5,
            centeredSlides: true,
          },
          900: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 5,
            centeredSlides: true,
          },
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 5,
            centeredSlides: false,
          },
          1500: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 5,
            centeredSlides: false,
          },
          1800: {
            slidesPerView: 5,
            slidesPerGroup: 6,
            spaceBetween: 5,
            centeredSlides: false,
          }
        }
      }
    )
  }
}
