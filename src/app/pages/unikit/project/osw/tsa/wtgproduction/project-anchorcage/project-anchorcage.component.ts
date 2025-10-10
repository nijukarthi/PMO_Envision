import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table, TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { Shared } from '../../../../../../../services/shared/shared.module';
import { WtgDetailsComponent } from "../../../wtg-details/wtg-details.component";

@Component({
  selector: 'app-project-anchorcage',
  imports: [Shared, WtgDetailsComponent],
  templateUrl: './project-anchorcage.component.html',
  styleUrl: './project-anchorcage.component.scss'
})
export class ProjectAnchorcageComponent {
  @ViewChild('dt2') dt2!: Table;

  openWtgDetails = false;
  rowExpand = false;

    expandedRowsKeys: { [key: string]: boolean } = {};
    expandedRows: { [key: string]: boolean } = {};
  clusterManager = [
    { name: 'Manager1', code: 'NY' },
    { name: 'Manager2', code: 'RM' },
    { name: 'Manager3', code: 'LDN' },
    { name: 'Manager4', code: 'IST' },
    { name: 'Manager5', code: 'PRS' }
  ];
    projectList = [{
      SlNo: "1",
      Pcode: "P-8001",
      FPD: "India_Renew1_Gadag_KA_300.3MW",
      SiteName: "ReNew-1 Gadag, KN",
      Customer: "Renew",
      Cityinfo: "Gadag",
      uniqueS: "KA-6",
      State: " Karnataka",
      WTGQTY: "3",
      Capacity: "300.3",
      PM: "Oxford Rebello",
      type1: "FTE",
      StateHead: "Srikanth Shanmugam",
      type2: "FTE",
      ConstructionManager: "OM Mishra",
      type3: "FTE",
      machinaclLead: "",
      type4: "FTE",
      StartDate: "01-01-2022",
      CompleteDate: "30-06-2025",
      DetailStatus: "Installation, O&M",
      Status4: "Execution,Service",
      ContractualCoD: "31-03-23",
      ExpectedCoD: "30-06-25",
      ActualCoD: "02-05-25",
      Delay: 763,
      Remarks: "Land delay, RoW, Delay in GSS & EHV Line"
  },
  {
    SlNo: "2",
    Pcode: "P-8002",
    FPD: "India_Renew2_Chandwad_MH_300.3MW",
    SiteName: " ReNew2 Chanwad, MH",
    Customer: "Renew",
    Cityinfo: "Chandwad",
    uniqueS: "MH-5",
    State: " Karnataka",
    WTGQTY: "3",
    Capacity: "151.18",
    PM: "Oxford Rebello",
    type1: "FTE",
    StateHead: "Surendra Panwar",
    type2: "FTE",
    ConstructionManager: "Adil Hussain",
    type3: "DCE",
    machinaclLead: "",
    type4: "",
    StartDate: "01-01-2022",
    CompleteDate: "31-12-2025",
    DetailStatus: "Installation",
    Status4: "Execution",
    ContractualCoD: "31-03-23",
    ExpectedCoD: "30-06-25",
    ActualCoD: "02-05-25",
    Delay: 763,
    Remarks: "Project size reduced to 46"
  },]
  
  valuesofEXP:any = [
    {name:'WTG1'},{name:'WTG2'},{name:'WTG3'},
  ]
  addProjectDialog:boolean = false;
    constructor(private messageService: MessageService){}
  
    ngOnInit(){
  
    }
  
     onRowExpand(event: TableRowExpandEvent) {
          //this.messageService.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
      }
  
      onRowCollapse(event: TableRowCollapseEvent) {
         // this.messageService.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
      }

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
  viewWtgDetails(){
    try {
      this.openWtgDetails = true;
    } catch (error) {
      console.log(error);
    }
  }

  onGlobalFilter(event: Event){
    const value = (event.target as HTMLInputElement).value;
    this.dt2.filterGlobal(value, 'contains');
  }

}
