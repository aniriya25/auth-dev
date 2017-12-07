import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from './../global/global.module';
import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './components/training/training.component';

@NgModule({
  imports: [
    CommonModule,
    TrainingRoutingModule,
    GlobalModule
  ],
  declarations: [TrainingComponent]
})
export class TrainingModule { }
