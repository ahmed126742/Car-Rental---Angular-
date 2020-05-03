import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { PostCarService } from '../services/post-carService/post-car.service';
import { TryServiceService } from './../services/try-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-post-car',
  templateUrl: './post-car.component.html',
  styleUrls: ['./post-car.component.css']
})
export class PostCarComponent implements OnInit {

  showModal: boolean;
  PostCarForm;
  submitted = false;
  carName: any=[];
  colors:any= [ 'Silver',	'Grey',	'Black','White','Blue','Green','Gold','Red','Pink','Purple'];
  selectImage:File=null;
  years:any=[];
  yearsCount:number;
  constructor(private formBuilder: FormBuilder,
     private subject2:PostCarService,
     private service:TryServiceService) { }
  show()
  {
    this.showModal = true; // Show-Hide Modal Check
    
  }
  //Bootstrap Modal Close event
  hide()
  {
    
    this.showModal = false;
  }
  ngOnInit() {
    this.PostCarForm = this.formBuilder.group({
      carmodel: ['', Validators.required],
      color: ['', Validators.required],
      years:[],
      picture: ['', Validators.required],
      price: ['', Validators.required],
      doors: [],
      AirBag: [false],
      Gas :[false], 
      BabySeat : [false],
      CDPlayer :[false],
      AirCondition :[false],
      SunRoof :[false],
      SpareWheel :[false],
      Driver :[false]
    });

    //Fill dropDown List of car Type and Car color
this.service.getCarName().subscribe(Response=>{
  this.carName=Response;
})

    this.subject2.getSubject2().subscribe((_show)=>{
      this.showModal = _show;
    });

    this.yearsCount = new Date().getFullYear() -2000;
    for (let index = 0; index <this.yearsCount; index++) {
   this. years[index] = new Date().getFullYear() -index;
    
    }

}
    // convenience getter for easy access to form fields
    get f() { return this.PostCarForm.controls; }
    onSubmit() {
      this.PostCarForm.value.userId = this.getUserId().LoggedInUserId;
      this.subject2.postData(this.PostCarForm.value).subscribe(Response=>{
//         const im = new FormData();
//           im.append('image',this.selectImage,this.selectImage.name)
          
// this.subject2.postImage(im).subscribe(Response=>{
//   alert("Saved Successfully");
// },err=>{console.log(err);
// })
//         console.log(Response);
        
      },err=>{
        console.log(err);
        
        alert("Error Submitting Form ,Didn't Saved Please Try Again");
      })
      console.log(this.PostCarForm.value); 
      this.submitted = true;
        // stop here if form is invalid
        if (this.PostCarForm.invalid) {
            return;
          }
          if(this.submitted)
          {
            this.showModal = false;
// this.subject2.postData(this.PostCarForm.value).subscribe(Response=>{
//   alert("Saved Successfully")
// },err=>{
//   alert("Didn't Saved Please Try Again")
// })
          }
}

onFileSelected(event){
  // console.log(event);
  
this.selectImage = <File> event.target.files[0];
console.log(this.selectImage);

}
  
  getUserId(){
    let token = localStorage.getItem('token');
    if(!token) return null;

    return new JwtHelperService().decodeToken(token);
  }

}
