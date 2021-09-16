import { DashboardService } from './../../modules/dashboard.service';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent, 
    PostsComponent,
  ],
  imports: [
    CommonModule, 
    RouterModule,
    SharedModule, 
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,

  ],
  providers:[
    DashboardService
  ]
})
export class DefaultModule { }
