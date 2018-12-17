import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  @Input() light: boolean = true;
  @Input() big: boolean = true;
  @Input() center: boolean = false;

  constructor() { }

  ngOnInit() { }

}
