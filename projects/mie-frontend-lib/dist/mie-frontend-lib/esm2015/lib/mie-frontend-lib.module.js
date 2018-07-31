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
export class MieFrontendLibModule {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWllLWZyb250ZW5kLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taWUtZnJvbnRlbmQtbGliLyIsInNvdXJjZXMiOlsibGliL21pZS1mcm9udGVuZC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFlBQVksQ0FBQztBQUcxQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQW9CdkUsTUFBTTs7O1lBbEJMLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsV0FBVztvQkFDWCxZQUFZO29CQUNaLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLHVCQUF1QjtvQkFDdkIsa0JBQWtCO29CQUNsQixpQkFBaUI7b0JBQ2pCLHNCQUFzQjtpQkFDdkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHVCQUF1QjtvQkFDdkIsc0JBQXNCO29CQUN0QixrQkFBa0I7b0JBQ2xCLGlCQUFpQjtpQkFBQzthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXIgbW9kdWxlc1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLy8gdGhpcmQgcGFydHkgbW9kdWxlc1xuaW1wb3J0IHsgQ2hhcnRzTW9kdWxlIH0gZnJvbSAnbmcyLWNoYXJ0cyc7XG5cbi8vIGNvbXBvbmVudHNcbmltcG9ydCB7IE1pZUZyb250ZW5kTGliQ29tcG9uZW50IH0gZnJvbSAnLi9taWUtZnJvbnRlbmQtbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCYXJDaGFydENvbXBvbmVudCB9IGZyb20gJy4vYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG91Z2hudXRDaGFydENvbXBvbmVudCB9IGZyb20gJy4vZG91Z2hudXQtY2hhcnQvZG91Z2hudXQtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IExpbmVDaGFydENvbXBvbmVudCB9IGZyb20gJy4vbGluZS1jaGFydC9saW5lLWNoYXJ0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDaGFydHNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1pZUZyb250ZW5kTGliQ29tcG9uZW50LFxuICAgIExpbmVDaGFydENvbXBvbmVudCxcbiAgICBCYXJDaGFydENvbXBvbmVudCxcbiAgICBEb3VnaG51dENoYXJ0Q29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBNaWVGcm9udGVuZExpYkNvbXBvbmVudCxcbiAgICBEb3VnaG51dENoYXJ0Q29tcG9uZW50LFxuICAgIExpbmVDaGFydENvbXBvbmVudCxcbiAgICBCYXJDaGFydENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTWllRnJvbnRlbmRMaWJNb2R1bGUgeyB9XG4iXX0=