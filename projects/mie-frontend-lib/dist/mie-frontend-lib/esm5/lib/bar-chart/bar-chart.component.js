/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import 'chart.piecelabel.js';
import 'chartjs-plugin-piechart-outlabels';
var BarChartComponent = /** @class */ (function () {
    function BarChartComponent() {
    }
    /**
     * @return {?}
     */
    BarChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BarChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mie-lib-bar-chart',
                    template: "<div style=\"width: 50%;height:50%\" *ngIf=\"chartvm\">\n\t<canvas baseChart \n    [chartType]=\"chartvm.chartType\"\n    [data]=\"chartvm.chartData\"\n    [labels]=\"chartvm.chartLabels\"\n    [options]=\"chartvm.chartOptions\">\n  </canvas>\n</div>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    BarChartComponent.ctorParameters = function () { return []; };
    BarChartComponent.propDecorators = {
        chartvm: [{ type: Input }]
    };
    return BarChartComponent;
}());
export { BarChartComponent };
if (false) {
    /** @type {?} */
    BarChartComponent.prototype.chartvm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pZS1mcm9udGVuZC1saWIvIiwic291cmNlcyI6WyJsaWIvYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxtQ0FBbUMsQ0FBQzs7SUFnQnpDO0tBQWlCOzs7O0lBRWpCLG9DQUFROzs7SUFBUjtLQUNDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSw0UEFPTDtvQkFDTCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2I7Ozs7OzBCQUVFLEtBQUs7OzRCQWpCUjs7U0FnQmEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgJ2NoYXJ0LnBpZWNlbGFiZWwuanMnO1xuaW1wb3J0ICdjaGFydGpzLXBsdWdpbi1waWVjaGFydC1vdXRsYWJlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtaWUtbGliLWJhci1jaGFydCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBzdHlsZT1cIndpZHRoOiA1MCU7aGVpZ2h0OjUwJVwiICpuZ0lmPVwiY2hhcnR2bVwiPlxuXHQ8Y2FudmFzIGJhc2VDaGFydCBcbiAgICBbY2hhcnRUeXBlXT1cImNoYXJ0dm0uY2hhcnRUeXBlXCJcbiAgICBbZGF0YV09XCJjaGFydHZtLmNoYXJ0RGF0YVwiXG4gICAgW2xhYmVsc109XCJjaGFydHZtLmNoYXJ0TGFiZWxzXCJcbiAgICBbb3B0aW9uc109XCJjaGFydHZtLmNoYXJ0T3B0aW9uc1wiPlxuICA8L2NhbnZhcz5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBCYXJDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNoYXJ0dm07XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19