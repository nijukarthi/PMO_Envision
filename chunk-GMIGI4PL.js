import{G as Ae,P as $,a as ge,b as _,c as S,d as r,e as C,m as me,r as be,u as xe,z as ye}from"./chunk-7NTKYNBM.js";import{ma as V,sa as j,t as I,u as ee,v as B}from"./chunk-GIBGPLDQ.js";import{c as he,d as X,f as Y,g as J,h as Z}from"./chunk-4O3FVBGX.js";import{e as ve}from"./chunk-CQOEQ2PP.js";import{k as ue,o as fe,q as M}from"./chunk-GUWBCBMK.js";import{$ as G,Eb as T,Ec as K,Fb as f,Gb as k,Hb as P,Ia as b,Ib as ce,Kb as se,Lb as le,Na as N,O as D,P as O,Pb as pe,Q as z,S as m,Sb as l,U as i,Ya as F,Za as R,_a as oe,ab as x,ac as A,bb as y,cb as E,cc as w,ga as te,jb as h,ka as u,kb as ie,lb as ae,qb as d,rb as re,sb as de,sc as s,tb as H,wc as g,xb as Q,yb as q,zc as W}from"./chunk-ZC2NZYGE.js";var _e=`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`;var Pe=`
    ${_e}

    /* For PrimeNG */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`,Me={root:({instance:n})=>["p-textarea p-component",{"p-filled":n.$filled(),"p-textarea-resizable ":n.autoResize,"p-variant-filled":n.$variant()==="filled","p-textarea-fluid":n.hasFluid,"p-inputfield-sm p-textarea-sm":n.pSize==="small","p-textarea-lg p-inputfield-lg":n.pSize==="large","p-invalid":n.invalid()}]},Ce=(()=>{class n extends j{name="textarea";style=Pe;classes=Me;static \u0275fac=(()=>{let e;return function(t){return(e||(e=u(n)))(t||n)}})();static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var De=new m("TEXTAREA_INSTANCE"),gn=(()=>{class n extends Ae{bindDirectiveInstance=i(r,{self:!0});$pcTextarea=i(De,{optional:!0,skipSelf:!0})??void 0;autoResize;pSize;variant=g();fluid=g(void 0,{transform:K});invalid=g(void 0,{transform:K});$variant=s(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onResize=new N;ngControlSubscription;_componentStyle=i(Ce);ngControl=i(ve,{optional:!0,self:!0});pcFluid=i(me,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}onInit(){this.ngControl&&(this.ngControlSubscription=this.ngControl.valueChanges.subscribe(()=>{this.updateState()}))}onAfterViewInit(){this.autoResize&&this.resize(),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"])),this.autoResize&&this.resize(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(e){this.writeModelValue(e.target?.value),this.updateState()}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.autoResize&&this.resize()}onDestroy(){this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=(()=>{let e;return function(t){return(e||(e=u(n)))(t||n)}})();static \u0275dir=oe({type:n,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostVars:2,hostBindings:function(o,t){o&1&&T("input",function(c){return t.onInput(c)}),o&2&&l(t.cx("root"))},inputs:{autoResize:[2,"autoResize","autoResize",K],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},outputs:{onResize:"onResize"},features:[A([Ce,{provide:De,useExisting:n},{provide:_,useExisting:n}]),y([r]),x]})}return n})(),vn=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=R({type:n});static \u0275inj=z({})}return n})();var Ee=`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`;var L=["*"],Be=["toggleicon"],Se=n=>({active:n});function Oe(n,p){}function ze(n,p){n&1&&E(0,Oe,0,0,"ng-template")}function Re(n,p){if(n&1&&E(0,ze,1,0,null,0),n&2){let e=f();d("ngTemplateOutlet",e.toggleicon)("ngTemplateOutletContext",w(2,Se,e.active()))}}function Ke(n,p){if(n&1&&H(0,"span",4),n&2){let e=f(3);l(e.cn(e.cx("toggleicon"),e.pcAccordion.collapseIcon)),d("pBind",e.ptm("toggleicon")),h("aria-hidden",!0)}}function Ve(n,p){if(n&1&&(G(),H(0,"svg",5)),n&2){let e=f(3);l(e.cx("toggleicon")),d("pBind",e.ptm("toggleicon")),h("aria-hidden",!0)}}function je(n,p){if(n&1&&(Q(0),E(1,Ke,1,4,"span",2)(2,Ve,1,4,"svg",3),q()),n&2){let e=f(2);b(),d("ngIf",e.pcAccordion.collapseIcon),b(),d("ngIf",!e.pcAccordion.collapseIcon)}}function $e(n,p){if(n&1&&H(0,"span",4),n&2){let e=f(3);l(e.cn(e.cx("toggleicon"),e.pcAccordion.expandIcon)),d("pBind",e.ptm("toggleicon")),h("aria-hidden",!0)}}function Le(n,p){if(n&1&&(G(),H(0,"svg",7)),n&2){let e=f(3);d("pBind",e.ptm("toggleicon")),h("aria-hidden",!0)}}function Ue(n,p){if(n&1&&(Q(0),E(1,$e,1,4,"span",2)(2,Le,1,2,"svg",6),q()),n&2){let e=f(2);b(),d("ngIf",e.pcAccordion.expandIcon),b(),d("ngIf",!e.pcAccordion.expandIcon)}}function Ge(n,p){if(n&1&&E(0,je,3,2,"ng-container",1)(1,Ue,3,2,"ng-container",1),n&2){let e=f();d("ngIf",e.active()),b(),d("ngIf",!e.active())}}var we=n=>({transitionParams:n}),Qe=n=>({value:"visible",params:n}),qe=n=>({value:"hidden",params:n}),We=`
    ${Ee}

    /*For PrimeNG*/
    .p-accordionpanel:not(.p-accordionpanel-active) > .p-accordioncontent,
    .p-accordioncontent-content.ng-animating {
        overflow: hidden;
    }

    .p-accordionheader-toggle-icon.icon-start {
        order: -1;
    }

    .p-accordionheader:has(.p-accordionheader-toggle-icon.icon-start) {
        justify-content: flex-start;
        gap: dt('accordion.header.padding');
    }

    .p-accordioncontent.ng-animating {
        overflow: hidden;
    }

    .p-accordionheader.p-ripple {
        overflow: hidden;
        position: relative;
    }
`,Xe={root:"p-accordion p-component",panel:({instance:n})=>["p-accordionpanel",{"p-accordionpanel-active":n.active(),"p-disabled":n.disabled()}],header:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon",contentContainer:"p-accordioncontent",content:"p-accordioncontent-content"},v=(()=>{class n extends j{name="accordion";style=We;classes=Xe;static \u0275fac=(()=>{let e;return function(t){return(e||(e=u(n)))(t||n)}})();static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var Ie=new m("ACCORDION_PANEL_INSTANCE"),Ne=new m("ACCORDION_HEADER_INSTANCE"),Fe=new m("ACCORDION_CONTENT_INSTANCE"),He=new m("ACCORDION_INSTANCE"),ne=(()=>{class n extends S{$pcAccordionPanel=i(Ie,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=i(r,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}pcAccordion=i(D(()=>U));value=W(void 0);disabled=g(!1,{transform:e=>$(e)});active=s(()=>this.pcAccordion.multiple()?this.valueEquals(this.pcAccordion.value(),this.value()):this.pcAccordion.value()===this.value());valueEquals(e,o){return Array.isArray(e)?e.includes(o):e===o}_componentStyle=i(v);static \u0275fac=(()=>{let e;return function(t){return(e||(e=u(n)))(t||n)}})();static \u0275cmp=F({type:n,selectors:[["p-accordion-panel"],["p-accordionpanel"]],hostVars:4,hostBindings:function(o,t){o&2&&(h("data-p-disabled",t.disabled())("data-p-active",t.active()),l(t.cx("panel")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[A([v,{provide:Ie,useExisting:n},{provide:_,useExisting:n}]),y([r]),x],ngContentSelectors:L,decls:1,vars:0,template:function(o,t){o&1&&(k(),P(0))},dependencies:[M,C],encapsulation:2,changeDetection:0})}return n})(),Ye=(()=>{class n extends S{$pcAccordionHeader=i(Ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=i(r,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}pcAccordion=i(D(()=>U));pcAccordionPanel=i(D(()=>ne));id=s(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);active=s(()=>this.pcAccordionPanel.active());disabled=s(()=>this.pcAccordionPanel.disabled());ariaControls=s(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);toggleicon;onClick(e){if(this.disabled())return;let o=this.active();this.changeActiveValue();let t=this.active(),a=this.pcAccordionPanel.value();!o&&t?this.pcAccordion.onOpen.emit({originalEvent:e,index:a}):o&&!t&&this.pcAccordion.onClose.emit({originalEvent:e,index:a})}onFocus(){!this.disabled()&&this.pcAccordion.selectOnFocus()&&this.changeActiveValue()}onKeydown(e){switch(e.code){case"ArrowDown":this.arrowDownKey(e);break;case"ArrowUp":this.arrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"Space":case"NumpadEnter":this.onEnterKey(e);break;default:break}}_componentStyle=i(v);changeActiveValue(){this.pcAccordion.updateValue(this.pcAccordionPanel.value())}findPanel(e){return e?.closest('[data-pc-name="accordionpanel"]')}findHeader(e){return I(e,'[data-pc-name="accordionheader"]')}findNextPanel(e,o=!1){let t=o?e:e.nextElementSibling;return t?B(t,"data-p-disabled")?this.findNextPanel(t):this.findHeader(t):null}findPrevPanel(e,o=!1){let t=o?e:e.previousElementSibling;return t?B(t,"data-p-disabled")?this.findPrevPanel(t):this.findHeader(t):null}findFirstPanel(){return this.findNextPanel(this.pcAccordion.el.nativeElement.firstElementChild,!0)}findLastPanel(){return this.findPrevPanel(this.pcAccordion.el.nativeElement.lastElementChild,!0)}changeFocusedPanel(e,o){ee(o)}arrowDownKey(e){let o=this.findNextPanel(this.findPanel(e.currentTarget));o?this.changeFocusedPanel(e,o):this.onHomeKey(e),e.preventDefault()}arrowUpKey(e){let o=this.findPrevPanel(this.findPanel(e.currentTarget));o?this.changeFocusedPanel(e,o):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let o=this.findFirstPanel();this.changeFocusedPanel(e,o),e.preventDefault()}onEndKey(e){let o=this.findLastPanel();this.changeFocusedPanel(e,o),e.preventDefault()}onEnterKey(e){this.disabled()||this.changeActiveValue(),e.preventDefault()}static \u0275fac=(()=>{let e;return function(t){return(e||(e=u(n)))(t||n)}})();static \u0275cmp=F({type:n,selectors:[["p-accordion-header"],["p-accordionheader"]],contentQueries:function(o,t,a){if(o&1&&ce(a,Be,5),o&2){let c;se(c=le())&&(t.toggleicon=c.first)}},hostVars:12,hostBindings:function(o,t){o&1&&T("click",function(c){return t.onClick(c)})("focus",function(c){return t.onFocus(c)})("keydown",function(c){return t.onKeydown(c)}),o&2&&(h("id",t.id())("aria-expanded",t.active())("aria-controls",t.ariaControls())("aria-disabled",t.disabled())("role","button")("tabindex",t.disabled()?"-1":"0")("data-p-active",t.active())("data-p-disabled",t.disabled()),l(t.cx("header")),pe("user-select","none"))},features:[A([v,{provide:Ne,useExisting:n},{provide:_,useExisting:n}]),y([ye,r]),x],ngContentSelectors:L,decls:3,vars:1,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],["data-p-icon","chevron-up",3,"class","pBind",4,"ngIf"],[3,"pBind"],["data-p-icon","chevron-up",3,"pBind"],["data-p-icon","chevron-down",3,"pBind",4,"ngIf"],["data-p-icon","chevron-down",3,"pBind"]],template:function(o,t){o&1&&(k(),P(0),ie(1,Re,1,4)(2,Ge,2,2)),o&2&&(b(),ae(t.toggleicon?1:2))},dependencies:[M,ue,fe,be,xe,C,r],encapsulation:2,changeDetection:0})}return n})(),Je=(()=>{class n extends S{$pcAccordionContent=i(Fe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=i(r,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}pcAccordion=i(D(()=>U));pcAccordionPanel=i(D(()=>ne));active=s(()=>this.pcAccordionPanel.active());ariaLabelledby=s(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);id=s(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);_componentStyle=i(v);ptParams=s(()=>({context:this.active()}));static \u0275fac=(()=>{let e;return function(t){return(e||(e=u(n)))(t||n)}})();static \u0275cmp=F({type:n,selectors:[["p-accordion-content"],["p-accordioncontent"]],hostVars:6,hostBindings:function(o,t){o&2&&(h("id",t.id())("role","region")("data-p-active",t.active())("aria-labelledby",t.ariaLabelledby()),l(t.cx("contentContainer")))},features:[A([v,{provide:Fe,useExisting:n},{provide:_,useExisting:n}]),y([r]),x],ngContentSelectors:L,decls:2,vars:12,consts:[[3,"pBind"]],template:function(o,t){o&1&&(k(),re(0,"div",0),P(1),de()),o&2&&(l(t.cx("content")),d("@content",t.active()?w(6,Qe,w(4,we,t.pcAccordion.transitionOptions)):w(10,qe,w(8,we,t.pcAccordion.transitionOptions)))("pBind",t.ptm("content",t.ptParams())))},dependencies:[M,C,r],encapsulation:2,data:{animation:[he("content",[J("hidden",Y({height:"0",paddingBlockStart:"0",paddingBlockEnd:"0",borderBlockStartWidth:"0",borderBlockEndWidth:"0",visibility:"hidden"})),J("visible",Y({height:"*"})),Z("visible <=> hidden",[X("{{transitionParams}}")]),Z("void => *",X(0))])]},changeDetection:0})}return n})(),U=(()=>{class n extends S{$pcAccordion=i(He,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=i(r,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}value=W(void 0);multiple=g(!1,{transform:e=>$(e)});styleClass;expandIcon;collapseIcon;selectOnFocus=g(!1,{transform:e=>$(e)});transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";onClose=new N;onOpen=new N;id=te(ge("pn_id_"));_componentStyle=i(v);onKeydown(e){switch(e.code){case"ArrowDown":this.onTabArrowDownKey(e);break;case"ArrowUp":this.onTabArrowUpKey(e);break;case"Home":e.shiftKey||this.onTabHomeKey(e);break;case"End":e.shiftKey||this.onTabEndKey(e);break}}onTabArrowDownKey(e){let o=this.findNextHeaderAction(e.target.parentElement);o?this.changeFocusedTab(o):this.onTabHomeKey(e),e.preventDefault()}onTabArrowUpKey(e){let o=this.findPrevHeaderAction(e.target.parentElement);o?this.changeFocusedTab(o):this.onTabEndKey(e),e.preventDefault()}onTabHomeKey(e){let o=this.findFirstHeaderAction();this.changeFocusedTab(o),e.preventDefault()}changeFocusedTab(e){e&&ee(e)}findNextHeaderAction(e,o=!1){let t=o?e:e.nextElementSibling,a=I(t,'[data-pc-section="accordionheader"]');return a?B(a,"data-p-disabled")?this.findNextHeaderAction(a.parentElement):I(a.parentElement,'[data-pc-section="accordionheader"]'):null}findPrevHeaderAction(e,o=!1){let t=o?e:e.previousElementSibling,a=I(t,'[data-pc-section="accordionheader"]');return a?B(a,"data-p-disabled")?this.findPrevHeaderAction(a.parentElement):I(a.parentElement,'[data-pc-section="accordionheader"]'):null}findFirstHeaderAction(){let e=this.el.nativeElement.firstElementChild;return this.findNextHeaderAction(e,!0)}findLastHeaderAction(){let e=this.el.nativeElement.lastElementChild;return this.findPrevHeaderAction(e,!0)}onTabEndKey(e){let o=this.findLastHeaderAction();this.changeFocusedTab(o),e.preventDefault()}getBlockableElement(){return this.el.nativeElement.children[0]}updateValue(e){let o=this.value();if(this.multiple()){let t=Array.isArray(o)?[...o]:[],a=t.indexOf(e);a!==-1?t.splice(a,1):t.push(e),this.value.set(t)}else o===e?this.value.set(void 0):this.value.set(e)}static \u0275fac=(()=>{let e;return function(t){return(e||(e=u(n)))(t||n)}})();static \u0275cmp=F({type:n,selectors:[["p-accordion"]],hostVars:2,hostBindings:function(o,t){o&1&&T("keydown",function(c){return t.onKeydown(c)}),o&2&&l(t.cn(t.cx("root"),t.styleClass))},inputs:{value:[1,"value"],multiple:[1,"multiple"],styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",selectOnFocus:[1,"selectOnFocus"],transitionOptions:"transitionOptions"},outputs:{value:"valueChange",onClose:"onClose",onOpen:"onOpen"},features:[A([v,{provide:He,useExisting:n},{provide:_,useExisting:n}]),y([r]),x],ngContentSelectors:L,decls:1,vars:0,template:function(o,t){o&1&&(k(),P(0))},dependencies:[M,V,C],encapsulation:2,changeDetection:0})}return n})(),Vn=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=R({type:n});static \u0275inj=z({imports:[U,V,ne,Ye,Je,C,V,C]})}return n})();export{gn as a,vn as b,ne as c,Ye as d,Je as e,U as f,Vn as g};
