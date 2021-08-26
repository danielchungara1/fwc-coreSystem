import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

    images = [
        { src: '/assets/banner/images/1.jpg' },
        { src: '/assets/banner/images/2.png' },
        { src: '/assets/banner/images/3.png' },
        { src: '/assets/banner/images/4.jpg' },
        { src: '/assets/banner/images/5.jpg' }
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
