/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import 'chart.piecelabel.js';
import 'chartjs-plugin-piechart-outlabels';
var LineChartComponent = /** @class */ (function () {
    function LineChartComponent() {
    }
    /**
     * @return {?}
     */
    LineChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    LineChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mie-lib-line-chart',
                    template: "<div style=\"width: 50%;height:50%\" *ngIf=\"chartvm\">\n\t<canvas baseChart \n    [chartType]=\"chartvm.chartType\"\n    [data]=\"chartvm.chartData\"\n    [labels]=\"chartvm.chartLabels\"\n    [options]=\"chartvm.chartOptions\">\n  </canvas>\n</div>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    LineChartComponent.ctorParameters = function () { return []; };
    LineChartComponent.propDecorators = {
        chartvm: [{ type: Input }]
    };
    return LineChartComponent;
}());
export { LineChartComponent };
if (false) {
    /** @type {?} */
    LineChartComponent.prototype.chartvm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taWUtZnJvbnRlbmQtbGliLyIsInNvdXJjZXMiOlsibGliL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxtQ0FBbUMsQ0FBQzs7SUFlekM7S0FBaUI7Ozs7SUFFakIscUNBQVE7OztJQUFSO0tBQ0M7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLDRQQU9MO29CQUNMLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDYjs7Ozs7MEJBRUUsS0FBSzs7NkJBaEJSOztTQWVhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICdjaGFydC5waWVjZWxhYmVsLmpzJztcbmltcG9ydCAnY2hhcnRqcy1wbHVnaW4tcGllY2hhcnQtb3V0bGFiZWxzJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21pZS1saWItbGluZS1jaGFydCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBzdHlsZT1cIndpZHRoOiA1MCU7aGVpZ2h0OjUwJVwiICpuZ0lmPVwiY2hhcnR2bVwiPlxuXHQ8Y2FudmFzIGJhc2VDaGFydCBcbiAgICBbY2hhcnRUeXBlXT1cImNoYXJ0dm0uY2hhcnRUeXBlXCJcbiAgICBbZGF0YV09XCJjaGFydHZtLmNoYXJ0RGF0YVwiXG4gICAgW2xhYmVsc109XCJjaGFydHZtLmNoYXJ0TGFiZWxzXCJcbiAgICBbb3B0aW9uc109XCJjaGFydHZtLmNoYXJ0T3B0aW9uc1wiPlxuICA8L2NhbnZhcz5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBMaW5lQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjaGFydHZtO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==