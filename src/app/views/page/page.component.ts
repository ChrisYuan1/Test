import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';
export interface DialogData{
  value:string,
  person:string
}
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent implements OnInit {
  value:string=""
  person:string=""

  constructor(private router:Router,private dialog:MatDialog ) { }

  ngOnInit(): void {
  }
  // goPage2(){
  //   this.router.navigateByUrl('page2')
  // }
  openDialog():void{
      let reviewerList=['Amy','Xiaohang','Charles','David','Alice','Jack','Taolue']
      let i=Math.floor(Math.random()*reviewerList.length)
      // console.log(i);
      this.person=reviewerList[i]
    // if(reviewerList[reviewerList.indexOf(this.value)]==this.value){
    //   let index=reviewerList.indexOf(this.value)
    //     reviewerList.splice(index,1);
    //     let i=Math.floor(Math.random()*reviewerList.length)
    //     // console.log(i);
    //     this.person=reviewerList[i]
    //     console.log(reviewerList);
    // }

    let dialogRef=this.dialog.open(DialogOverviewComponent,{
      width:'250px',
      data:{name:this.value,person:this.person}
    })
    dialogRef.afterClosed().subscribe(result=>{
      console.log('the dialog was closed');
      this.person=result
    })
  }

}

