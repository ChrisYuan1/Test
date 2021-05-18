import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageComponent } from '../page/page.component';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.less']
})
export class DialogOverviewComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<PageComponent>,@Inject(MAT_DIALOG_DATA) public data:{name:string,person:string}) { }

  ngOnInit(): void {
  }
  onNoClick() :void{
    this.dialogRef.close()
  }
}
