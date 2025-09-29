import { Component } from '@angular/core';
import { Shared } from '../../../services/shared/shared.module';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-planning-manager',
  imports: [Shared],
  templateUrl: './planning-manager.component.html',
  styleUrl: './planning-manager.component.scss'
})
export class PlanningManagerComponent {

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
}]
addProjectDialog:boolean = false;
states = [
    { label: "Andhra Pradesh", value: "Andhra Pradesh" },
    { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
    { label: "Assam", value: "Assam" },
    { label: "Bihar", value: "Bihar" },
    { label: "Chhattisgarh", value: "Chhattisgarh" },
    { label: "Goa", value: "Goa" },
    { label: "Gujarat", value: "Gujarat" },
    { label: "Haryana", value: "Haryana" },
    { label: "Himachal Pradesh", value: "Himachal Pradesh" },
    { label: "Jharkhand", value: "Jharkhand" },
    { label: "Karnataka", value: "Karnataka" },
    { label: "Kerala", value: "Kerala" },
    { label: "Madhya Pradesh", value: "Madhya Pradesh" },
    { label: "Maharashtra", value: "Maharashtra" },
    { label: "Manipur", value: "Manipur" },
    { label: "Meghalaya", value: "Meghalaya" },
    { label: "Mizoram", value: "Mizoram" },
    { label: "Nagaland", value: "Nagaland" },
    { label: "Odisha", value: "Odisha" },
    { label: "Punjab", value: "Punjab" },
    { label: "Rajasthan", value: "Rajasthan" },
    { label: "Sikkim", value: "Sikkim" },
    { label: "Tamil Nadu", value: "Tamil Nadu" },
    { label: "Telangana", value: "Telangana" },
    { label: "Tripura", value: "Tripura" },
    { label: "Uttar Pradesh", value: "Uttar Pradesh" },
    { label: "Uttarakhand", value: "Uttarakhand" },
    { label: "West Bengal", value: "West Bengal" },
    { label: "Delhi", value: "Delhi" }
  ];

  cityStateMap: { [key: string]: string } = {
    "chennai": "Tamil Nadu",
    "coimbatore": "Tamil Nadu",
    "salem": "Tamil Nadu",
    "hyderabad": "Telangana",
    "bengaluru": "Karnataka",
    "mysuru": "Karnataka",
    "mumbai": "Maharashtra",
    "pune": "Maharashtra",
    "delhi": "Delhi", // (if including UTs)
    "kolkata": "West Bengal",
    "patna": "Bihar",
    "ranchi": "Jharkhand",
    "lucknow": "Uttar Pradesh"
    // 👉 Add more as needed
  };
  selectedState: any = [];

  zoneOptions:any = [
    {label:'North',value:'North'},
    {label:'South',value:'South'}
  ]
  selectedZone:any = ""
  PMOptions:any = [
    {label:'PM 1', value:'PM 1'},
    {label:'PM 2', value:'PM 2'},
    {label:'PM 3', value:'PM 3'},
    {label:'PM 4', value:'PM 4'}
  ]
  selectedProjectManager:any = "";
  BDOptions:any = [
    {label:'BD 1', value:'BD 1'},
    {label:'BD 2', value:'BD 2'},
    {label:'BD 3', value:'BD 3'},
    {label:'BD 4', value:'BD 4'}
  ]
  selectedBDManager:any = "";
  solutionOptions:any = [
    {label:'solution Manager 1', value:'solution Manager 1'},
    {label:'solution Manager 2', value:'solution Manager 2'},
    {label:'solution Manager 3', value:'solution Manager 3'},
    {label:'solution Manager 4', value:'solution Manager 4'}
  ]
  selectedSolutionManager:any = "";
  stateHeadOptions:any = [
    {label:'State Head 1', value:'State Head 1'},
    {label:'State Head 2', value:'State Head 2'},
    {label:'State Head 3', value:'State Head 3'},
    {label:'State Head 4', value:'State Head 4'}
  ]
  selectedStateHead:any = "";
  siteManagerOptions:any = [
    {label:'Site Manager 1', value:'Site Manager 1'},
    {label:'Site Manager 2', value:'Site Manager 2'},
    {label:'Site Manager 3', value:'Site Manager 3'},
    {label:'Site Manager 4', value:'Site Manager 4'}
  ]
  selectedSiteManager:any = "";

  multipleSPVOptions:any = [
    {label:'Yes', value:'Yes'},
    {label:'No', value:'No'}
  ]
  selectedMultpleSPV:any = "Yes";
  diableStateDD:boolean = false;
  projectHeader:any = "Step:1 Create Project";
  isProjectCreated:boolean = false;
  step1:boolean = true;
  spvList:any =  [2];
  spvOptions:any = [];
  projectQTY:any = "";
  pCode:any = "";
  WTGOptions:any = [];
 capacityOptions:any = [
      {label:'2.5', value:'2.5'},
      {label:'3.5', value:'3.5'},
      {label:'5', value:'5'},
 ]
 towerOptions:any = [
      {label:'120HH-304T', value:'120HH-304T'},
      {label:'140HH-474T', value:'140HH-474T'},
      {label:'130HH-420T', value:'130HH-420T'},
      {label:'140HH-353T', value:'140HH-353T'}
 ]
 gridOptions:any = [
      {label:'STU', value:'STU'},
      {label:'CTU', value:'CTU'}
   
 ]
 ppaOptions:any = [
      {label:'Auction', value:'Auction'},
      {label:'C&I', value:'C&I'}
   
 ]
 spvForm:any;
 errorMessage:any = "";
 disableAddBtn:boolean = false;
 cityInfo:any = "";
  constructor(private fb: FormBuilder,private messageService: MessageService){}

  ngOnInit(){

    this.spvForm = this.fb.group({
      wtgs: this.fb.array([])   // FormArray for rows
    });
    
    this.addRow(true);
  }

   get wtgs(): FormArray {
    return this.spvForm.get('wtgs') as FormArray;
  }

  getRowFormGroup(index: number): FormGroup {
  return this.wtgs.at(index) as FormGroup;
}

  addRow(isFirst: boolean = false) {

     /* if (this.wtgs.length >= this.projectQTY && this.projectQTY > 0) {
    this.errorMessage = `You can add only ${this.projectQTY} rows based on Project QTY.`;
    return;
  } */

    const row = this.fb.group({
      spv: [{ value: null, disabled: !isFirst }, Validators.required],
      wtgType: [{ value: null, disabled: !isFirst }, Validators.required],
      capacity: [{ value: null, disabled: !isFirst }, Validators.required],
      tower: [{ value: null, disabled: !isFirst }, Validators.required],
      grid: [{ value: null, disabled: !isFirst }, Validators.required],
      ppa: [{ value: null, disabled: !isFirst }, Validators.required],
      qty: [null, Validators.required] 
    });

    row.get('qty')?.valueChanges.subscribe(() => {
    this.validateQtyTotal();
  });

    this.wtgs.push(row);
  }

  validateQtyTotal() {
  const totalQty = this.wtgs.controls
    .map(c => Number(c.get('qty')?.value) || 0)
    .reduce((a, b) => a + b, 0);

  if (this.projectQTY > 0 && totalQty > this.projectQTY) {
    this.errorMessage = `Total QTY (${this.projectQTY}) cannot exceed Project QTY (${this.projectQTY}).`;
    this.messageService.add({ severity: 'warn', summary: 'Warning', detail: `Total QTY (${this.projectQTY}) cannot exceed Project QTY (${this.projectQTY}).`, life: 3000 });
    this.disableAddBtn = true;
    return
  } else {
    this.errorMessage = '';
    this.disableAddBtn = false;

  }
}

  lockRow(index: any) {
    const row = this.wtgs.at(index) as FormGroup;
    row.get('spv')?.disable();
    row.get('wtgType')?.disable();
    row.get('capacity')?.disable();
    row.get('tower')?.disable();
    row.get('grid')?.disable();
    row.get('ppa')?.disable();
    // qty stays editable
  }

  deleteRow(index: number) {
  if (index > 0) {
    this.wtgs.removeAt(index);
  }
   if (this.wtgs.length === 1) {
      this.enableRow(0);
    }
}

enableRow(index: number) {
  const row = this.wtgs.at(index) as FormGroup;
  Object.keys(row.controls).forEach(ctrl => {
    if (ctrl !== 'qty') {
      row.get(ctrl)?.enable();
    }
  });
}

  addNewProject(){
    try{
      this.addProjectDialog = true;
    }catch(e){
      console.log(e);
    }
  }

  onCityChange(val:any) {
    const city = val.target.value.trim().toLocaleLowerCase();;
    if (this.cityStateMap[city]) {
      this.selectedState = this.cityStateMap[city];
      this.diableStateDD = true;
    } else {
      this.selectedState = ''; // reset if not found
      this.diableStateDD = false;

    }
  }

  submitProject(){
    try{
      this.projectHeader = "Step 2 : Add SPV's"
      this.isProjectCreated = true;
      this.step1 = false;
      var projectQTY = this.projectQTY;
      for (let i = 1; i <= projectQTY; i++) {
            this.spvOptions.push({ label: 'SPV ' + i, value: 'SPV ' + i });
            this.WTGOptions.push({ label: 'WTG ' + i, value: 'WTG ' + i });
        }

    }catch(e){

    }
  }

}
