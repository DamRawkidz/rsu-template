import { MatPaginator } from '@angular/material/paginator';
import { ViewChild, Directive } from '@angular/core';

@Directive()
export class BaseList {

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    
}