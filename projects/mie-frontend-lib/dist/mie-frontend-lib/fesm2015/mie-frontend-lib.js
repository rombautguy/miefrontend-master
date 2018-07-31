import { Injectable, Component, NgModule, Input, defineInjectable } from '@angular/core';
import 'chart.piecelabel.js';
import 'chartjs-plugin-piechart-outlabels';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MieFrontendLibService {
    constructor() { }
}
MieFrontendLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
MieFrontendLibService.ctorParameters = () => [];
/** @nocollapse */ MieFrontendLibService.ngInjectableDef = defineInjectable({ factory: function MieFrontendLibService_Factory() { return new MieFrontendLibService(); }, token: MieFrontendLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MieFrontendLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MieFrontendLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-mie-frontend-lib',
                template: `
    <p>
      mie-frontend-lib works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
MieFrontendLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DoughnutChartComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LineChartComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LineChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'mie-lib-line-chart',
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
LineChartComponent.ctorParameters = () => [];
LineChartComponent.propDecorators = {
    chartvm: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class BarChartComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ChartViewModel {
    /**
     * @param {?} _chartData
     * @param {?} _chartLabels
     * @param {?=} _chartType
     * @param {?=} _chartOptions
     * @param {?=} _chartLegend
     * @param {?=} _chartColors
     */
    constructor(_chartData, _chartLabels, _chartType, _chartOptions, _chartLegend, _chartColors) {
        this.chartData = _chartData;
        this.chartLabels = _chartLabels;
        this.chartOptions = _chartOptions;
        this.chartLegend = _chartLegend;
        this.chartType = _chartType;
        this.chartColors = _chartColors;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MieFrontendLibModule {
}
MieFrontendLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                    ChartsModule,
                    CommonModule
                ],
                declarations: [
                    MieFrontendLibComponent,
                    LineChartComponent,
                    BarChartComponent,
                    DoughnutChartComponent
                ],
                exports: [
                    MieFrontendLibComponent,
                    DoughnutChartComponent,
                    LineChartComponent,
                    BarChartComponent
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { MieFrontendLibService, MieFrontendLibComponent, DoughnutChartComponent, LineChartComponent, BarChartComponent, ChartViewModel, MieFrontendLibModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWllLWZyb250ZW5kLWxpYi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbWllLWZyb250ZW5kLWxpYi9saWIvbWllLWZyb250ZW5kLWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9taWUtZnJvbnRlbmQtbGliL2xpYi9taWUtZnJvbnRlbmQtbGliLmNvbXBvbmVudC50cyIsIm5nOi8vbWllLWZyb250ZW5kLWxpYi9saWIvZG91Z2hudXQtY2hhcnQvZG91Z2hudXQtY2hhcnQuY29tcG9uZW50LnRzIiwibmc6Ly9taWUtZnJvbnRlbmQtbGliL2xpYi9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LnRzIiwibmc6Ly9taWUtZnJvbnRlbmQtbGliL2xpYi9iYXItY2hhcnQvYmFyLWNoYXJ0LmNvbXBvbmVudC50cyIsIm5nOi8vbWllLWZyb250ZW5kLWxpYi9saWIvdmlld21vZGVscy9jaGFydHZpZXdtb2RlbC50cyIsIm5nOi8vbWllLWZyb250ZW5kLWxpYi9saWIvbWllLWZyb250ZW5kLWxpYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNaWVGcm9udGVuZExpYlNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbWllLWZyb250ZW5kLWxpYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBtaWUtZnJvbnRlbmQtbGliIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNaWVGcm9udGVuZExpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAnY2hhcnQucGllY2VsYWJlbC5qcyc7XG5pbXBvcnQgJ2NoYXJ0anMtcGx1Z2luLXBpZWNoYXJ0LW91dGxhYmVscyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtaWUtbGliLWRvdWdobnV0LWNoYXJ0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IHN0eWxlPVwid2lkdGg6IDUwJTtoZWlnaHQ6NTAlXCIgKm5nSWY9XCJjaGFydHZtXCI+XG5cdDxjYW52YXMgYmFzZUNoYXJ0IFxuICAgIFtjaGFydFR5cGVdPVwiY2hhcnR2bS5jaGFydFR5cGVcIlxuICAgIFtkYXRhXT1cImNoYXJ0dm0uY2hhcnREYXRhXCJcbiAgICBbbGFiZWxzXT1cImNoYXJ0dm0uY2hhcnRMYWJlbHNcIlxuICAgIFtvcHRpb25zXT1cImNoYXJ0dm0uY2hhcnRPcHRpb25zXCI+XG4gIDwvY2FudmFzPlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIERvdWdobnV0Q2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjaGFydHZtO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICdjaGFydC5waWVjZWxhYmVsLmpzJztcbmltcG9ydCAnY2hhcnRqcy1wbHVnaW4tcGllY2hhcnQtb3V0bGFiZWxzJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21pZS1saWItbGluZS1jaGFydCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBzdHlsZT1cIndpZHRoOiA1MCU7aGVpZ2h0OjUwJVwiICpuZ0lmPVwiY2hhcnR2bVwiPlxuXHQ8Y2FudmFzIGJhc2VDaGFydCBcbiAgICBbY2hhcnRUeXBlXT1cImNoYXJ0dm0uY2hhcnRUeXBlXCJcbiAgICBbZGF0YV09XCJjaGFydHZtLmNoYXJ0RGF0YVwiXG4gICAgW2xhYmVsc109XCJjaGFydHZtLmNoYXJ0TGFiZWxzXCJcbiAgICBbb3B0aW9uc109XCJjaGFydHZtLmNoYXJ0T3B0aW9uc1wiPlxuICA8L2NhbnZhcz5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBMaW5lQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjaGFydHZtO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICdjaGFydC5waWVjZWxhYmVsLmpzJztcbmltcG9ydCAnY2hhcnRqcy1wbHVnaW4tcGllY2hhcnQtb3V0bGFiZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWllLWxpYi1iYXItY2hhcnQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgc3R5bGU9XCJ3aWR0aDogNTAlO2hlaWdodDo1MCVcIiAqbmdJZj1cImNoYXJ0dm1cIj5cblx0PGNhbnZhcyBiYXNlQ2hhcnQgXG4gICAgW2NoYXJ0VHlwZV09XCJjaGFydHZtLmNoYXJ0VHlwZVwiXG4gICAgW2RhdGFdPVwiY2hhcnR2bS5jaGFydERhdGFcIlxuICAgIFtsYWJlbHNdPVwiY2hhcnR2bS5jaGFydExhYmVsc1wiXG4gICAgW29wdGlvbnNdPVwiY2hhcnR2bS5jaGFydE9wdGlvbnNcIj5cbiAgPC9jYW52YXM+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgQmFyQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjaGFydHZtO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBDaGFydFZpZXdNb2RlbCB7XG4gIGNoYXJ0RGF0YTogQXJyYXk8YW55PjtcbiAgY2hhcnRMYWJlbHM6IEFycmF5PGFueT47XG4gIGNoYXJ0T3B0aW9uczogYW55O1xuICBjaGFydERvd25sb2FkT3B0aW9uczogYW55O1xuICBjaGFydExlZ2VuZDogYm9vbGVhbjtcbiAgY2hhcnRUeXBlOiBzdHJpbmc7XG4gIGNoYXJ0Q29sb3JzOiBBcnJheTxhbnk+O1xuICBjaGFydERvd25sb2FkQ29sb3JzOiBBcnJheTxhbnk+O1xuICBjb25zdHJ1Y3RvcihcbiAgICBfY2hhcnREYXRhOiBBcnJheTxhbnk+LFxuICAgIF9jaGFydExhYmVsczogQXJyYXk8YW55PixcbiAgICBfY2hhcnRUeXBlPzogc3RyaW5nLFxuICAgIF9jaGFydE9wdGlvbnM/OiBhbnksXG4gICAgX2NoYXJ0TGVnZW5kPzogYm9vbGVhbixcbiAgICBfY2hhcnRDb2xvcnM/OiBBcnJheTxhbnk+LFxuICApIHtcbiAgICB0aGlzLmNoYXJ0RGF0YSA9IF9jaGFydERhdGE7XG4gICAgdGhpcy5jaGFydExhYmVscyA9IF9jaGFydExhYmVscztcbiAgICB0aGlzLmNoYXJ0T3B0aW9ucyA9IF9jaGFydE9wdGlvbnM7XG4gICAgdGhpcy5jaGFydExlZ2VuZCA9IF9jaGFydExlZ2VuZDtcbiAgICB0aGlzLmNoYXJ0VHlwZSA9IF9jaGFydFR5cGU7XG4gICAgdGhpcy5jaGFydENvbG9ycyA9IF9jaGFydENvbG9ycztcbiAgfVxufVxuIiwiLy8gYW5ndWxhciBtb2R1bGVzXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vLyB0aGlyZCBwYXJ0eSBtb2R1bGVzXG5pbXBvcnQgeyBDaGFydHNNb2R1bGUgfSBmcm9tICduZzItY2hhcnRzJztcblxuLy8gY29tcG9uZW50c1xuaW1wb3J0IHsgTWllRnJvbnRlbmRMaWJDb21wb25lbnQgfSBmcm9tICcuL21pZS1mcm9udGVuZC1saWIuY29tcG9uZW50JztcbmltcG9ydCB7IEJhckNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9iYXItY2hhcnQvYmFyLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb3VnaG51dENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9kb3VnaG51dC1jaGFydC9kb3VnaG51dC1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGluZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIENoYXJ0c01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWllRnJvbnRlbmRMaWJDb21wb25lbnQsXG4gICAgTGluZUNoYXJ0Q29tcG9uZW50LFxuICAgIEJhckNoYXJ0Q29tcG9uZW50LFxuICAgIERvdWdobnV0Q2hhcnRDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE1pZUZyb250ZW5kTGliQ29tcG9uZW50LFxuICAgIERvdWdobnV0Q2hhcnRDb21wb25lbnQsXG4gICAgTGluZUNoYXJ0Q29tcG9uZW50LFxuICAgIEJhckNoYXJ0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNaWVGcm9udGVuZExpYk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0lBT0UsaUJBQWlCOzs7WUFMbEIsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0FDSkQ7SUFhRSxpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUNQOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFOzs7O0dBSVQ7Z0JBQ0QsTUFBTSxFQUFFLEVBQUU7YUFDWDs7Ozs7Ozs7O0FDVkQ7SUFpQkUsaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7T0FPTDtnQkFDTCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7Ozs7c0JBRUUsS0FBSzs7Ozs7OztBQ2hCUjtJQWlCRSxpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUNQOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7Ozs7OztPQU9MO2dCQUNMLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNiOzs7OztzQkFFRSxLQUFLOzs7Ozs7O0FDaEJSO0lBa0JFLGlCQUFpQjs7OztJQUVqQixRQUFRO0tBQ1A7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFOzs7Ozs7O09BT0w7Z0JBQ0wsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7Ozs7O3NCQUVFLEtBQUs7Ozs7Ozs7QUNqQlI7Ozs7Ozs7OztJQVNFLFlBQ0UsVUFBc0IsRUFDdEIsWUFBd0IsRUFDeEIsVUFBbUIsRUFDbkIsYUFBbUIsRUFDbkIsWUFBc0IsRUFDdEIsWUFBeUI7UUFFekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUM7S0FDakM7Q0FDRjs7Ozs7O0FDdkJEOzs7WUFhQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWix1QkFBdUI7b0JBQ3ZCLGtCQUFrQjtvQkFDbEIsaUJBQWlCO29CQUNqQixzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx1QkFBdUI7b0JBQ3ZCLHNCQUFzQjtvQkFDdEIsa0JBQWtCO29CQUNsQixpQkFBaUI7aUJBQUM7YUFDckI7Ozs7Ozs7Ozs7Ozs7OzsifQ==