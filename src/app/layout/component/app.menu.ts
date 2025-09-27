import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];
    siteManager:boolean = false;
    users:boolean = false;

    ngOnInit() {
        var user = sessionStorage.getItem('user');
        if(user == 'siteengineer_user1'){
            this.siteManager = true;
        }
        this.model = [
            {
                label: 'PMO',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/app'] },
                    { label: 'Direct Update Tool', icon: 'pi pi-fw pi-hammer', routerLink: ['/app/dgrtools'],
                    },
                    { label: 'Organisation Structure', icon: 'pi pi-fw pi-id-card', routerLink: ['/app/uikit/siteengineer'],
                    },
                    {
                        label: 'Procurement',
                        icon: 'pi pi-fw pi-server',
                    },
                    {
                        label: 'Resource Pool',
                        icon: 'pi pi-fw pi-database',
                        items: [
                            {
                                label: 'People',
                                icon: 'pi pi-fw pi-id-card',
                                items: [
                                    {
                                        label: 'Training',
                                        items: [
                                            {
                                                label: 'People'
                                            },
                                            {
                                                label: 'Training Status'
                                            },
                                            {
                                                label: 'Skill Matrix'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                label: 'Tools',
                                icon: 'pi pi-fw pi-id-card',
                            },
                            {
                                label: 'Spares',
                                icon: 'pi pi-fw pi-id-card',
                            },
                        ]
                    },
                    {
                        label: 'Site Administration',
                        icon: 'pi pi-fw pi-crown',
                    },
                    { label: 'Key Statics', icon: 'pi pi-fw pi-key'
                    }
                ],
                //visible: this.siteManager 
            },
            // {
            //     label: 'Home',
            //     items: [],
            //     visible: this.siteManager && this.users
            // },

            // {
            //     label: 'DGR',
            //     items: [
                    
            //     ],
            //     visible: this.siteManager && this.users
            // },
            {
                label: 'PORTFOLIO MANAGEMENT',
                items: [
                    {
                        label: "Onshore Wind",
                        icon: 'pi pi-fw pi-compass',
                         items: [
                            {
                                label: 'Projects',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/app/uikit/planningManager'],
                                items: [
                            {
                                label: 'Project Planning',
                                icon: 'pi pi-fw pi-bookmark',
                                routerLink: ['/app/uikit/productionManager'],
                              
                            },
                            {
                                label: 'Project Supply Planning',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            {
                                label: 'Project I & C Planning',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            {
                                label: 'Project Procurement Planning',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            {
                                label: 'Project Manpower Planning',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            {
                                label: 'Project Tools Planning',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            {
                                label: 'Project Spares Planning',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            {
                                label: 'Project Site Facilities',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            // {
                            //     label: 'TSA',
                            //     icon: 'pi pi-fw pi-bookmark',
                            //     items:[
                            //       {label:'T Production'},
                            //       {label:'T Delivery'},
                            //     ]
                              
                            // },
                            // {
                            //     label: 'T I&C',
                            //     icon: 'pi pi-fw pi-bookmark',
                            //      items:[
                            //       {label:'WTG Receiving'},
                            //       {label:'Foundation'},
                            //       {label:'Instllation'},
                            //       {label:'Commissioning'},
                            //       {label:'STPT'},
                            //       {label:'HOTO'},
                            //     ]
                            // },
                            // {
                            //     label: 'T Cash',
                            //     icon: 'pi pi-fw pi-bookmark',
                            //     items:[
                            //       {label:'Work Complete'},
                            //       {label:'Invoice'},
                            //     ]
                               
                            // },
                            
                        ],
                            },
                            {
                                label: 'O&M',
                                icon: 'pi pi-fw pi-box',
                                items: [
                                            {
                                                label: 'Free O&M and LTSA Planning',
                                                icon: 'pi pi-fw pi-bookmark',                                            
                                            },
                                            {
                                                label: 'O&M Preventive Maintenance Planning',
                                                icon: 'pi pi-fw pi-bookmark',
                                            
                                            },
                                            {
                                                label: 'O&M Breakdown Planning',
                                                icon: 'pi pi-fw pi-bookmark',
                                            
                                            },
                                            {
                                                label: 'O&M Procurement Planning',
                                                icon: 'pi pi-fw pi-bookmark',
                                            
                                            },
                                            {
                                                label: 'O&M Manpower Planning',
                                                icon: 'pi pi-fw pi-bookmark',
                                            
                                            },
                                            {
                                                label: 'O&M Tool Planning',
                                                icon: 'pi pi-fw pi-bookmark',
                                            
                                            },
                                            {
                                                label: 'O&M Spare Planning',
                                                icon: 'pi pi-fw pi-bookmark',
                                            
                                            },
                                            {
                                                label: 'O&M Site Facilities',
                                                icon: 'pi pi-fw pi-bookmark',
                                            
                                            },
                                            {
                                                label: 'O&M Generations',
                                                icon: 'pi pi-fw pi-bookmark',
                                            
                                            },
                                            {
                                                label: 'O&M Compliance',
                                                icon: 'pi pi-fw pi-bookmark',
                                            
                                            },
                                            // {
                                            //     label: 'T Warranty',
                                            //     icon: 'pi pi-fw pi-bookmark',
                                            
                                            // },
                                            // {
                                            //     label: 'LTSA',
                                            //     icon: 'pi pi-fw pi-bookmark',
                                            // },
                            /* {
                                label: 'Tower',
                                icon: 'pi pi-fw pi-bookmark',
                               
                            }, */
                            
                                        ],
                                    },
                                    {
                                        label: 'TSA',
                                        icon: 'pi pi-fw pi-box',
                                        items: [
                                            {
                                                label: 'WTG Production',
                                                icon: 'pi pi-fw pi-bookmark',
                                                items: [
                                                    {
                                                        label: 'Anchor cage',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'Nacelle',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'HUB',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'Blade',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'Tower',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'Converter Panel',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'Site Accessories',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'SCADA',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    }
                                                ]
                                            },
                                            {
                                                label: 'WTG Dispatch',
                                                icon: 'pi pi-fw pi-bookmark',
                                                items: [
                                                    {
                                                        label: 'Anchor cage',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'Nacelle',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'HUB',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'Blade',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'Tower',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'Converter Panel',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'Site Accessories',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'SCADA',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        label: 'I&C',
                                        icon: 'pi pi-fw pi-box',
                                        items: [
                                            {
                                                label: 'WTG Receiving',
                                                icon: 'pi pi-fw pi-bookmark',
                                                items: [
                                                    {
                                                        label: 'Anchor cage',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'Nacelle',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'HUB',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'Blade',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'Tower',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'Converter Panel',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'Site Accessories',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'SCADA',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    }
                                                ]
                                            },
                                            {
                                                label: 'Foundation',
                                                icon: 'pi pi-fw pi-bookmark',
                                            },
                                            {
                                                label: 'Installation',
                                                icon: 'pi pi-fw pi-bookmark',
                                            },
                                            {
                                                label: 'Commissioning',
                                                icon: 'pi pi-fw pi-bookmark',
                                            },
                                            {
                                                label: 'STPT',
                                                icon: 'pi pi-fw pi-bookmark',
                                            },
                                            {
                                                label: 'HOTO',
                                                icon: 'pi pi-fw pi-bookmark',
                                            },
                                        ]
                                    },
                            /* {
                                label: 'Delivery Manager',
                                icon: 'pi pi-building-columns',
                                routerLink: ['/app/uikit/projectManager']
                            },
                            {
                                label: 'Cluster Manager',
                                icon: 'pi pi-id-card',
                                routerLink: ['/app/uikit/clusterManager']
                            },
                            {
                                label: 'Site Manager',
                                icon: 'pi pi-shield',
                                routerLink: ['/app/uikit/siteManager']
                            } */

                        ]
                       /*  items: [
                            {
                                label: 'Planning Manager',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/app/uikit/planningManager']
                            },
                            {
                                label: 'Production Manager',
                                icon: 'pi pi-fw pi-box',
                                routerLink: ['/app/uikit/productionManager'],
                                 items: [
                            {
                                label: 'Production Manager',
                                icon: 'pi pi-fw pi-bookmark',
                                routerLink: ['/app/uikit/productionManager'],
                              
                            },
                            {
                                label: 'Nacelle & Hub',
                                icon: 'pi pi-fw pi-bookmark',
                              
                            },
                            {
                                label: 'Blade',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            {
                                label: 'Tower',
                                icon: 'pi pi-fw pi-bookmark',
                               
                            },
                            
                        ],
                            },
                            {
                                label: 'Delivery Manager',
                                icon: 'pi pi-building-columns',
                                routerLink: ['/app/uikit/projectManager']
                            },
                            {
                                label: 'Cluster Manager',
                                icon: 'pi pi-id-card',
                                routerLink: ['/app/uikit/clusterManager']
                            },
                            {
                                label: 'Site Manager',
                                icon: 'pi pi-shield',
                                routerLink: ['/app/uikit/siteManager']
                            }

                        ] */
                    },
                     {
                        label: "BESS",
                        icon: 'pi pi-fw pi-user',
                        items:[
                            {label:'BESS Project',
                                 items: [
                            {
                                label: 'BESS Planning',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/app/uikit/planningManager'],
                                item:[
                                    {}
                                ]
                            },
                            {
                                label: 'BSA',
                                icon: 'pi pi-fw pi-box',
                                routerLink: ['/app/uikit/productionManager'],
                                 items: [
                            {
                                label: 'Production Manager',
                                icon: 'pi pi-fw pi-bookmark',
                                routerLink: ['/app/uikit/productionManager'],
                                items:[
                                    {
                                        label: 'AC',
                                        icon: 'pi pi-fw pi-bookmark',
                                    
                                    },
                                    {
                                        label: 'PCS',
                                        icon: 'pi pi-fw pi-bookmark',
                                    },
                                    {
                                        label: 'SCADA',
                                        icon: 'pi pi-fw pi-bookmark',
                                    
                                    },
                                ]
                              
                            },
                            
                            
                        ],
                            },
                                     
                                     {
                                         label: 'BESS I&C',
                                         icon: 'pi pi-fw pi-user',
                                     }
                           /*  {
                                label: 'Delivery Manager',
                                icon: 'pi pi-building-columns',
                                routerLink: ['/app/uikit/projectManager']
                            },
                            {
                                label: 'Cluster Manager',
                                icon: 'pi pi-id-card',
                                routerLink: ['/app/uikit/clusterManager']
                            },
                            {
                                label: 'Site Manager',
                                icon: 'pi pi-shield',
                                routerLink: ['/app/uikit/siteManager']
                            } */

                        ]
                            },
                            
                            {label:'BESS O&M',
                                items:[
                                    {label:'BESS O&M Plan'},
                                    {label:'BESS Warranty'},
                                    {label:'BESS LTSA'},
                            ]
                            }
                        ]
                       
                    }
                ],
                //visible: this.siteManager 
            },
            {
                label: 'MANAGEMENT',
                items: [
                    {
                        label: 'Revenue',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Production',
                                icon: 'pi pi-fw pi-bars',
                                routerLink: ['/app/uikit/revenue-prodcution']
                                
                            },
                            {
                                label: 'Dispatch',
                                icon: 'pi pi-fw pi-bolt',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'Delivery',
                                icon: 'pi pi-fw pi-book',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'Install',
                                icon: 'pi pi-fw pi-box',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'Comm',
                                icon: 'pi pi-fw pi-briefcase',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'STPT',
                                icon: 'pi pi-fw pi-bullseye',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            }
                        ],
                        
                    },
                    {
                        label: 'Cash',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Production',
                                icon: 'pi pi-fw pi-bars',
                                // items: [
                                //     { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                //     { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                //     { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                                // ]
                            },
                            {
                                label: 'Dispatch',
                                icon: 'pi pi-fw pi-bolt',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'Delivery',
                                icon: 'pi pi-fw pi-book',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'Install',
                                icon: 'pi pi-fw pi-box',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'Comm',
                                icon: 'pi pi-fw pi-briefcase',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'STPT',
                                icon: 'pi pi-fw pi-bullseye',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            }
                        ],
                        /* items: [
                            {
                                label: 'Submenu 2.1',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'Submenu 2.2',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
                            }
                        ], */
                        
                    },
                    {
                        label: 'Setup',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Production',
                                icon: 'pi pi-fw pi-bars',
                                // items: [
                                //     { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                //     { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                //     { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                                // ]
                            },
                            {
                                label: 'Dispatch',
                                icon: 'pi pi-fw pi-bolt',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'Delivery',
                                icon: 'pi pi-fw pi-book',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'Install',
                                icon: 'pi pi-fw pi-box',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'Comm',
                                icon: 'pi pi-fw pi-briefcase',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'STPT',
                                icon: 'pi pi-fw pi-bullseye',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            }
                        ],
                        /* items: [
                            {
                                label: 'Submenu 2.1',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'Submenu 2.2',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
                            }
                        ], */
                        
                    }
                ],
                visible: this.users
            },
            {
                label: 'Project Deliverables',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['//pages'],
                items: [
                    {
                        label: 'Operations',
                        icon: 'pi pi-fw pi-box',
                        items: [
                   /*  {
                        label: 'Global Report',
                        icon: 'pi pi-fw pi-globe',
                        
                    }, */
                    {
                        label: "Onshore Wind",
                        icon: 'pi pi-fw pi-compass',
                         items: [
                            {
                                label: 'Projects',
                                icon: 'pi pi-fw pi-sign-in',
                                items: [
                            {
                                label: 'Project Planning',
                                icon: 'pi pi-fw pi-bookmark',
                                routerLink: ['/app/uikit/planningManager'],
                              
                            },
                            {
                                label: 'Project Supply Planning',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            {
                                label: 'Project I & C Planning',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            {
                                label: 'Project Procurement Planning',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            {
                                label: 'Project Manpower Planning',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            {
                                label: 'Project Tools Planning',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            {
                                label: 'Project Spares Planning',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            {
                                label: 'Project Site Facilities',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            // {
                            //     label: 'TSA',
                            //     icon: 'pi pi-fw pi-bookmark',
                            //     items:[
                            //       {label:'T Production'},
                            //       {label:'T Delivery'},
                            //     ]
                              
                            // },
                            // {
                            //     label: 'T I&C',
                            //     icon: 'pi pi-fw pi-bookmark',
                            //      items:[
                            //       {label:'WTG Receiving'},
                            //       {label:'Foundation'},
                            //       {label:'Instllation'},
                            //       {label:'Commissioning'},
                            //       {label:'STPT'},
                            //       {label:'HOTO'},
                            //     ]
                            // },
                            // {
                            //     label: 'T Cash',
                            //     icon: 'pi pi-fw pi-bookmark',
                            //     items:[
                            //       {label:'Work Complete'},
                            //       {label:'Invoice'},
                            //     ]
                               
                            // },
                            
                        ],
                            },
                            {
                                label: 'O&M',
                                icon: 'pi pi-fw pi-box',
                                items: [
                                            {
                                                label: 'Free O&M and LTSA Planning',
                                                icon: 'pi pi-fw pi-bookmark',
                                                routerLink: ['/app/uikit/productionManager'],
                                            
                                            },
                                            {
                                                label: 'O&M Preventive Maintenance Planning',
                                                icon: 'pi pi-fw pi-bookmark',
                                            
                                            },
                                            {
                                                label: 'O&M Breakdown Planning',
                                                icon: 'pi pi-fw pi-bookmark',
                                            
                                            },
                                            {
                                                label: 'O&M Procurement Planning',
                                                icon: 'pi pi-fw pi-bookmark',
                                            
                                            },
                                            {
                                                label: 'O&M Manpower Planning',
                                                icon: 'pi pi-fw pi-bookmark',
                                            
                                            },
                                            {
                                                label: 'O&M Tool Planning',
                                                icon: 'pi pi-fw pi-bookmark',
                                            
                                            },
                                            {
                                                label: 'O&M Spare Planning',
                                                icon: 'pi pi-fw pi-bookmark',
                                            
                                            },
                                            {
                                                label: 'O&M Site Facilities',
                                                icon: 'pi pi-fw pi-bookmark',
                                            
                                            },
                                            {
                                                label: 'O&M Generations',
                                                icon: 'pi pi-fw pi-bookmark',
                                            
                                            },
                                            {
                                                label: 'O&M Compliance',
                                                icon: 'pi pi-fw pi-bookmark',
                                            
                                            },
                                            // {
                                            //     label: 'T Warranty',
                                            //     icon: 'pi pi-fw pi-bookmark',
                                            
                                            // },
                                            // {
                                            //     label: 'LTSA',
                                            //     icon: 'pi pi-fw pi-bookmark',
                                            // },
                            /* {
                                label: 'Tower',
                                icon: 'pi pi-fw pi-bookmark',
                               
                            }, */
                            
                                        ],
                                    },
                                    {
                                        label: 'TSA',
                                        icon: 'pi pi-fw pi-box',
                                        items: [
                                            {
                                                label: 'WTG Production',
                                                icon: 'pi pi-fw pi-bookmark',
                                                items: [
                                                    {
                                                        label: 'Anchor cage',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                        routerLink: ['/app/uikit/project/anchor-cage'],
                                                    },
                                                    {
                                                        label: 'Nacelle',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                        routerLink: ['/app/uikit/project/nacelle'],
                                                    },
                                                    {
                                                        label: 'HUB',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                        routerLink: ['/app/uikit/project/hub'],
                                                    },
                                                    {
                                                        label: 'Blade',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                        routerLink: ['/app/uikit/project/blade'],
                                                    },
                                                    {
                                                        label: 'Tower',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                        routerLink: ['/app/uikit/project/tower']
                                                    },
                                                    {
                                                        label: 'Converter Panel',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                        routerLink: ['/app/uikit/project/converter-panel']
                                                    },
                                                    {
                                                        label: 'Site Accessories',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                        routerLink: ['/app/uikit/project/site-accessories']
                                                    },
                                                    {
                                                        label: 'SCADA',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                        routerLink: ['/app/uikit/project/scada']
                                                    }
                                                ]
                                            },
                                            {
                                                label: 'WTG Dispatch',
                                                icon: 'pi pi-fw pi-bookmark',
                                                items: [
                                                    {
                                                        label: 'Anchor cage',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                        routerLink: ['/app/uikit/project/dispatch/anchor-cage']
                                                    },
                                                    {
                                                        label: 'Nacelle',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                        routerLink: ['/app/uikit/project/dispatch/nacelle']
                                                    },
                                                    {
                                                        label: 'HUB',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                        routerLink: ['/app/uikit/project/dispatch/hub']
                                                    },
                                                    {
                                                        label: 'Blade',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                        routerLink: ['/app/uikit/project/dispatch/blade']
                                                    },
                                                    {
                                                        label: 'Tower',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                        routerLink: ['/app/uikit/project/dispatch/tower']
                                                    },
                                                    {
                                                        label: 'Converter Panel',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                        routerLink: ['/app/uikit/project/dispatch/converter-panel']
                                                    },
                                                    {
                                                        label: 'Site Accessories',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                        routerLink: ['/app/uikit/project/dispatch/site-accessories']
                                                    },
                                                    {
                                                        label: 'SCADA',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                        routerLink: ['/app/uikit/project/dispatch/scada']
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        label: 'I&C',
                                        icon: 'pi pi-fw pi-box',
                                        items: [
                                            {
                                                label: 'WTG Receiving',
                                                icon: 'pi pi-fw pi-bookmark',
                                                items: [
                                                    {
                                                        label: 'Anchor cage',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                        routerLink: ['/app/uikit/project/receiving/anchor-cage']
                                                    },
                                                    {
                                                        label: 'Nacelle',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                        routerLink: ['/app/uikit/project/receiving/nacelle']
                                                    },
                                                    {
                                                        label: 'HUB',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                        routerLink: ['/app/uikit/project/receiving/hub']
                                                    },
                                                    {
                                                        label: 'Blade',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                        routerLink: ['/app/uikit/project/receiving/blade']
                                                    },
                                                    {
                                                        label: 'Tower',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                        routerLink: ['/app/uikit/project/receiving/tower']
                                                    },
                                                    {
                                                        label: 'Converter Panel',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'Site Accessories',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'SCADA',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    }
                                                ]
                                            },
                                            {
                                                label: 'Foundation',
                                                icon: 'pi pi-fw pi-bookmark',
                                            },
                                            {
                                                label: 'Installation',
                                                icon: 'pi pi-fw pi-bookmark',
                                            },
                                            {
                                                label: 'Commissioning',
                                                icon: 'pi pi-fw pi-bookmark',
                                            },
                                            {
                                                label: 'STPT',
                                                icon: 'pi pi-fw pi-bookmark',
                                            },
                                            {
                                                label: 'HOTO',
                                                icon: 'pi pi-fw pi-bookmark',
                                            },
                                        ]
                                    },
                                    // {
                                    //     label: 'CASH IN',
                                    //     icon: 'pi pi-fw pi-box',
                                    //     items: [
                                    //         {
                                    //             label: 'Projects',
                                    //             icon: 'pi pi-fw pi-bookmark',
                                    //             items: [
                                    //                 {
                                    //                     label: 'Advance',
                                    //                     icon: 'pi pi-fw pi-bookmark',
                                    //                 },
                                    //                 {
                                    //                     label: 'Milestones',
                                    //                     icon: 'pi pi-fw pi-bookmark',
                                    //                     items: [
                                    //                         {
                                    //                             label: 'EWPT',
                                    //                             icon: 'pi pi-fw pi-bookmark',
                                    //                         },
                                    //                         {
                                    //                             label: 'EWPS',
                                    //                             icon: 'pi pi-fw pi-bookmark',
                                    //                         },
                                    //                     ]
                                    //                 },
                                    //                 {
                                    //                     label: 'After Sales',
                                    //                     icon: 'pi pi-fw pi-bookmark',
                                    //                 },
                                    //             ]
                                    //         },
                                    //         {
                                    //             label: 'O&M',
                                    //             icon: 'pi pi-fw pi-bookmark',
                                    //         },
                                    //         {
                                    //             label: 'BESS',
                                    //             icon: 'pi pi-fw pi-bookmark',
                                    //         }
                                    //     ]
                                    // }
                            /* {
                                label: 'Delivery Manager',
                                icon: 'pi pi-building-columns',
                                routerLink: ['/app/uikit/projectManager']
                            },
                            {
                                label: 'Cluster Manager',
                                icon: 'pi pi-id-card',
                                routerLink: ['/app/uikit/clusterManager']
                            },
                            {
                                label: 'Site Manager',
                                icon: 'pi pi-shield',
                                routerLink: ['/app/uikit/siteManager']
                            } */

                        ]
                       /*  items: [
                            {
                                label: 'Planning Manager',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/app/uikit/planningManager']
                            },
                            {
                                label: 'Production Manager',
                                icon: 'pi pi-fw pi-box',
                                routerLink: ['/app/uikit/productionManager'],
                                 items: [
                            {
                                label: 'Production Manager',
                                icon: 'pi pi-fw pi-bookmark',
                                routerLink: ['/app/uikit/productionManager'],
                              
                            },
                            {
                                label: 'Nacelle & Hub',
                                icon: 'pi pi-fw pi-bookmark',
                              
                            },
                            {
                                label: 'Blade',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            {
                                label: 'Tower',
                                icon: 'pi pi-fw pi-bookmark',
                               
                            },
                            
                        ],
                            },
                            {
                                label: 'Delivery Manager',
                                icon: 'pi pi-building-columns',
                                routerLink: ['/app/uikit/projectManager']
                            },
                            {
                                label: 'Cluster Manager',
                                icon: 'pi pi-id-card',
                                routerLink: ['/app/uikit/clusterManager']
                            },
                            {
                                label: 'Site Manager',
                                icon: 'pi pi-shield',
                                routerLink: ['/app/uikit/siteManager']
                            }

                        ] */
                    },
                     {
                        label: "BESS",
                        icon: 'pi pi-fw pi-user',
                        items:[
                            {   
                                label:'BESS Project',
                                icon: 'pi pi-fw pi-sign-in',
                                items: [
                            {
                                label: 'BESS Planning',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/app/uikit/planningManager'],
                                item:[
                                    {}
                                ]
                            },
                            {
                                label: 'BSA',
                                icon: 'pi pi-fw pi-box',
                                routerLink: ['/app/uikit/productionManager'],
                                 items: [
                            {
                                label: 'Production Manager',
                                icon: 'pi pi-fw pi-bookmark',
                                routerLink: ['/app/uikit/productionManager'],
                                items:[
                                    {
                                        label: 'AC',
                                        icon: 'pi pi-fw pi-bookmark',
                                    
                                    },
                                    {
                                        label: 'PCS',
                                        icon: 'pi pi-fw pi-bookmark',
                                    },
                                    {
                                        label: 'SCADA',
                                        icon: 'pi pi-fw pi-bookmark',
                                    
                                    },
                                ]
                              
                            },
                            
                            
                        ],
                            },
                                     
                                     {
                                         label: 'BESS I&C',
                                         icon: 'pi pi-fw pi-user',
                                     }
                           /*  {
                                label: 'Delivery Manager',
                                icon: 'pi pi-building-columns',
                                routerLink: ['/app/uikit/projectManager']
                            },
                            {
                                label: 'Cluster Manager',
                                icon: 'pi pi-id-card',
                                routerLink: ['/app/uikit/clusterManager']
                            },
                            {
                                label: 'Site Manager',
                                icon: 'pi pi-shield',
                                routerLink: ['/app/uikit/siteManager']
                            } */

                        ]
                            },
                            
                            {label:'BESS O&M',
                                icon: 'pi pi-fw pi-cog',
                                items:[
                                    {label:'BESS O&M Plan'},
                                    {label:'BESS Warranty'},
                                    {label:'BESS LTSA'},
                            ]
                            },
                            {
                                label: 'BESS TSA',
                                icon: 'pi pi-fw pi-hammer',
                                items: [
                                    {
                                        label: 'BESS Production',
                                        icon: 'pi pi-fw pi-box',
                                        items: [
                                            {
                                                label: 'DC',
                                                icon: 'pi pi-fw pi-inbox'
                                            },
                                            {
                                                label: 'PCS',
                                                icon: 'pi pi-fw pi-inbox'
                                            },
                                            {
                                                label: 'SCADA',
                                                icon: 'pi pi-fw pi-inbox'
                                            },
                                        ]
                                    },
                                    {
                                        label: 'BESS Dispatch',
                                        icon: 'pi pi-fw pi-box'
                                    },
                                    {
                                        label: 'Foundation & Installation',
                                        icon: 'pi pi-fw pi-box'
                                    },
                                    {
                                        label: 'Electrical Installation',
                                        icon: 'pi pi-fw pi-box'
                                    },
                                    {
                                        label: 'Commissioning',
                                        icon: 'pi pi-fw pi-box'
                                    }
                                ]
                            }
                        ]
                       
                    },
                   
                ]
                    },
                    {
                        label: 'Cash Flow',
                        icon: 'pi pi-fw pi-wallet',
                        items: [
                            {
                                label: 'Cash In',
                                icon: 'pi pi-fw pi-sign-in',
                                items: [
                                    {
                                        label: 'Onshore Wind Cash In',
                                        icon: 'pi pi-fw pi-money-bill',
                                        items: [
                                            {
                                                label: 'Projects Cash In',
                                                icon: 'pi pi-fw pi-bookmark',
                                                items: [
                                                    {
                                                        label: 'Advance',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'Milestones',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                        items: [
                                                            {
                                                                label: 'EWPT',
                                                                icon: 'pi pi-fw pi-bookmark',
                                                            },
                                                            {
                                                                label: 'EWPS',
                                                                icon: 'pi pi-fw pi-bookmark',
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        label: 'After Sales',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                ]
                                            },
                                            {
                                                label: 'O&M Cash In',
                                                icon: 'pi pi-fw pi-bookmark',
                                            }
                                        ]
                                    },
                                    {
                                        label: 'BESS Cash In',
                                        icon: 'pi pi-fw pi-money-bill',
                                        items: [
                                            {
                                                label: 'Projects Cash In',
                                                icon: 'pi pi-fw pi-bookmark',
                                                items: [
                                                    {
                                                        label: 'Advance',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                    {
                                                        label: 'Milestones',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                        items: [
                                                            {
                                                                label: 'EWPT',
                                                                icon: 'pi pi-fw pi-bookmark',
                                                            },
                                                            {
                                                                label: 'EWPS',
                                                                icon: 'pi pi-fw pi-bookmark',
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        label: 'After Sales',
                                                        icon: 'pi pi-fw pi-bookmark',
                                                    },
                                                ]
                                            },
                                            {
                                                label: 'O&M Cash In',
                                                icon: 'pi pi-fw pi-bookmark',
                                            },
                                        ]
                                    }
                                ]
                            },
                            {
                                label: 'Cash Out',
                                icon: 'pi pi-fw pi-sign-in',
                                items: [
                                    {
                                        label: 'Onshore Wind Cash Out',
                                        icon: 'pi pi-fw pi-money-bill',
                                        items: [
                                            {
                                                label: 'Projects Cash Out',
                                                icon: 'pi pi-fw pi-bookmark',
                                                // items: [
                                                //     {
                                                //         label: 'Advance',
                                                //         icon: 'pi pi-fw pi-bookmark',
                                                //     },
                                                //     {
                                                //         label: 'Milestones',
                                                //         icon: 'pi pi-fw pi-bookmark',
                                                //         items: [
                                                //             {
                                                //                 label: 'EWPT',
                                                //                 icon: 'pi pi-fw pi-bookmark',
                                                //             },
                                                //             {
                                                //                 label: 'EWPS',
                                                //                 icon: 'pi pi-fw pi-bookmark',
                                                //             },
                                                //         ]
                                                //     },
                                                //     {
                                                //         label: 'After Sales',
                                                //         icon: 'pi pi-fw pi-bookmark',
                                                //     },
                                                // ]
                                            },
                                            {
                                                label: 'O&M Cash Out',
                                                icon: 'pi pi-fw pi-bookmark',
                                            }
                                        ]
                                    },
                                    {
                                        label: 'BESS Cash Out',
                                        icon: 'pi pi-fw pi-money-bill',
                                        items: [
                                            {
                                                label: 'Projects Cash Out',
                                                icon: 'pi pi-fw pi-bookmark',
                                                // items: [
                                                //     {
                                                //         label: 'Advance',
                                                //         icon: 'pi pi-fw pi-bookmark',
                                                //     },
                                                //     {
                                                //         label: 'Milestones',
                                                //         icon: 'pi pi-fw pi-bookmark',
                                                //         items: [
                                                //             {
                                                //                 label: 'EWPT',
                                                //                 icon: 'pi pi-fw pi-bookmark',
                                                //             },
                                                //             {
                                                //                 label: 'EWPS',
                                                //                 icon: 'pi pi-fw pi-bookmark',
                                                //             },
                                                //         ]
                                                //     },
                                                //     {
                                                //         label: 'After Sales',
                                                //         icon: 'pi pi-fw pi-bookmark',
                                                //     },
                                                // ]
                                            },
                                            {
                                                label: 'O&M Cash Out',
                                                icon: 'pi pi-fw pi-bookmark',
                                            },
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            // {
            //      label: 'TSA',
            //     icon: 'pi pi-fw pi-briefcase',
            //     items:[
            //         {
            //             label: 'Prod',
            //             icon: 'pi pi-fw pi-sign-in',
            //             routerLink: ['/app/uikit/planningManager']
            //         },
            //         {
            //             label: 'Delivery',
            //             icon: 'pi pi-fw pi-sign-in',
            //             routerLink: ['/app/uikit/planningManager']
            //         }
            //     ]
            // },
            // {
            //      label: 'I & C',
            //     icon: 'pi pi-fw pi-briefcase',
            //     items:[
            //         {
            //             label: 'Cluster',
            //             icon: 'pi pi-fw pi-sign-in',
            //             routerLink: ['/app/uikit/planningManager']
            //         },
            //         {
            //             label: 'SI',
            //             icon: 'pi pi-fw pi-sign-in',
            //             routerLink: ['/app/uikit/planningManager']
            //         }
            //     ]
            // },
            // {
            //      label: 'Cash',
            //     icon: 'pi pi-fw pi-briefcase',
            //     items:[
            //         {
            //             label: 'Cash',
            //             icon: 'pi pi-fw pi-sign-in',
            //             routerLink: ['/app/uikit/planningManager']
            //         }
            //     ]
            // },
          /*   {
                label: 'Export Report',
                items: [
                    {
                        label: 'Documentation',
                        icon: 'pi pi-fw pi-book',
                    },
                ]
            }, */
            {
                label: 'Configuration',
                items: [
                    {
                        label: 'Create New Project',
                        icon: 'pi pi-fw pi-user-plus',
                    },
                    {
                        label: 'Masters',
                        icon: 'pi pi-fw pi-server',
                        items: [
                            {
                                label: 'Users',
                                icon: 'pi pi-fw pi-user'
                            },
                            {
                                label: 'Customers',
                                icon: 'pi pi-fw pi-user'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Exit Portal',
                items: [
                    {
                        label: 'LogOut',
                        icon: 'pi pi-sign-out',
                        command: () => {
                            this.logout();
                        },
                        routerLink: ['/']
                    },
                ]
            }
        ];
    }

    logout(){
        sessionStorage.clear();
        localStorage.clear();
    }
}
