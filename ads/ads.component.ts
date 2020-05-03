import { TryServiceService } from './../services/try-service.service';
import { Component, OnInit, Input,Output ,OnChanges,EventEmitter } from '@angular/core';
import { ReadMoreService } from '../services/read-moreService/read-more.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit, OnChanges {
  FirstInitData:any;
  @Input() FilterData:any;
  vehicleDataReadMore:any;
  @Output() sendVehicleDataReadMore = new EventEmitter<any>();
  constructor(private subjectReadMore: ReadMoreService,
    private tryService: TryServiceService) { }

    ngOnChanges(){
      console.log("Inside ngOnChanges");
      
      this.tryService.getFilterData().subscribe(Response=>{
        console.log(Response);
        this.FirstInitData = Response;
      })
    }

  ngOnInit() {
    this.tryService.getAllCarsData().subscribe(Response=>{
      this.FirstInitData = Response;
      console.log(this.FirstInitData);
    })
    
  }

  showReadMore(vehicleId){
    this.tryService.vehicleIdReadMore = vehicleId;
    console.log(vehicleId);
    // this.tryService.getShowMoreData(vehicleId).subscribe(Response=>{
    //   console.log(Response);
    //   this.vehicleDataReadMore = Response;
      
    //   this.sendVehicleDataReadMore.emit(this.vehicleDataReadMore);
      
    // })
    this.tryService.logEbnElws5a();
    this.subjectReadMore.getSubjectReadMore().next(true);
  
  }
  
}
