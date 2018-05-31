import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { ValidationDirecitve } from './validation.directive';
import { ShowErrorsComponent } from './show-errors.component';

@NgModule({
    imports: [
        RouterModule, 
        CommonModule
    ],
    exports: [
        FormsModule,
        CommonModule,
        HttpModule,
        NavComponent,
        ValidationDirecitve,
        ShowErrorsComponent,
    ],
    declarations: [
        NavComponent, 
        ShowErrorsComponent, 
        ValidationDirecitve
    ]

})

export class SharedModule {
  
}