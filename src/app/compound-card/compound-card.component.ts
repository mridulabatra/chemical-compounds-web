import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CompoundService } from '../compound.service';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CreateCompoundDialogComponent } from '../create-compound-dialog/create-compound-dialog.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-compound-card',
  templateUrl: './compound-card.component.html',
  styleUrls: ['./compound-card.component.css']
})
export class CompoundCardComponent implements OnInit {
  compounds: any[] = [];
  pageSize = 9;
  pageIndex = 0;
  pageSizeOptions: number[] = [6,9,12,15,18];
  currentPage = 1;
  selectedSortOrder: 'asc' | 'desc' = 'asc';
  
  sortOrderOptions = ['asc', 'desc'];

  @Input() filterValue = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private compoundService: CompoundService,
    private router: Router,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.fetchCompounds();
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.fetchCompounds();
  }

  navigateToDetails(compoundId: string): void {
    this.router.navigate(['/details', compoundId]);
  }

  deleteClicked(event: Event, compoundId: string): void {
    // Prevent the click event from bubbling up to the parent element
    event.stopPropagation();
    // deleting the compound with ID compoundId
    this.deleteCompound(compoundId);
  }

  deleteCompound(compoundId: string): void {
    event.stopPropagation();
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Confirm Deletion',
        message: 'Are you sure you want to delete this compound?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.compoundService.deleteCompound(compoundId).subscribe(() => {
          this.fetchCompounds();
        });
      }
    });
  }

  openCreateDialog(): void {
    let dialogWidth = '40vw';

    if (window.matchMedia('(max-width: 768px)').matches) {
      dialogWidth = '100vw';
    }
    const dialogRef = this.dialog.open(CreateCompoundDialogComponent, {
      width: dialogWidth,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.compoundService.createCompound(result).subscribe(newCompound => {
          // Update the compounds array
          this.compounds.unshift(newCompound);
        });
      }
    });
  }

  toggleSortOrder(): void {
    this.selectedSortOrder = this.selectedSortOrder === 'asc' ? 'desc' : 'asc';
    this.sortCompounds();
  }

  sortCompounds(): void {
    if(this.compounds){
      this.compounds.sort((a, b) => {
        const nameA = (a.name || '').toUpperCase();
        const nameB = (b.name || '').toUpperCase();
        if (this.selectedSortOrder === 'asc') {
          return nameA.localeCompare(nameB);
        } else {
          return nameB.localeCompare(nameA);
        }
      });
    }
  }
  
  getSortIcon(): string {
    return this.selectedSortOrder === 'asc' ? 'fa-arrow-up' : 'fa-arrow-down';
  }

  handleCompoundUpdated(): void {
    this.fetchCompounds(); // Update the compounds array after a compound is updated
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.filterValue || changes.selectedSortOrder) {
      this.fetchCompounds();
    }
  }

  private fetchCompounds(): void {
    this.compoundService.getCompounds().subscribe(compounds => {
      this.compounds = compounds;
    });
  }

  isDetailsRoute(): boolean {
    return this.router.url.startsWith('/details');
  }
}


