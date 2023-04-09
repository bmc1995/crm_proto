import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  phone: number;
  email: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Joe Shmoe', phone: 18885550255, email: 'example@test.com' },
  { name: 'Clayton Biggsby', phone: 18885550255, email: 'example@test.com' },
  { name: 'Tyrone Biggums', phone: 18885550255, email: 'example@test.com' },
  { name: 'Dave Chappelle', phone: 18885550255, email: 'example@test.com' },
  { name: 'Emporer Palpatine', phone: 18885550255, email: 'example@test.com' },
  { name: 'Supreme Leader', phone: 18885550255, email: 'example@test.com' },
  { name: 'Invader Zim', phone: 18885550255, email: 'example@test.com' },
  { name: 'Garfield Cat', phone: 18885550255, email: 'example@test.com' },
  { name: 'Tom Smith', phone: 18885550255, email: 'example@test.com' },
  { name: 'Jane Doe', phone: 18885550255, email: 'example@test.com' },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'phone', 'email'];
  @Input() dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
