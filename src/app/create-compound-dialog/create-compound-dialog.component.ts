import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-compound-dialog',
  templateUrl: './create-compound-dialog.component.html',
  styleUrls: ['./create-compound-dialog.component.css']
})
export class CreateCompoundDialogComponent {
  compoundForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateCompoundDialogComponent>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
    ) { 
    this.compoundForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });

  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  createCompound(): void {
    if (this.compoundForm.valid) {
      const compoundData = this.compoundForm.value;
      this.dialogRef.close(compoundData);
    } else {
      console.log('Form is invalid. Please fill out all required fields.');
      this.snackBar.open('Please fill out all required fields.', 'Close', {
        duration: 3000
      });
    }
  }
}
