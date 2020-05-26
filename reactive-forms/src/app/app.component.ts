import { Component } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators} from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: "Age of Heroes";
  constructor(private fb: FormBuilder){}

get userName(){
  return this.registrationForm.get('userName');
}

registrationForm = this.fb.group({
  userName: ['',[Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
  password: [''],
  confirmPassword: [''],
  address: this.fb.group({
    city: [''],
    state: [''],
    postalCode: ['']
  })
})

  // registrationForm = new FormGroup({
  //   userName: new FormControl('roysa'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });
  loadApiData()
  {
    this.registrationForm.setValue({
      userName: 'Sarthak',
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'Asansol',
        state: 'WB',
        postalCode: '713301'
      },
    });
  }

}
