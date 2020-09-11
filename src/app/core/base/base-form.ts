import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
export class BaseForm {
    isHideForm: boolean = environment.hideForm
    form: FormGroup
    state: string
    id: number
    constructor(
        public _router:Router,
        public _activeRouter: ActivatedRoute,
        public fb: FormBuilder,
        public location: Location
    ){
        this.form = this.createForm()
        this._activeRouter.params.pipe(
            tap(x => console.log(x)),
            tap(x => x.id ? this.state = 'edit' : this.state = 'add'),
            tap(x => x.id ? this.id = +x.id : this.id = null)
        ).subscribe()
    }


    back(){
        // if(this.state == 'add') {
        //     this._router.navigate(['../'],{relativeTo: this._activeRouter})
        //     return
        // }
        this.location.back()
        // this._router.navigate(['../'],{relativeTo: this._activeRouter})
        
    }

    createForm(){
        return this.fb.group({})
    }
}
