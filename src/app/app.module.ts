// core modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// ngxs
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

// environment
import { environment } from '../environments/environment';

// routing 
import { AppRoutingModule } from './app-routing.module';

// material modules
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 

// compoents
import { AppComponent } from './app.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostNewComponent } from './post/post-new/post-new.component';
import { PostState } from './store/post/post.state';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostNewComponent,
  ],
  imports: [
    // core
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule,
    ReactiveFormsModule,
    // routing 
    AppRoutingModule,
    // material
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    // ngxs module and cofig
    NgxsModule.forRoot([
      PostState
    ], 
      { developmentMode: !environment.production }
    ),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
