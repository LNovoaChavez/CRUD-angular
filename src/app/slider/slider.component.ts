import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [MatCardModule, NgFor],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  slides = [
    {
      title: 'Slide 1',
      description: 'Description for slide 1',
      image: 'assets/slide1.jpg',
      buttonText: 'Learn More'
    },
    {
      title: 'Slide 2',
      description: 'Description for slide 2',
      image: 'assets/slide2.jpg',
      buttonText: 'Discover'
    },
    {
      title: 'Slide 3',
      description: 'Description for slide 3',
      image: 'assets/slide3.jpg',
      buttonText: 'Get Started'
    }
  ];
  
  currentIndex = 0;

  previousSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.slides.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.slides.length - 1) ? 0 : this.currentIndex + 1;
  }
}
