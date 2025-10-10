import { Component, model, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Shared } from '../../../../../services/shared/shared.module';

@Component({
  selector: 'app-wtg-details',
  imports: [Shared],
  templateUrl: './wtg-details.component.html',
  styleUrl: './wtg-details.component.scss'
})
export class WtgDetailsComponent {
  @ViewChild('dt1') dt1!: Table;
  openWtgDetails = model<boolean>(false);

  wtgDetails = [
    {
      WTG: 'WTG1',
      pp: '03/10/2025',
      pa: '03/10/2025',
      pl: '03/10/2025',
      cp: '03/10/2025',
      ca: '03/10/2025',
      cl: '03/10/2025',
      ip: '03/10/2025',
      ia: '03/10/2025',
      il: '03/10/2025',
      mp: '03/10/2025',
      ma: '03/10/2025',
      ml: '03/10/2025',
      disp: '03/10/2025',
      disa: '03/10/2025',
      disl: '03/10/2025',
      dp: '03/10/2025',
      da: '03/10/2025',
      dl: '03/10/2025',
    },
    {
      WTG: 'WTG2'
    }
  ]

  onGlobalFilter(event: Event){
    const value = (event.target as HTMLInputElement).value;
    this.dt1.filterGlobal(value, 'contains');
  }
}
