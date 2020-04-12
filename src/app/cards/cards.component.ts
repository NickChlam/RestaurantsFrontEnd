import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  loaded: boolean = false;
  page: number = 1;
  @Input() restaurants: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getAllData().subscribe(data => {
    this.restaurants = data;
    this.loaded = true;
      }, err => {
        // TODO Handle error
        console.log(err)
      });
  }
  randomNum(){
    const random =  Math.floor((Math.random() * 9) + 1);
    const path = '../../assets/' + random.toString() + '.jpg';

    return path;
    }

    next() {
      this.page += 1;

      this.dataService.pageData(this.page, 12).subscribe(data => {
      this.restaurants = data;
        });
    }
    prev() {
      this.page -= 1;
      this.restaurants = [];
      this.dataService.pageData(this.page, 12).subscribe(data => {
      this.restaurants = data;
      });
    }

    createImg(name: string){
      let newName = name.replace(/ /g, "");
      newName = '../../assets/test/' + newName + '.jpg';
      return newName;


    }

}
