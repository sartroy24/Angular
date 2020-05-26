import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-forms-tutorial';
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  userModel = new User('Sarthak', 'rob@test.com', 9093086421, 'default', 'morning',true);
  errorMsg = '';

  constructor(private _enrollmentService : EnrollmentService){}
  submitted = false;
  validateTopic(value){
    if(value === 'default'){
      this.topicHasError = true;
    }
    else{
      this.topicHasError = false;
    }
  }
  onSubmit(userForm){
    console.log(userForm);
    
    // this.submitted = true;
    // this._enrollmentService.enroll(this.userModel)
    //   .subscribe(
    //     data => console.log('Success !', data),
    //     error => this.errorMsg = error.statusText
        
      
    
  }
}
