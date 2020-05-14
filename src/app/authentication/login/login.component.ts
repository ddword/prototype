import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ILoginResponse } from '../../shared/_models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ FormBuilder ]
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  private returnUrl: string;
  private error = '';
  private loading = false;
  private submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    /**
     * redirect to panel if already logged in
     *
     */
    if (this.auth.userTokenValue) {
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    this.createForm();
    /**
     * @params .queryParams['returnUrl'] || '/login' get return url from route parameters or default to '/login'
     */
    // tslint:disable-next-line:no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.email,
          Validators.pattern(/(.+)\@(.+)\.(\w{2,3})+$/),
          Validators.maxLength(254)
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),
          Validators.minLength(8)
        ]
      ]
    });
  }

  public onSubmit(email: string, password: string) {
    this.error = '';
    this.loading = true;

    this.auth.login(email, password)
    .pipe(first())
    .subscribe(
      (data: ILoginResponse ) => {
        this.router.navigate([this.returnUrl], { state: data });
      },
      error => {
        this.error = error;
        this.loading = false;
      });
  }
}
