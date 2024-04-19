import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';


@Injectable({
  providedIn: 'root'
})
export class GeoprocessamentoService {

  constructor(private readonly http: HttpClient) { }


  getLocalizacaoNavegador() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);
        }
      },
        (error) => console.log(error));
    }
  }

  getEnderecoPorCoordenadas(latitude: number, longitude: number) {

    this.http.get(environment.apiURL, { params: { latitude, longitude } }).subscribe(data => {
      console.log(data);
    });
  }
}
