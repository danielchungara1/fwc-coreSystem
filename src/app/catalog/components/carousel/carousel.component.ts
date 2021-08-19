import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

    images = [
        { src: '/assets/carousel/images/1.jpg' },
        { src: '/assets/carousel/images/2.png' },
        { src: '/assets/carousel/images/3.png' }
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
