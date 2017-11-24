import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  id: number;
  name: string;
  color: string;
  year: number;
  hash: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.id = +this.route.snapshot.para  ms['id'];
    // this.name = this.route.snapshot.params['name'];
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.name = params['name'];
    });

    this.route.queryParams.subscribe((params: Params) => {
      this.color = params['color'];
      this.year = params['year'];
    });

    this.route.fragment.subscribe(fragment => {
      this.hash = fragment;
    });
  }

  openMazdaPage() {
    this.router.navigate(["/cars", 8, "Mazda"], {
      queryParams: {
        'color': 'silver',
        'year': 1995
      },
      fragment: 'pic2'
    });
  }
}
