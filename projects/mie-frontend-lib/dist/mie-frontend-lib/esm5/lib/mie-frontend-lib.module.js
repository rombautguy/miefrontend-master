/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { MieFrontendLibComponent } from './mie-frontend-lib.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
var MieFrontendLibModule = /** @class */ (function () {
    function MieFrontendLibModule() {
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
    return MieFrontendLibModule;
}());
export { MieFrontendLibModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWllLWZyb250ZW5kLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taWUtZnJvbnRlbmQtbGliLyIsInNvdXJjZXMiOlsibGliL21pZS1mcm9udGVuZC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFlBQVksQ0FBQztBQUcxQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7Z0JBRXRFLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsV0FBVzt3QkFDWCxZQUFZO3dCQUNaLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHVCQUF1Qjt3QkFDdkIsa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHVCQUF1Qjt3QkFDdkIsc0JBQXNCO3dCQUN0QixrQkFBa0I7d0JBQ2xCLGlCQUFpQjtxQkFBQztpQkFDckI7OytCQS9CRDs7U0FnQ2Esb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhciBtb2R1bGVzXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vLyB0aGlyZCBwYXJ0eSBtb2R1bGVzXG5pbXBvcnQgeyBDaGFydHNNb2R1bGUgfSBmcm9tICduZzItY2hhcnRzJztcblxuLy8gY29tcG9uZW50c1xuaW1wb3J0IHsgTWllRnJvbnRlbmRMaWJDb21wb25lbnQgfSBmcm9tICcuL21pZS1mcm9udGVuZC1saWIuY29tcG9uZW50JztcbmltcG9ydCB7IEJhckNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9iYXItY2hhcnQvYmFyLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb3VnaG51dENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9kb3VnaG51dC1jaGFydC9kb3VnaG51dC1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGluZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIENoYXJ0c01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWllRnJvbnRlbmRMaWJDb21wb25lbnQsXG4gICAgTGluZUNoYXJ0Q29tcG9uZW50LFxuICAgIEJhckNoYXJ0Q29tcG9uZW50LFxuICAgIERvdWdobnV0Q2hhcnRDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE1pZUZyb250ZW5kTGliQ29tcG9uZW50LFxuICAgIERvdWdobnV0Q2hhcnRDb21wb25lbnQsXG4gICAgTGluZUNoYXJ0Q29tcG9uZW50LFxuICAgIEJhckNoYXJ0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNaWVGcm9udGVuZExpYk1vZHVsZSB7IH1cbiJdfQ==