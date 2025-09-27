import { Routes } from '@angular/router';
import { ButtonDemo } from './buttondemo';
import { ChartDemo } from './chartdemo';
import { FileDemo } from './filedemo';
import { FormLayoutDemo } from './formlayoutdemo';
import { InputDemo } from './inputdemo';
import { ListDemo } from './listdemo';
import { MediaDemo } from './mediademo';
import { MessagesDemo } from './messagesdemo';
import { MiscDemo } from './miscdemo';
import { PanelsDemo } from './panelsdemo';
import { TimelineDemo } from './timelinedemo';
import { TableDemo } from './tabledemo';
import { OverlayDemo } from './overlaydemo';
import { TreeDemo } from './treedemo';
import { MenuDemo } from './menudemo';
import { SiteEngComponent } from '../unikit/site-eng/site-eng.component';
import { SiteengineerComponent } from '../unikit/siteengineer/siteengineer.component';
import { SitemanagerprojectreportComponent } from '../unikit/sitemanagerprojectreport/sitemanagerprojectreport.component';
import { DprinputComponent } from '../unikit/dprinput/dprinput.component';
import { DproutputComponent } from '../unikit/dproutput/dproutput.component';
import { PlanningManagerComponent } from '../unikit/planning-manager/planning-manager.component';
import { ProductionManagerComponent } from '../unikit/production-manager/production-manager.component';
import { ProjectManagerComponent } from '../unikit/project-manager/project-manager.component';
import { ClusterManagerComponent } from '../unikit/cluster-manager/cluster-manager.component';
import { HodSiteManagerComponent } from '../unikit/hod-site-manager/hod-site-manager.component';
import { RevenueProductionComponent } from '../unikit/revenue-production/revenue-production.component';
import { DproutputValueComponent } from '../unikit/dproutput-value/dproutput-value.component';
import { ManagementComponent } from '../unikit/management/management.component';
import { ImcComponent } from '../unikit/imc/imc.component';
import { CashComponent } from '../unikit/cash/cash.component';
import { ProjectAnchorcageComponent } from '../unikit/project/osw/tsa/wtgproduction/project-anchorcage/project-anchorcage.component';
import { ProjectNacelleComponent } from '../unikit/project/osw/tsa/wtgproduction/project-nacelle/project-nacelle.component';
import { ProjectBladeComponent } from '../unikit/project/osw/tsa/wtgproduction/project-blade/project-blade.component';
import { ProjectTowerComponent } from '../unikit/project/osw/tsa/wtgproduction/project-tower/project-tower.component';
import { ProjectConverterPanelComponent } from '../unikit/project/osw/tsa/wtgproduction/project-converter-panel/project-converter-panel.component';
import { ProjectSiteAccessoriesComponent } from '../unikit/project/osw/tsa/wtgproduction/project-site-accessories/project-site-accessories.component';
import { ProjectTsaDeliveryAnchorcageComponent } from '../unikit/project/osw/tsa/wtgdelivery/project-tsa-delivery-anchorcage/project-tsa-delivery-anchorcage.component';
import { ProjectTsaDeliveryNacelleComponent } from '../unikit/project/osw/tsa/wtgdelivery/project-tsa-delivery-nacelle/project-tsa-delivery-nacelle.component';
import { ProjectTsaDeliveryHubComponent } from '../unikit/project/osw/tsa/wtgdelivery/project-tsa-delivery-hub/project-tsa-delivery-hub.component';
import { ProjectTsaDeliveryBladeComponent } from '../unikit/project/osw/tsa/wtgdelivery/project-tsa-delivery-blade/project-tsa-delivery-blade.component';
import { ProjectTsaProductionScadaComponent } from '../unikit/project/osw/tsa/wtgproduction/project-tsa-production-scada/project-tsa-production-scada.component';
import { ProjectTsaProductionHubComponent } from '../unikit/project/osw/tsa/wtgproduction/project-tsa-production-hub/project-tsa-production-hub.component';
import { ProjectTsaDeliveryTowerComponent } from '../unikit/project/osw/tsa/wtgdelivery/project-tsa-delivery-tower/project-tsa-delivery-tower.component';
import { ProjectTsaDeliveryConverterPanelComponent } from '../unikit/project/osw/tsa/wtgdelivery/project-tsa-delivery-converter-panel/project-tsa-delivery-converter-panel.component';
import { ProjectTsaDeliverySiteAccessoriesComponent } from '../unikit/project/osw/tsa/wtgdelivery/project-tsa-delivery-site-accessories/project-tsa-delivery-site-accessories.component';
import { ProjectTsaDeliveryScadaComponent } from '../unikit/project/osw/tsa/wtgdelivery/project-tsa-delivery-scada/project-tsa-delivery-scada.component';
import { ProjectIandcReceivingAnchorcageComponent } from '../unikit/project/osw/iandc/wtgReceiving/project-iandc-receiving-anchorcage/project-iandc-receiving-anchorcage.component';
import { ProjectIandcReceivingBladeComponent } from '../unikit/project/osw/iandc/wtgReceiving/project-iandc-receiving-blade/project-iandc-receiving-blade.component';
import { ProjectIandcReceivingNacelleComponent } from '../unikit/project/osw/iandc/wtgReceiving/project-iandc-receiving-nacelle/project-iandc-receiving-nacelle.component';
import { ProjectIandcReceivingHubComponent } from '../unikit/project/osw/iandc/wtgReceiving/project-iandc-receiving-hub/project-iandc-receiving-hub.component';
import { ProjectIandcReceivingTowerComponent } from '../unikit/project/osw/iandc/wtgReceiving/project-iandc-receiving-tower/project-iandc-receiving-tower.component';
import { ProjectIandcReceivingConverterpanelComponent } from '../unikit/project/osw/iandc/wtgReceiving/project-iandc-receiving-converterpanel/project-iandc-receiving-converterpanel.component';
import { ProjectIandcReceivingSiteaccessoriesComponent } from '../unikit/project/osw/iandc/wtgReceiving/project-iandc-receiving-siteaccessories/project-iandc-receiving-siteaccessories.component';
import { ProjectFoundationComponent } from '../unikit/project/osw/iandc/project-foundation/project-foundation.component';
import { ProjectIandcHotoComponent } from '../unikit/project/osw/iandc/project-iandc-hoto/project-iandc-hoto.component';

export default [
    { path: 'button', data: { breadcrumb: 'Button' }, component: ButtonDemo },
    { path: 'charts', data: { breadcrumb: 'Charts' }, component: ChartDemo },
    { path: 'file', data: { breadcrumb: 'File' }, component: FileDemo },
    { path: 'formlayout', data: { breadcrumb: 'Form Layout' }, component: FormLayoutDemo },
    { path: 'site-eng', data: { breadcrumb: 'Site Engineer' }, component: SiteEngComponent },
    { path: 'site-eng-Project-report', data: { breadcrumb: 'Site Engineer' }, component: SitemanagerprojectreportComponent },
    { path: 'siteengineer', data: { breadcrumb: 'Site Engineer' }, component: SiteengineerComponent },
    { path: 'dprInput', data: { breadcrumb: 'Site Engineer' }, component: DprinputComponent },
    { path: 'dprOutput', data: { breadcrumb: 'Site Engineer' }, component: DproutputComponent },
    { path: 'dprOutputValue', data: { breadcrumb: 'Site Engineer' }, component: DproutputValueComponent },
    { path: 'planningManager', data: { breadcrumb: 'Site Engineer' }, component: PlanningManagerComponent },
    { path: 'productionManager', data: { breadcrumb: 'Site Engineer' }, component: ProductionManagerComponent },
    { path: 'project/anchor-cage', data: { breadcrumb: 'Site Engineer' }, component: ProjectAnchorcageComponent },
    { path: 'project/nacelle', data: { breadcrumb: 'Site Engineer' }, component: ProjectNacelleComponent },
    { path: 'project/hub', data: { breadcrumb: 'Site Engineer' }, component: ProjectTsaProductionHubComponent },
    { path: 'project/blade', data: { breadcrumb: 'Site Engineer' }, component: ProjectBladeComponent },
    { path: 'project/tower', data: { breadcrumb: 'Site Engineer' }, component: ProjectTowerComponent },
    { path: 'project/converter-panel', data: { breadcrumb: 'Site Engineer' }, component: ProjectConverterPanelComponent },
    { path: 'project/site-accessories', data: { breadcrumb: 'Site Engineer' }, component: ProjectSiteAccessoriesComponent },
    { path: 'project/scada', data: { breadcrumb: 'Site Engineer' }, component: ProjectTsaProductionScadaComponent },
    { path: 'project/dispatch/anchor-cage', data: { breadcrumb: 'Site Engineer' }, component: ProjectTsaDeliveryAnchorcageComponent },
    { path: 'project/dispatch/nacelle', data: { breadcrumb: 'Site Engineer' }, component: ProjectTsaDeliveryNacelleComponent },
    { path: 'project/dispatch/hub', data: { breadcrumb: 'Site Engineer' }, component: ProjectTsaDeliveryHubComponent },
    { path: 'project/dispatch/blade', data: { breadcrumb: 'Site Engineer' }, component: ProjectTsaDeliveryBladeComponent },
    { path: 'project/dispatch/tower', data: { breadcrumb: 'Site Engineer' }, component: ProjectTsaDeliveryTowerComponent },
    { path: 'project/dispatch/converter-panel', data: { breadcrumb: 'Site Engineer' }, component: ProjectTsaDeliveryConverterPanelComponent },
    { path: 'project/dispatch/site-accessories', data: { breadcrumb: 'Site Engineer' }, component: ProjectTsaDeliverySiteAccessoriesComponent },
    { path: 'project/dispatch/scada', data: { breadcrumb: 'Site Engineer' }, component: ProjectTsaDeliveryScadaComponent },
    { path: 'project/receiving/anchor-cage', data: { breadcrumb: 'Site Engineer' }, component: ProjectIandcReceivingAnchorcageComponent },
    { path: 'project/receiving/nacelle', data: { breadcrumb: 'Site Engineer' }, component: ProjectIandcReceivingNacelleComponent },
    { path: 'project/receiving/hub', data: { breadcrumb: 'Site Engineer' }, component: ProjectIandcReceivingHubComponent },
    { path: 'project/receiving/blade', data: { breadcrumb: 'Site Engineer' }, component: ProjectIandcReceivingBladeComponent },
    { path: 'project/receiving/tower', data: { breadcrumb: 'Site Engineer' }, component: ProjectIandcReceivingTowerComponent },
    { path: 'project/receiving/converter-panel', data: { breadcrumb: 'Site Engineer' }, component: ProjectIandcReceivingConverterpanelComponent },
    { path: 'project/receiving/site-accessories', data: { breadcrumb: 'Site Engineer' }, component: ProjectIandcReceivingSiteaccessoriesComponent },
    { path: 'project/foundation', data: { breadcrumb: 'Site Engineer' }, component: ProjectFoundationComponent },
    { path: 'project/hoto', data: { breadcrumb: 'Site Engineer' }, component: ProjectIandcHotoComponent },
    { path: 'projectManager', data: { breadcrumb: 'Site Engineer' }, component: ProjectManagerComponent },
    { path: 'clusterManager', data: { breadcrumb: 'Site Engineer' }, component: ClusterManagerComponent },
    { path: 'siteManager', data: { breadcrumb: 'Site Engineer' }, component: HodSiteManagerComponent },
    { path: 'revenue-prodcution', data: { breadcrumb: 'Site Engineer' }, component: RevenueProductionComponent },
    { path: 'revenue', data: { breadcrumb: 'Site Engineer' }, component: ManagementComponent },
    { path: 'imc', data: { breadcrumb: 'Site Engineer' }, component: ImcComponent },
    { path: 'cash', data: { breadcrumb: 'Site Engineer' }, component: CashComponent },
    { path: 'input', data: { breadcrumb: 'Input' }, component: InputDemo },
    { path: 'list', data: { breadcrumb: 'List' }, component: ListDemo },
    { path: 'media', data: { breadcrumb: 'Media' }, component: MediaDemo },
    { path: 'message', data: { breadcrumb: 'Message' }, component: MessagesDemo },
    { path: 'misc', data: { breadcrumb: 'Misc' }, component: MiscDemo },
    { path: 'panel', data: { breadcrumb: 'Panel' }, component: PanelsDemo },
    { path: 'timeline', data: { breadcrumb: 'Timeline' }, component: TimelineDemo },
    { path: 'table', data: { breadcrumb: 'Table' }, component: TableDemo },
    { path: 'overlay', data: { breadcrumb: 'Overlay' }, component: OverlayDemo },
    { path: 'tree', data: { breadcrumb: 'Tree' }, component: TreeDemo },
    { path: 'menu', data: { breadcrumb: 'Menu' }, component: MenuDemo },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
