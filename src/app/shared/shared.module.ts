import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { HttpModule }  from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ValidationOnBlurDirective } from './_directives/validateonblur.directive';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    exports: [
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        ReactiveFormsModule,
        ValidationOnBlurDirective
    ],
    declarations: [ ValidationOnBlurDirective],
    providers: []
})
export class Shared_Module { }
