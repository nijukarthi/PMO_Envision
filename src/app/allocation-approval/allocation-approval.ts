import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule }    from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule }  from 'primeng/textarea';
import { SelectModule }    from 'primeng/select';
import { DatePickerModule }from 'primeng/datepicker';
import { AccordionModule } from 'primeng/accordion';
import { TableModule }     from 'primeng/table';
import { ToastModule }     from 'primeng/toast';
import { CardModule }      from 'primeng/card';
import { MessageService }  from 'primeng/api';
import { IconFieldModule } from 'primeng/iconfield'; 
import { InputIconModule } from 'primeng/inputicon';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FluidModule } from 'primeng/fluid';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-allocation-approval',
  imports: [CommonModule, FormsModule,
    ButtonModule, InputTextModule, TextareaModule,
    SelectModule, DatePickerModule,
    AccordionModule, TableModule,
    ToastModule, CardModule,IconFieldModule,InputIconModule,DialogModule,ConfirmDialogModule,
    FluidModule,ReactiveFormsModule,MultiSelectModule,CheckboxModule,TagModule],
  templateUrl: './allocation-approval.html',
  styleUrl: './allocation-approval.css',
})
export class AllocationApproval {
allocationApprovalList = [
    {
      initiatedBy: 'Ravi Kumar',
      initiatedOn: '2026-03-25',
      planMonth: 'Apr 2026',
      plantName: 'Chennai',
      plantManager: 'Suresh Reddy',
      status: 'Created'
    },
    {
      initiatedBy: 'Meena Iyer',
      initiatedOn: '2026-03-20',
      planMonth: 'Apr 2026',
      plantName: 'Chennai',
      plantManager: 'Lakshmi Devi',
      status: 'Created'
    },
    {
      initiatedBy: 'Arjun Naik',
      initiatedOn: '2026-03-18',
      planMonth: 'May 2026',
      plantName: 'Trichy',
      plantManager: 'Manjunath H',
      status: 'Reviewed'
    },
    {
      initiatedBy: 'Kiran Patel',
      initiatedOn: '2026-03-22',
      planMonth: 'Apr 2026',
      plantName: 'Pune',
      plantManager: 'Anitha Rao',
      status: 'Created'
    }
  ];

  getSeverity(status: string){
    switch(status){
      case 'Created':
        return 'info';
      
      case 'Reviewed':
        return 'success';
      
      case 'In_Progress':
        return 'warn';

      case 'Completed':
        return 'success';

      default:
        return 'info';
    }
  }
}
