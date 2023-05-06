import { Component, OnInit,OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AfterContentInit, ViewChild} from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Map, tileLayer, marker, icon } from 'leaflet';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";

@Component({
  selector: 'app-modallocalisation',
  templateUrl: './modallocalisation.page.html',
  styleUrls: ['./modallocalisation.page.scss'],
})


export class ModallocalisationPage implements OnInit, AfterContentInit {
map:Map;
addr={};
startPos;
userlat;
ionicForm=new FormGroup({
      ville: new FormControl(),
      bsa: new FormControl(),
       porte1: new FormControl(),
       email: new FormControl(),
       emailcommercial: new FormControl(),
       lutexte: new FormControl(),
        porte2: new FormControl(),
         directions: new FormControl(),
      nom: new FormControl()
  });
userlon;
@ViewChild('map') mapElement;
  constructor(private modalCtrl: ModalController,public http: Http,private http1: HttpClient,
              public plt: Platform,
              public router: Router) { }

  ngOnInit() {
      this.geoloc();
      this.addr["0"] = {"title":"McDonald's Matoury", "address":"Zone Terca Matoury, 97351, French Guiana","lat":"4.909881372284727","lon":"-52.32457569262421"};
      this.addr["1"] = {"title":"McDonald's Kourou", "address":"Av. Gaston Monnerville, Kourou 97310, French Guiana","lat":"5.181609351233256","lon":"-52.647295605849784"};
      this.addr["2"] = {"title":"McDonald's Cayenne", "address":"Avenue Galmot Cayenne GF 97300, Av. Galmot, French Guiana","lat":"4.93910684210185","lon":"-52.331204461198425"};
      this.initMap(Object.values(this.addr));
  }
    proxi(lat,lon){
        
    }
    adresstrouvee=false;
    errorMessage;
    chercher(){
    var ville = document.querySelector<HTMLInputElement>("#ville")!.value;
    if(ville != ""){
        /*this.plt.ready().then(() => {
      this.http.get('https://oghuxxw1e6.execute-api.us-east-1.amazonaws.com/dev')
      .pipe(map(res => res.json()))
      .subscribe(restaurants => this.initMap(restaurants));
    });*/
        var data="?q="+ville+"&format=json&addressdetails=1&limit=1&polygon_svg=1";
         this.http1.get('https://nominatim.openstreetmap.org/search'+data).subscribe({
        next: data => {
            if(data && data[0]){
                console.log(data[0]);
                this.adresstrouvee=true;
                this.userlat = data[0]['lat'];
                this.userlon = data[0]['lon'];
                //alert(this.userlat+this.userlon)
                var lieu={ville: data[0]['address']['town']}
                if(this.map) {
  this.map.remove();
}
this.map = new Map('map').setView([this.userlat, this.userlon], 23);
tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
                const customMarkerIcon = icon({
                    iconUrl: '/assets/images/custommarker.png',
                    iconSize: [64, 64], 
                    popupAnchor: [0, -20]
                  });
                  var mytext="c'est ici";
                marker([this.userlat, this.userlon], {icon: customMarkerIcon})
                .bindPopup(`<b>${mytext}</b>`, { autoClose: false })
                .on('click', () => this.router.navigateByUrl('/restaurant'))
              .addTo(this.map).openPopup();

            }           
            },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
        });
            
    }
}

     geoloc(){ // ou tout autre nom de fonction
    function geoSuccess(position) { // Ceci s'exécutera si l'utilisateur accepte la géolocalisation
        var startPos = position;
        var userlat = startPos.coords.latitude;
        var userlon = startPos.coords.longitude;
        //console.log("lat: "+userlat+" - lon: "+userlon);
        document.querySelector<HTMLInputElement>("#userlon")!.innerHTML = userlon;
        document.querySelector<HTMLInputElement>("#userlat")!.innerHTML = userlat;
        //var map = new Map('map').setView([userlat, userlon], 23);
    };
     function geoFail(){ // Ceci s'exécutera si l'utilisateur refuse la géolocalisation
        console.log("refus");
    };
   
    // La ligne ci-dessous cherche la position de l'utilisateur et déclenchera la demande d'accord
    navigator.geolocation.getCurrentPosition(geoSuccess,geoFail);
}
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  ngAfterContentInit(): void {
  
    
  }
  initMap(restaurants) {
      var userlon=document.querySelector<HTMLInputElement>("#userlon")!.innerHTML;
      var userlat=document.querySelector<HTMLInputElement>("#userlat")!.innerHTML;
    this.map = new Map('map').setView([33.6396965, -84.4304574], 23);
    if (userlon.length > 0) {
        this.map.remove();
        this.map = new Map('map').setView([parseFloat(userlat),parseFloat(userlon)], 23);
    }
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    const customMarkerIcon = icon({
      iconUrl: 'assets/images/custom-marker-icon.png',
      iconSize: [64, 64], 
      popupAnchor: [0, -20]
    });

    restaurants.forEach((restaurant) => {
      marker([restaurant.lat, restaurant.lon], {icon: customMarkerIcon})
      .bindPopup(`<b>${restaurant.title}</b>`, { autoClose: false })
      .on('click', () => this.router.navigateByUrl('/restaurant'))
      .addTo(this.map).openPopup();
    });
  }
  confirm() {

    return this.modalCtrl.dismiss(null , 'confirm');
  }
  
}
