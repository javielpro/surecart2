import{h}from"@stencil/core";import{__}from"@wordpress/i18n";import{state as checkoutState,onChange as onCheckoutChange}from"@store/checkout";import{shippingAddressRequired}from"@store/checkout/getters";export class ScFormComponentsValidator{constructor(){this.disabled=void 0,this.taxProtocol=void 0,this.hasAddress=void 0,this.hasTaxIDField=void 0,this.hasBumpsField=void 0,this.hasTaxLine=void 0,this.hasBumpLine=void 0,this.hasShippingChoices=void 0,this.hasShippingAmount=void 0}handleOrderChange(){var e,t,i,s,o,r,n;this.disabled||(shippingAddressRequired()&&this.addAddressField(),(null===(i=null===(t=null===(e=checkoutState.checkout)||void 0===e?void 0:e.recommended_bumps)||void 0===t?void 0:t.data)||void 0===i?void 0:i.length)&&this.addBumps(),(null===(s=checkoutState.checkout)||void 0===s?void 0:s.tax_amount)&&this.addTaxLine(),(null===(o=checkoutState.checkout)||void 0===o?void 0:o.shipping_enabled)&&(null===(r=checkoutState.checkout)||void 0===r?void 0:r.selected_shipping_choice_required)&&this.addShippingChoices(),(null===(n=checkoutState.checkout)||void 0===n?void 0:n.shipping_amount)&&this.addShippingAmount())}handleHasAddressChange(){this.hasAddress&&this.handleShippingAddressRequired()}componentWillLoad(){var e,t;this.hasAddress=!!this.el.querySelector("sc-order-shipping-address"),this.hasTaxIDField=!!this.el.querySelector("sc-order-tax-id-input"),this.hasBumpsField=!!this.el.querySelector("sc-order-bumps"),this.hasTaxLine=!!this.el.querySelector("sc-line-item-tax"),this.hasShippingChoices=!!this.el.querySelector("sc-shipping-choices"),this.hasShippingAmount=!!this.el.querySelector("sc-line-item-shipping"),(null===(e=this.taxProtocol)||void 0===e?void 0:e.tax_enabled)&&(this.addAddressField(),(null===(t=this.taxProtocol)||void 0===t?void 0:t.eu_vat_required)&&this.addTaxIDField()),this.removeCheckoutListener=onCheckoutChange("checkout",(()=>this.handleOrderChange())),this.removePaymentRequiresShippingListener=onCheckoutChange("paymentMethodRequiresShipping",(()=>this.handleOrderChange()))}disconnectedCallback(){this.removeCheckoutListener(),this.removePaymentRequiresShippingListener()}handleShippingAddressRequired(){var e;if(!(null===(e=checkoutState.checkout)||void 0===e?void 0:e.shipping_address_required))return;const t=this.el.querySelector("sc-order-shipping-address");if(!t)return;t.required=!0;const i=this.el.querySelector("sc-customer-name");i?i.required=!0:(t.requireName=!0,t.showName=!0)}addAddressField(){if(this.hasAddress)return;const e=this.el.querySelector("sc-payment"),t=document.createElement("sc-order-shipping-address");t.label=__("Address","surecart"),e.parentNode.insertBefore(t,e),this.hasAddress=!0}addTaxIDField(){if(this.hasTaxIDField)return;const e=this.el.querySelector("sc-payment"),t=document.createElement("sc-order-tax-id-input");e.parentNode.insertBefore(t,e),this.hasTaxIDField=!0}addBumps(){if(this.hasBumpsField)return;const e=this.el.querySelector("sc-order-billing-address")||this.el.querySelector("sc-payment"),t=document.createElement("sc-order-bumps");null==e||e.parentNode.insertBefore(t,e.nextSibling),this.hasBumpsField=!0}addTaxLine(){var e;if(this.hasTaxLine)return;const t=this.el.querySelector("sc-line-item-total[total=total]"),i=document.createElement("sc-line-item-tax");t&&("SC-DIVIDER"===(null===(e=null==t?void 0:t.previousElementSibling)||void 0===e?void 0:e.tagName)?t.parentNode.insertBefore(i,t.previousElementSibling):t.parentNode.insertBefore(i,t),this.hasTaxLine=!0)}addShippingChoices(){if(this.hasShippingChoices)return;const e=this.el.querySelector("sc-payment"),t=document.createElement("sc-shipping-choices");e.parentNode.insertBefore(t,e),this.hasShippingChoices=!0}addShippingAmount(){var e;if(this.hasShippingAmount)return;let t=this.el.querySelector("sc-line-item-tax");const i=this.el.querySelector("sc-line-item-total[total=total]");if(!i)return;t||(t="SC-DIVIDER"===(null===(e=null==i?void 0:i.previousElementSibling)||void 0===e?void 0:e.tagName)?i.previousElementSibling:i);const s=document.createElement("sc-line-item-shipping");t.parentNode.insertBefore(s,t),this.hasShippingAmount=!0}render(){return h("slot",null)}static get is(){return"sc-form-components-validator"}static get encapsulation(){return"shadow"}static get properties(){return{disabled:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Disable validation?"},attribute:"disabled",reflect:!1},taxProtocol:{type:"unknown",mutable:!1,complexType:{original:"TaxProtocol",resolved:"TaxProtocol",references:{TaxProtocol:{location:"import",path:"../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:"The tax protocol"}}}}static get states(){return{hasAddress:{},hasTaxIDField:{},hasBumpsField:{},hasTaxLine:{},hasBumpLine:{},hasShippingChoices:{},hasShippingAmount:{}}}static get elementRef(){return"el"}static get watchers(){return[{propName:"hasAddress",methodName:"handleHasAddressChange"}]}}