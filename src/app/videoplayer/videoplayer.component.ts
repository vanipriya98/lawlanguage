import { Component, OnInit, ViewChild } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent implements OnInit{

  currentTime: string = '0:00'; // Initialize with a default value
  totalTime: string = '0:00';  
  url: string = '';
  showDropdown: boolean = false;
  selectedSpeed: number = 1;
  playbackSpeeds: number[] = [0.5, 1, 1.5, 2]
  // playbackRate = 1.0;
  @ViewChild('media') media: any;
  api: VgApiService | undefined;

  constructor() {}
  

  // Function to rewind the video by 5 seconds
  rewind() {
    const video = this.media.nativeElement as HTMLVideoElement;
    video.currentTime -= 5;
  }

  forward() {
    const video = this.media.nativeElement as HTMLVideoElement;
    video.currentTime += 5;
  }
  toggleDropdown() {
   
    this.showDropdown = !this.showDropdown;
  }

  changeSpeed() {
    // Update playback speed without using api
    const video = this.media.nativeElement as HTMLVideoElement;
    if (video) {
      video.playbackRate = this.selectedSpeed;
    }

    // Close the dropdown after selecting a speed
    this.toggleDropdown();
  }
  // updatePlaybackRate() {
  //   const video = this.media.nativeElement as HTMLVideoElement;
  //   video.playbackRate = this.playbackRate;
  // }
  // rewind(seconds: number) {
  //   if (this.api) {
  //     const currentTime = this.api.currentTime;
  //     this.api.seekTime(currentTime - seconds);
  //   }
  // }

  // // Function to forward the video by 5 seconds
  // forward(seconds: number) {
  //   if (this.api) {
  //     const currentTime = this.api.currentTime;
  //     this.api.seekTime(currentTime + seconds);
  //   }
  // }

  ngOnInit(): void {
    this.url = "/assets/video.mp4";
    
  }
  
}
