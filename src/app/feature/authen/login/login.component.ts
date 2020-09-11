import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
// import { Store } from '@ngrx/store';
// import { AppState } from 'src/app/state/app-reducer';
// import { AUTHEN } from '../store/actions/authen.actions';
// import { AuthenRequest, AuthenService } from 'src/app/core/service/authen.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  
  constructor(
    // private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  authen(){
    this.router.navigate(['/menu'])
    // this.store.dispatch(
    //   AUTHEN({
    //     payload: this.request
    //   })
    // )

  }

}
