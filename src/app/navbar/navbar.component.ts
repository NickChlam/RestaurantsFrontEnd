import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() searchData = new EventEmitter();
  constructor(private dataService: DataService) { }

  searchString: string = ''
  ngOnInit() {
  }


  search(str: string) {
    console.log(this.searchString);
    this.dataService.GetSearch(str).subscribe( data => {
      this.searchData.emit(data);
    }, err => {
      console.log(err.status)
    });
  }

}
