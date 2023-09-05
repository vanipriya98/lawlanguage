import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox';
import {ProgressBarMode, MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import{ MatSelectModule} from '@angular/material/select'
const MaterialComponents=[
  MatButtonModule,
  MatFormFieldModule,
 MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
 MatProgressBarModule,
MatIconModule,
MatSelectModule]


@NgModule({
 
  imports: [MaterialComponents],
  exports:[MaterialComponents]



})
export class MaterialModule { }
