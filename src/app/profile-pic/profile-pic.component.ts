import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.css']
})
export class ProfilePicComponent implements OnInit {

  id: any;
  profilePic: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.id = sessionStorage.getItem('customerId');
  }

  onFileSelection(event){
    this.profilePic = event.target.files[0];
  }

  upload(){
    let formData: FormData = new FormData();
    formData.append('id', this.id);
    formData.append('profilePic',this.profilePic)

    this.profileService.uploadPic(formData).subscribe(data=>{
  
    })
  }

  
}
