import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompoundCardComponent } from './compound-card/compound-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompoundDetailsComponent } from './compound-details/compound-details.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CreateCompoundDialogComponent } from './create-compound-dialog/create-compound-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    CompoundCardComponent,
    CompoundDetailsComponent,
    HeaderComponent,
    FooterComponent,
    CreateCompoundDialogComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    FormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreateCompoundDialogComponent,ConfirmationDialogComponent] 
})
export class AppModule { }
