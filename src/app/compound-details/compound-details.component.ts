import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompoundService } from '../compound.service';

@Component({
  selector: 'app-compound-details',
  templateUrl: './compound-details.component.html',
  styleUrls: ['./compound-details.component.css']
})
export class CompoundDetailsComponent implements OnInit {
  compound: any;
  compoundId: string = '';
  compoundDetails: any;
  editing = false;
  editName = '';
  editDescription = '';

  @Output() compoundUpdated = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private compoundService: CompoundService,
    private router: Router
  ) { }

  ngOnInit():void {
    this.route.paramMap.subscribe(params => {
      const compoundId = params.get('id');
      this.compoundService.getCompoundById(compoundId).subscribe(compound => {
        this.compound = compound;
        this.initializeEditFields();
      });
    });
  }

  startEditing(): void {
    this.editing = true;
    this.initializeEditFields();
  }

  initializeEditFields(): void {
    this.editName = this.compound.name;
    this.editDescription = this.compound.description;
  }

  updateCompound(): void {
    const updatedCompound = {
      name: this.editName,
      description: this.editDescription,
    };

    this.compoundService.updateCompound(this.compound.id, updatedCompound).subscribe(updated => {
      this.compound = updated;
      this.editing = false;
      this.compoundUpdated.emit();
      this.router.navigate(['/']); 
    });
  }

  cancelEditing(): void {
    // Reset editName and editDescription to current values
    this.editName = this.compound.name;
    this.editDescription = this.compound.description;
    this.editing = false;
  }

  navigateBack(): void {
    this.router.navigate(['/']);
  }
}
