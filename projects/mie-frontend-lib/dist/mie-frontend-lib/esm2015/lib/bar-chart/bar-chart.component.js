/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import 'chart.piecelabel.js';
import 'chartjs-plugin-piechart-outlabels';
export class BarChartComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BarChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'mie-lib-bar-chart',
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
BarChartComponent.ctorParameters = () => [];
BarChartComponent.propDecorators = {
    chartvm: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BarChartComponent.prototype.chartvm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21pZS1mcm9udGVuZC1saWIvIiwic291cmNlcyI6WyJsaWIvYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxtQ0FBbUMsQ0FBQztBQWMzQyxNQUFNO0lBRUosaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7T0FPTDtnQkFDTCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7Ozs7c0JBRUUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICdjaGFydC5waWVjZWxhYmVsLmpzJztcbmltcG9ydCAnY2hhcnRqcy1wbHVnaW4tcGllY2hhcnQtb3V0bGFiZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWllLWxpYi1iYXItY2hhcnQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgc3R5bGU9XCJ3aWR0aDogNTAlO2hlaWdodDo1MCVcIiAqbmdJZj1cImNoYXJ0dm1cIj5cblx0PGNhbnZhcyBiYXNlQ2hhcnQgXG4gICAgW2NoYXJ0VHlwZV09XCJjaGFydHZtLmNoYXJ0VHlwZVwiXG4gICAgW2RhdGFdPVwiY2hhcnR2bS5jaGFydERhdGFcIlxuICAgIFtsYWJlbHNdPVwiY2hhcnR2bS5jaGFydExhYmVsc1wiXG4gICAgW29wdGlvbnNdPVwiY2hhcnR2bS5jaGFydE9wdGlvbnNcIj5cbiAgPC9jYW52YXM+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgQmFyQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjaGFydHZtO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==