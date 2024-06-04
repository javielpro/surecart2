import{proxyCustomElement,HTMLElement,createEvent,h,Host}from"@stencil/core/internal/client";import{s as state}from"./mutations2.js";import{c as updateCheckout}from"./index4.js";import{c as currentFormState}from"./getters3.js";import{d as defineCustomElement$c}from"./sc-alert2.js";import{d as defineCustomElement$b}from"./sc-block-ui2.js";import{d as defineCustomElement$a}from"./sc-button2.js";import{d as defineCustomElement$9}from"./sc-card2.js";import{d as defineCustomElement$8}from"./sc-dashboard-module2.js";import{d as defineCustomElement$7}from"./sc-dialog2.js";import{d as defineCustomElement$6}from"./sc-flex2.js";import{d as defineCustomElement$5}from"./sc-icon2.js";import{d as defineCustomElement$4}from"./sc-spinner2.js";import{d as defineCustomElement$3}from"./sc-table2.js";import{d as defineCustomElement$2}from"./sc-table-cell2.js";import{d as defineCustomElement$1}from"./sc-table-row2.js";const scCheckoutStockAlertCss=":host{display:block}sc-table{height:auto}h4{display:block;margin:0;font-weight:var(--sc-font-weight-bold);font-size:var(--sc-font-size-medium)}.stock-alert{--body-spacing:var(--sc-spacing-x-large);--width:500px}.stock-alert__image{width:50px;height:50px;object-fit:cover;margin-right:10px;display:block}.stock-alert__quantity{color:var(--sc-color-gray-500);font-weight:var(--sc-font-weight-bold);display:flex;align-items:center;justify-content:flex-end;gap:var(--sc-spacing-xx-small)}",ScCheckoutStockAlert=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scUpdateLineItem=createEvent(this,"scUpdateLineItem",7),this.stockErrors=[],this.busy=void 0,this.error=void 0}getOutOfStockLineItems(){var t,e;return((null===(e=null===(t=state.checkout)||void 0===t?void 0:t.line_items)||void 0===e?void 0:e.data)||[]).filter((t=>{var e,s,o;const l=null===(e=t.price)||void 0===e?void 0:e.product;if((null==l?void 0:l.stock_enabled)&&!(null==l?void 0:l.allow_out_of_stock_purchases))return(null===(s=null==t?void 0:t.variant)||void 0===s?void 0:s.id)?(null===(o=null==t?void 0:t.variant)||void 0===o?void 0:o.available_stock)<t.quantity:(null==l?void 0:l.available_stock)<t.quantity}))}async onSubmit(){const t=this.getOutOfStockLineItems().map((t=>{var e,s,o;const l=null===(e=t.price)||void 0===e?void 0:e.product;return(null===(s=null==t?void 0:t.variant)||void 0===s?void 0:s.id)?{...t,quantity:Math.max((null===(o=null==t?void 0:t.variant)||void 0===o?void 0:o.available_stock)||0,0)}:{...t,quantity:Math.max((null==l?void 0:l.available_stock)||0,0)}}));try{this.busy=!0,state.checkout=await updateCheckout({id:state.checkout.id,data:{line_items:(t||[]).filter((t=>!!t.quantity)).map((t=>{var e,s;return{id:t.id,price_id:null===(e=t.price)||void 0===e?void 0:e.id,quantity:t.quantity,...(null===(s=null==t?void 0:t.variant)||void 0===s?void 0:s.id)?{variant:t.variant.id}:{}}}))}})}catch(t){const e=((null==t?void 0:t.additional_errors)||[]).map((t=>null==t?void 0:t.message)).filter((t=>t));this.error=`${(null==t?void 0:t.message)||wp.i18n.__("Something went wrong.","surecart")} ${(null==e?void 0:e.length)&&` ${e.join(". ")}`}`}finally{this.busy=!1}}render(){const t=(this.getOutOfStockLineItems()||[]).map((t=>{var e,s,o,l,i,a;const n=null===(e=t.price)||void 0===e?void 0:e.product,c="string"!=typeof(null===(s=null==t?void 0:t.variant)||void 0===s?void 0:s.image)?null===(l=null===(o=null==t?void 0:t.variant)||void 0===o?void 0:o.image)||void 0===l?void 0:l.url:null,r=(null===(i=null==t?void 0:t.variant)||void 0===i?void 0:i.id)?null===(a=null==t?void 0:t.variant)||void 0===a?void 0:a.available_stock:null==n?void 0:n.available_stock;return{name:null==n?void 0:n.name,image_url:c||(null==n?void 0:n.image_url),quantity:t.quantity,available_stock:r}})),e=null==t?void 0:t.some((t=>(null==t?void 0:t.available_stock)<1));return h(Host,null,h("sc-dialog",{open:!!t.length&&"draft"===currentFormState(),noHeader:!0,onScRequestClose:t=>t.preventDefault(),class:"stock-alert"},h("sc-dashboard-module",{class:"subscription-cancel",error:this.error,style:{"--sc-dashboard-module-spacing":"1em"}},h("sc-flex",{slot:"heading","align-items":"center","justify-content":"flex-start"},h("sc-icon",{name:"alert-circle",style:{color:"var(--sc-color-primary-500"}}),e?wp.i18n.__("Out of Stock","surecart"):wp.i18n.__("Quantity Update","surecart")),h("span",{slot:"description"},e?wp.i18n.__("Some items are no longer available. Your cart will be updated.","surecart"):wp.i18n.__("Available quantities for these items have changed. Your cart will be updated.","surecart")),h("sc-card",{"no-padding":!0},h("sc-table",null,h("sc-table-cell",{slot:"head"},wp.i18n.__("Description","surecart")),h("sc-table-cell",{slot:"head",style:{width:"100px",textAlign:"right"}},wp.i18n.__("Quantity","surecart")),t.map(((e,s)=>{const o=s===t.length-1;return h("sc-table-row",{style:{"--columns":"2",...o?{border:"none"}:{}}},h("sc-table-cell",null,h("sc-flex",{justifyContent:"flex-start",alignItems:"center"},h("img",{class:"stock-alert__image",src:`https://surecart.com/cdn-cgi/image/fit=scale-down,format=auto,width=100/${null==e?void 0:e.image_url}`}),h("h4",null,e.name))),h("sc-table-cell",{style:{width:"100px",textAlign:"right"}},h("span",{class:"stock-alert__quantity"},h("span",null,null==e?void 0:e.quantity)," ",h("sc-icon",{name:"arrow-right"})," ",h("span",null,Math.max(null==e?void 0:e.available_stock,0)))))}))))),h("sc-button",{slot:"footer",type:"primary",loading:this.busy,onClick:()=>this.onSubmit()},wp.i18n.__("Continue","surecart"),h("sc-icon",{name:"arrow-right",slot:"suffix"})),this.busy&&h("sc-block-ui",{spinner:!0})))}static get style(){return scCheckoutStockAlertCss}},[1,"sc-checkout-stock-alert",{stockErrors:[32],busy:[32],error:[32]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-checkout-stock-alert","sc-alert","sc-block-ui","sc-button","sc-card","sc-dashboard-module","sc-dialog","sc-flex","sc-icon","sc-spinner","sc-table","sc-table-cell","sc-table-row"].forEach((t=>{switch(t){case"sc-checkout-stock-alert":customElements.get(t)||customElements.define(t,ScCheckoutStockAlert);break;case"sc-alert":customElements.get(t)||defineCustomElement$c();break;case"sc-block-ui":customElements.get(t)||defineCustomElement$b();break;case"sc-button":customElements.get(t)||defineCustomElement$a();break;case"sc-card":customElements.get(t)||defineCustomElement$9();break;case"sc-dashboard-module":customElements.get(t)||defineCustomElement$8();break;case"sc-dialog":customElements.get(t)||defineCustomElement$7();break;case"sc-flex":customElements.get(t)||defineCustomElement$6();break;case"sc-icon":customElements.get(t)||defineCustomElement$5();break;case"sc-spinner":customElements.get(t)||defineCustomElement$4();break;case"sc-table":customElements.get(t)||defineCustomElement$3();break;case"sc-table-cell":customElements.get(t)||defineCustomElement$2();break;case"sc-table-row":customElements.get(t)||defineCustomElement$1()}}))}export{ScCheckoutStockAlert as S,defineCustomElement as d};