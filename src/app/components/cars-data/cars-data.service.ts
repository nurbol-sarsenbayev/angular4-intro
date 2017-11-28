import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs';

@Injectable()
export class CarsDataService {

    private API = 'http://localhost:3000/cars'

    constructor(private http: Http) {}

    getCars(): Observable<Common.Car[]> {
        return this.http.get(this.API)
            .map((response: Response) => response.json());
    }

    getCar(id: number): Observable<Common.Car> {
        return this.http.get(`${this.API}/${id}`)
            .map((response: Response) => response.json());
    }

    addCar(name: string, color: string, year: number): Observable<Common.Car> {
        return this.http.post(this.API, { 
            name, color, year
        }).map((response: Response) => response.json());
    }

    editCar(car: Common.Car): Observable<Common.Car> {
        return this.http.put(`${this.API}/${car.id}`, {
            name: car.name,
            color: car.color,
            year: car.year
        }).map((response: Response) => response.json());
    }

    removeCar(id: number) {
        return this.http.delete(`${this.API}/${id}`)
            .map((response: Response) => response.json());
    }

    getEmptyCar(): Common.Car {
        return {
            id: null,
            name: "",
            color: "",
            year: null
        };
    }

    cloneCar(car: Common.Car): Common.Car {
        return {
            id: car.id,
            name: car.name,
            color: car.color,
            year: car.year
        };
    }

}