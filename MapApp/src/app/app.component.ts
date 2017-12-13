import { Component } from '@angular/core';
import {MarkerService} from './Services/marker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkerService]
})
export class AppComponent {
  zoom: number = 10;
   lat: number = 24.86;
  lng: number = 67.01;
  // Values
  markerName:string;
  markerLat:string;
  markerLng:string;
  markerDraggable:string;
  
  
  markers: marker[] = [
    {
        name:'Hawksbey',
        lat: 24.8342,
        lng: 66.883,
        draggable: true
    },
    {
        name: 'Turtle Beach',
        lat: 24.9011695,
        lng: 67.1156633,
        draggable: true
    },
    {
        name: 'Company Three',
        lat: 24.8769779,
        lng: 67.0627654,
        draggable: false
    }
  ];
  
  constructor(
    private _markerService:MarkerService){
    this.markers = this._markerService.getMarkers();
  
    
  }
  clickedMarker(marker:marker, index:number){
    console.log('Clicked Marker: '+marker.name+' at index '+index);
  }
  
  mapClicked($event:any){
    console.log('Map Clicked');
    var newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable:false
    }
    
    this.markers.push(newMarker);
  }
  
  markerDragEnd(marker:any, $event:any){
    console.log('dragEnd', marker, $event);
    
    var updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable:false
    }
    
    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;
  }
  
   addMarker(){
    console.log('Adding Marker');
    if(this.markerDraggable == 'yes'){
      var isDraggable = true;
    } else {
      var isDraggable = false;
    }
    
    var newMarker = {
      name:this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable:isDraggable
    }
    
     this.markers.push(newMarker);
    this._markerService.addMarker(newMarker);
  }
  
    removeMarker(marker){
    console.log('Removing Marker...');
    for(var i = 0;i < this.markers.length;i++){
      if(marker.lat == this.markers[i].lat && marker.lng == this.markers[i].lng){
        this.markers.splice(i, 1);
      }
    }
    
    this._markerService.removeMarker(marker);
  }
}




 // Marker Type
  interface marker{
    name?:string;
    lat: number;
    lng: number;
    draggable:boolean;
  }
  

