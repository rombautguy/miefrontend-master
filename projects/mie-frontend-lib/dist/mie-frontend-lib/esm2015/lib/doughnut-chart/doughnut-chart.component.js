/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import 'chart.piecelabel.js';
import 'chartjs-plugin-piechart-outlabels';
export class DoughnutChartComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DoughnutChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'mie-lib-doughnut-chart',
                template: `<div style="width: 50%;height:50%" *ngIf="chartvm">
	<canvas baseChart 
    [chartType]="chartvm.chartType"
    [data]="chartvm.chartData"
    [labels]="chartvm.chartLabels"
    [options]="chartvm.chartOptions">
  </canvas>
</div>`,
                styles: [``]
            },] },
];
/** @nocollapse */
DoughnutChartComponent.ctorParameters = () => [];
DoughnutChartComponent.propDecorators = {
    chartvm: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DoughnutChartComponent.prototype.chartvm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG91Z2hudXQtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWllLWZyb250ZW5kLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9kb3VnaG51dC1jaGFydC9kb3VnaG51dC1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxtQ0FBbUMsQ0FBQztBQWEzQyxNQUFNO0lBRUosaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7T0FPTDtnQkFDTCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7Ozs7c0JBRUUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICdjaGFydC5waWVjZWxhYmVsLmpzJztcbmltcG9ydCAnY2hhcnRqcy1wbHVnaW4tcGllY2hhcnQtb3V0bGFiZWxzJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21pZS1saWItZG91Z2hudXQtY2hhcnQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgc3R5bGU9XCJ3aWR0aDogNTAlO2hlaWdodDo1MCVcIiAqbmdJZj1cImNoYXJ0dm1cIj5cblx0PGNhbnZhcyBiYXNlQ2hhcnQgXG4gICAgW2NoYXJ0VHlwZV09XCJjaGFydHZtLmNoYXJ0VHlwZVwiXG4gICAgW2RhdGFdPVwiY2hhcnR2bS5jaGFydERhdGFcIlxuICAgIFtsYWJlbHNdPVwiY2hhcnR2bS5jaGFydExhYmVsc1wiXG4gICAgW29wdGlvbnNdPVwiY2hhcnR2bS5jaGFydE9wdGlvbnNcIj5cbiAgPC9jYW52YXM+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRG91Z2hudXRDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNoYXJ0dm07XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19