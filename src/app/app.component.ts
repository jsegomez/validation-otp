import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { CuscaOtpComponent } from 'cusca-otp';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private dialog = inject(MatDialog);

  openDialog():void{
    const dialog = this.dialog.open(CuscaOtpComponent,{
      autoFocus: false
    });
  }
}
