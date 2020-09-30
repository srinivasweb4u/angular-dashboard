import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
@Component({
  selector: 'app-dashaboard',
  templateUrl: './dashaboard.component.html',
  styleUrls: ['./dashaboard.component.css']
})
export class DashaboardComponent implements OnInit {
  data: any;

data2= [
  {name:'srinivas',email:'srinivas@gmail.com',age:'24',city:'hyderbad'},
  {name:'srinivas',email:'srinivas@gmail.com',age:'24',city:'hyderbad'},
  {name:'srinivas',email:'srinivas@gmail.com',age:'24',city:'hyderbad'},
  {name:'srinivas',email:'srinivas@gmail.com',age:'24',city:'hyderbad'}
]

// data table 

@ViewChild(DataTableDirective, {static: false})
datatableElement: DataTableDirective;
min: number;
max: number;

dtOptions: DataTables.Settings = {};
//end 
details =[8,13,21,16];
labletext=['IRIS','OMC','CMC','WISE'];
  constructor() {
    this.data = {
      labels:this.labletext ,
      datasets: [
          {
              data: this.details,
              backgroundColor: [
                "#db4d4b",
                "#ddaa00",
                "#5c9df9",
                "#73b587"
            ],
            hoverBackgroundColor: [
              "#db4d4b",
              "#ddaa00",
              "#5c9df9",
              "#73b587"
            ]
          }]    
      };
   }
  
  ngOnInit(): void {
    $.fn['dataTable'].ext.search.push((settings, data, dataIndex) => {
      const id = parseFloat(data[0]) || 0; // use data for the id column
      if ((isNaN(this.min) && isNaN(this.max)) ||
        (isNaN(this.min) && id <= this.max) ||
        (this.min <= id && isNaN(this.max)) ||
        (this.min <= id && id <= this.max)) {
        return true;
      }
      return false;
    });

    this.dtOptions = {
      ajax: 'assets/data.json',
      columns: [{
        title: 'Project',
        data: 'Project'
      }, {
        title: 'Name',
        data: 'Name'
      }, {
        title: 'Email',
        data: 'Email'
      },
      {
        title: 'Functional Profile',
        data: 'FunctionalProfile'
      },
      {
      title: 'Contact',
      data: 'Contact'
    },
    {
      title: 'Location',
      data: 'Location'
    } ]
    };
    console.log(this.dtOptions);
  }

  ngOnDestroy(): void {
    
    // We remove the last function in the global ext search array so we do not add the fn each time the component is drawn
    // /!\ This is not the ideal solution as other components may add other search function in this array, so be careful when
    // handling this global variable
    $.fn['dataTable'].ext.search.pop();
  }

  filterById(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }


}
