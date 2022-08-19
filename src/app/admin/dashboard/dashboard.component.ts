import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  data=[
    {
      name:"Movie A", 
      value: 3000
    }
  ];
  dataid= [{
    id:1, 
    name:"Movie A", 
    value: 3000
  }];
  view: [number, number] = [700, 400];
    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Country';
    showYAxisLabel = true;
    yAxisLabel = 'Population';
    colorScheme: string | Color = {
      name:'',
      selectable:true,
      group: ScaleType.Ordinal, 
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

  ngOnInit(): void {
    // import data via HTTP
    this.importData("PopularGenre");
  }

  type=''
  updater$: Subject<boolean> = new Subject();
  updateData(){
    this.importData(this.type);
    this.updater$.next(true);
  }


  importData(type:string){
    if (type=="Purchased") {
      this.type='Purchased';
      this.xAxisLabel='Movie Title';
      this.yAxisLabel='Number Purchased';
      this.dataid = [
        {
          id:1, 
          name:"Movie A", 
          value: 3000
        },      {
          id:2, 
          name:"Movie B", 
          value: 2500
        },
        {
          id:3, 
          name:"Movie C", 
          value: 2400
        },
      ];
    }
    if (type=="PopularGenre") {
      this.type='PopularGenre'
      this.xAxisLabel='Genre'
      this.yAxisLabel='Views'
      this.dataid = [
        {
          id:1, 
          name:"Genre A", 
          value: 3000
        },      {
          id:2, 
          name:"Genre B", 
          value: 2500
        },
        {
          id:3, 
          name:"Genre C", 
          value: 2000
        },
      ]
    }
    this.data.splice(0,this.data.length);
    this.dataid.map((p)=>{

      return this.data.push({ name: p.name.toString(), value: p.value });
    });
    this.data=[...this.data]
  }
  onSelect(event:any) {
    console.log(event);
  }
}
