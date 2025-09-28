import { Component } from '@angular/core';
import { Shared } from '../../../services/shared/shared.module';

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
},]
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
    { label: "Delhi", value: "Delhi" },
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
    {label:'PM 1', Value:'PM 1'},
    {label:'PM 2', Value:'PM 2'},
    {label:'PM 3', Value:'PM 3'},
    {label:'PM 4', Value:'PM 4'},
  ]
  selectedProjectManager:any = "";
  BDOptions:any = [
    {label:'BD 1', Value:'BD 1'},
    {label:'BD 2', Value:'BD 2'},
    {label:'BD 3', Value:'BD 3'},
    {label:'BD 4', Value:'BD 4'},
  ]
  selectedBDManager:any = "";
  solutionOptions:any = [
    {label:'solution Manager 1', Value:'solution Manager 1'},
    {label:'solution Manager 2', Value:'solution Manager 2'},
    {label:'solution Manager 3', Value:'solution Manager 3'},
    {label:'solution Manager 4', Value:'solution Manager 4'},
  ]
  selectedSolutionManager:any = "";
  stateHeadOptions:any = [
    {label:'State Head 1', Value:'State Head 1'},
    {label:'State Head 2', Value:'State Head 2'},
    {label:'State Head 3', Value:'State Head 3'},
    {label:'State Head 4', Value:'State Head 4'},
  ]
  selectedStateHead:any = "";
  siteManagerOptions:any = [
    {label:'Site Manager 1', Value:'Site Manager 1'},
    {label:'Site Manager 2', Value:'Site Manager 2'},
    {label:'Site Manager 3', Value:'Site Manager 3'},
    {label:'Site Manager 4', Value:'Site Manager 4'},
  ]
  selectedSiteManager:any = "";

  multipleSPVOptions:any = [
    {label:'Yes', Value:'Yes'},
    {label:'No', Value:'No'}
  ]
  selectedMultpleSPV:any = "No";
  diableStateDD:boolean = false;
  constructor(){}

  ngOnInit(){

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

}
