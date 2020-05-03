import { TryServiceService } from './../services/try-service.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReadMoreService } from '../services/read-moreService/read-more.service';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit,OnChanges {

  showModal: boolean;
  readMoreForm: any;
  submitted = false;
  UserData:any;
  constructor(private formBuilder: FormBuilder,
    private subjectReadMore:ReadMoreService,
    private Service:ReadMoreService,
    private tryService:TryServiceService) {
      // this.tryService.getShowMoreData().subscribe(Response=>{
      //   console.log(Response);
        
      // })
      console.log("ID Inside Read More   "+this.tryService.vehicleIdReadMore);
     }
ngOnChanges(){
  console.log("ID Inside Read More   "+this.tryService.vehicleIdReadMore);

}
  show()
  {
    this.showModal = true; // Show-Hide Modal Check
    console.log("ID Inside Read More   "+this.tryService.vehicleIdReadMore);

    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }
  ngOnInit() {
    console.log("ID Inside Read More   "+this.tryService.vehicleIdReadMore);
    this.readMoreForm = this.formBuilder.group({
      //slider: [''],
      FName :[''],
      LName :[''],
      Phone : ['']
    });
    

    // this.tryService.getShowMoreData().subscribe(Response=>{
    //   console.log(Response);
      
    // })
      this.subjectReadMore.getSubjectReadMore().subscribe((_show)=>{
      this.showModal = _show;
    });

    this.Service.getUserData().subscribe(Response=>{
      this.UserData = Response;
    })
}
    // convenience getter for easy access to form fields
    get f() { return this.readMoreForm.controls; }
  

}
