(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('chart.piecelabel.js'), require('chartjs-plugin-piechart-outlabels'), require('@angular/forms'), require('@angular/common'), require('ng2-charts')) :
    typeof define === 'function' && define.amd ? define('mie-frontend-lib', ['exports', '@angular/core', 'chart.piecelabel.js', 'chartjs-plugin-piechart-outlabels', '@angular/forms', '@angular/common', 'ng2-charts'], factory) :
    (factory((global['mie-frontend-lib'] = {}),global.ng.core,null,null,global.ng.forms,global.ng.common,null));
}(this, (function (exports,i0,chart_piecelabel_js,chartjsPluginPiechartOutlabels,forms,common,ng2Charts) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MieFrontendLibService = (function () {
        function MieFrontendLibService() {
        }
        MieFrontendLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        MieFrontendLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ MieFrontendLibService.ngInjectableDef = i0.defineInjectable({ factory: function MieFrontendLibService_Factory() { return new MieFrontendLibService(); }, token: MieFrontendLibService, providedIn: "root" });
        return MieFrontendLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MieFrontendLibComponent = (function () {
        function MieFrontendLibComponent() {
        }
        /**
         * @return {?}
         */
        MieFrontendLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MieFrontendLibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-mie-frontend-lib',
                        template: "\n    <p>\n      mie-frontend-lib works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        MieFrontendLibComponent.ctorParameters = function () { return []; };
        return MieFrontendLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DoughnutChartComponent = (function () {
        function DoughnutChartComponent() {
        }
        /**
         * @return {?}
         */
        DoughnutChartComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        DoughnutChartComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mie-lib-doughnut-chart',
                        template: "<div style=\"width: 50%;height:50%\" *ngIf=\"chartvm\">\n\t<canvas baseChart \n    [chartType]=\"chartvm.chartType\"\n    [data]=\"chartvm.chartData\"\n    [labels]=\"chartvm.chartLabels\"\n    [options]=\"chartvm.chartOptions\">\n  </canvas>\n</div>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        DoughnutChartComponent.ctorParameters = function () { return []; };
        DoughnutChartComponent.propDecorators = {
            chartvm: [{ type: i0.Input }]
        };
        return DoughnutChartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LineChartComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'mie-lib-line-chart',
                        template: "<div style=\"width: 50%;height:50%\" *ngIf=\"chartvm\">\n\t<canvas baseChart \n    [chartType]=\"chartvm.chartType\"\n    [data]=\"chartvm.chartData\"\n    [labels]=\"chartvm.chartLabels\"\n    [options]=\"chartvm.chartOptions\">\n  </canvas>\n</div>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        LineChartComponent.ctorParameters = function () { return []; };
        LineChartComponent.propDecorators = {
            chartvm: [{ type: i0.Input }]
        };
        return LineChartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BarChartComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'mie-lib-bar-chart',
                        template: "<div style=\"width: 50%;height:50%\" *ngIf=\"chartvm\">\n\t<canvas baseChart \n    [chartType]=\"chartvm.chartType\"\n    [data]=\"chartvm.chartData\"\n    [labels]=\"chartvm.chartLabels\"\n    [options]=\"chartvm.chartOptions\">\n  </canvas>\n</div>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        BarChartComponent.ctorParameters = function () { return []; };
        BarChartComponent.propDecorators = {
            chartvm: [{ type: i0.Input }]
        };
        return BarChartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ChartViewModel = (function () {
        function ChartViewModel(_chartData, _chartLabels, _chartType, _chartOptions, _chartLegend, _chartColors) {
            this.chartData = _chartData;
            this.chartLabels = _chartLabels;
            this.chartOptions = _chartOptions;
            this.chartLegend = _chartLegend;
            this.chartType = _chartType;
            this.chartColors = _chartColors;
        }
        return ChartViewModel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MieFrontendLibModule = (function () {
        function MieFrontendLibModule() {
        }
        MieFrontendLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            forms.FormsModule,
                            ng2Charts.ChartsModule,
                            common.CommonModule
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.MieFrontendLibService = MieFrontendLibService;
    exports.MieFrontendLibComponent = MieFrontendLibComponent;
    exports.DoughnutChartComponent = DoughnutChartComponent;
    exports.LineChartComponent = LineChartComponent;
    exports.BarChartComponent = BarChartComponent;
    exports.ChartViewModel = ChartViewModel;
    exports.MieFrontendLibModule = MieFrontendLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWllLWZyb250ZW5kLWxpYi51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL21pZS1mcm9udGVuZC1saWIvbGliL21pZS1mcm9udGVuZC1saWIuc2VydmljZS50cyIsIm5nOi8vbWllLWZyb250ZW5kLWxpYi9saWIvbWllLWZyb250ZW5kLWxpYi5jb21wb25lbnQudHMiLCJuZzovL21pZS1mcm9udGVuZC1saWIvbGliL2RvdWdobnV0LWNoYXJ0L2RvdWdobnV0LWNoYXJ0LmNvbXBvbmVudC50cyIsIm5nOi8vbWllLWZyb250ZW5kLWxpYi9saWIvbGluZS1jaGFydC9saW5lLWNoYXJ0LmNvbXBvbmVudC50cyIsIm5nOi8vbWllLWZyb250ZW5kLWxpYi9saWIvYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQudHMiLCJuZzovL21pZS1mcm9udGVuZC1saWIvbGliL3ZpZXdtb2RlbHMvY2hhcnR2aWV3bW9kZWwudHMiLCJuZzovL21pZS1mcm9udGVuZC1saWIvbGliL21pZS1mcm9udGVuZC1saWIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWllRnJvbnRlbmRMaWJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW1pZS1mcm9udGVuZC1saWInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbWllLWZyb250ZW5kLWxpYiB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTWllRnJvbnRlbmRMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgJ2NoYXJ0LnBpZWNlbGFiZWwuanMnO1xuaW1wb3J0ICdjaGFydGpzLXBsdWdpbi1waWVjaGFydC1vdXRsYWJlbHMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWllLWxpYi1kb3VnaG51dC1jaGFydCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBzdHlsZT1cIndpZHRoOiA1MCU7aGVpZ2h0OjUwJVwiICpuZ0lmPVwiY2hhcnR2bVwiPlxuXHQ8Y2FudmFzIGJhc2VDaGFydCBcbiAgICBbY2hhcnRUeXBlXT1cImNoYXJ0dm0uY2hhcnRUeXBlXCJcbiAgICBbZGF0YV09XCJjaGFydHZtLmNoYXJ0RGF0YVwiXG4gICAgW2xhYmVsc109XCJjaGFydHZtLmNoYXJ0TGFiZWxzXCJcbiAgICBbb3B0aW9uc109XCJjaGFydHZtLmNoYXJ0T3B0aW9uc1wiPlxuICA8L2NhbnZhcz5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBEb3VnaG51dENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY2hhcnR2bTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAnY2hhcnQucGllY2VsYWJlbC5qcyc7XG5pbXBvcnQgJ2NoYXJ0anMtcGx1Z2luLXBpZWNoYXJ0LW91dGxhYmVscyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtaWUtbGliLWxpbmUtY2hhcnQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgc3R5bGU9XCJ3aWR0aDogNTAlO2hlaWdodDo1MCVcIiAqbmdJZj1cImNoYXJ0dm1cIj5cblx0PGNhbnZhcyBiYXNlQ2hhcnQgXG4gICAgW2NoYXJ0VHlwZV09XCJjaGFydHZtLmNoYXJ0VHlwZVwiXG4gICAgW2RhdGFdPVwiY2hhcnR2bS5jaGFydERhdGFcIlxuICAgIFtsYWJlbHNdPVwiY2hhcnR2bS5jaGFydExhYmVsc1wiXG4gICAgW29wdGlvbnNdPVwiY2hhcnR2bS5jaGFydE9wdGlvbnNcIj5cbiAgPC9jYW52YXM+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgTGluZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY2hhcnR2bTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAnY2hhcnQucGllY2VsYWJlbC5qcyc7XG5pbXBvcnQgJ2NoYXJ0anMtcGx1Z2luLXBpZWNoYXJ0LW91dGxhYmVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21pZS1saWItYmFyLWNoYXJ0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IHN0eWxlPVwid2lkdGg6IDUwJTtoZWlnaHQ6NTAlXCIgKm5nSWY9XCJjaGFydHZtXCI+XG5cdDxjYW52YXMgYmFzZUNoYXJ0IFxuICAgIFtjaGFydFR5cGVdPVwiY2hhcnR2bS5jaGFydFR5cGVcIlxuICAgIFtkYXRhXT1cImNoYXJ0dm0uY2hhcnREYXRhXCJcbiAgICBbbGFiZWxzXT1cImNoYXJ0dm0uY2hhcnRMYWJlbHNcIlxuICAgIFtvcHRpb25zXT1cImNoYXJ0dm0uY2hhcnRPcHRpb25zXCI+XG4gIDwvY2FudmFzPlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIEJhckNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY2hhcnR2bTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJleHBvcnQgY2xhc3MgQ2hhcnRWaWV3TW9kZWwge1xuICBjaGFydERhdGE6IEFycmF5PGFueT47XG4gIGNoYXJ0TGFiZWxzOiBBcnJheTxhbnk+O1xuICBjaGFydE9wdGlvbnM6IGFueTtcbiAgY2hhcnREb3dubG9hZE9wdGlvbnM6IGFueTtcbiAgY2hhcnRMZWdlbmQ6IGJvb2xlYW47XG4gIGNoYXJ0VHlwZTogc3RyaW5nO1xuICBjaGFydENvbG9yczogQXJyYXk8YW55PjtcbiAgY2hhcnREb3dubG9hZENvbG9yczogQXJyYXk8YW55PjtcbiAgY29uc3RydWN0b3IoXG4gICAgX2NoYXJ0RGF0YTogQXJyYXk8YW55PixcbiAgICBfY2hhcnRMYWJlbHM6IEFycmF5PGFueT4sXG4gICAgX2NoYXJ0VHlwZT86IHN0cmluZyxcbiAgICBfY2hhcnRPcHRpb25zPzogYW55LFxuICAgIF9jaGFydExlZ2VuZD86IGJvb2xlYW4sXG4gICAgX2NoYXJ0Q29sb3JzPzogQXJyYXk8YW55PixcbiAgKSB7XG4gICAgdGhpcy5jaGFydERhdGEgPSBfY2hhcnREYXRhO1xuICAgIHRoaXMuY2hhcnRMYWJlbHMgPSBfY2hhcnRMYWJlbHM7XG4gICAgdGhpcy5jaGFydE9wdGlvbnMgPSBfY2hhcnRPcHRpb25zO1xuICAgIHRoaXMuY2hhcnRMZWdlbmQgPSBfY2hhcnRMZWdlbmQ7XG4gICAgdGhpcy5jaGFydFR5cGUgPSBfY2hhcnRUeXBlO1xuICAgIHRoaXMuY2hhcnRDb2xvcnMgPSBfY2hhcnRDb2xvcnM7XG4gIH1cbn1cbiIsIi8vIGFuZ3VsYXIgbW9kdWxlc1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLy8gdGhpcmQgcGFydHkgbW9kdWxlc1xuaW1wb3J0IHsgQ2hhcnRzTW9kdWxlIH0gZnJvbSAnbmcyLWNoYXJ0cyc7XG5cbi8vIGNvbXBvbmVudHNcbmltcG9ydCB7IE1pZUZyb250ZW5kTGliQ29tcG9uZW50IH0gZnJvbSAnLi9taWUtZnJvbnRlbmQtbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCYXJDaGFydENvbXBvbmVudCB9IGZyb20gJy4vYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG91Z2hudXRDaGFydENvbXBvbmVudCB9IGZyb20gJy4vZG91Z2hudXQtY2hhcnQvZG91Z2hudXQtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IExpbmVDaGFydENvbXBvbmVudCB9IGZyb20gJy4vbGluZS1jaGFydC9saW5lLWNoYXJ0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDaGFydHNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1pZUZyb250ZW5kTGliQ29tcG9uZW50LFxuICAgIExpbmVDaGFydENvbXBvbmVudCxcbiAgICBCYXJDaGFydENvbXBvbmVudCxcbiAgICBEb3VnaG51dENoYXJ0Q29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBNaWVGcm9udGVuZExpYkNvbXBvbmVudCxcbiAgICBEb3VnaG51dENoYXJ0Q29tcG9uZW50LFxuICAgIExpbmVDaGFydENvbXBvbmVudCxcbiAgICBCYXJDaGFydENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTWllRnJvbnRlbmRMaWJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIklucHV0IiwiTmdNb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkNoYXJ0c01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7b0NBSkQ7Ozs7Ozs7QUNBQTtRQWFFO1NBQWlCOzs7O1FBRWpCLDBDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxzQkFBc0I7d0JBQ2hDLFFBQVEsRUFBRSx3REFJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7OztzQ0FWRDs7Ozs7OztBQ0FBO1FBaUJFO1NBQWlCOzs7O1FBRWpCLHlDQUFROzs7WUFBUjthQUNDOztvQkFqQkZBLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsd0JBQXdCO3dCQUNsQyxRQUFRLEVBQUUsNFBBT0w7d0JBQ0wsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO3FCQUNiOzs7Ozs4QkFFRUMsUUFBSzs7cUNBaEJSOzs7Ozs7O0FDQUE7UUFpQkU7U0FBaUI7Ozs7UUFFakIscUNBQVE7OztZQUFSO2FBQ0M7O29CQWpCRkQsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLFFBQVEsRUFBRSw0UEFPTDt3QkFDTCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQ2I7Ozs7OzhCQUVFQyxRQUFLOztpQ0FoQlI7Ozs7Ozs7QUNBQTtRQWtCRTtTQUFpQjs7OztRQUVqQixvQ0FBUTs7O1lBQVI7YUFDQzs7b0JBakJGRCxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjt3QkFDN0IsUUFBUSxFQUFFLDRQQU9MO3dCQUNMLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztxQkFDYjs7Ozs7OEJBRUVDLFFBQUs7O2dDQWpCUjs7Ozs7OztBQ0FBLFFBQUE7UUFTRSx3QkFDRSxVQUFzQixFQUN0QixZQUF3QixFQUN4QixVQUFtQixFQUNuQixhQUFtQixFQUNuQixZQUFzQixFQUN0QixZQUF5QjtZQUV6QixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztZQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQztZQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztZQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztTQUNqQzs2QkF2Qkg7UUF3QkM7Ozs7OztBQ3ZCRDs7OztvQkFhQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsaUJBQVc7NEJBQ1hDLHNCQUFZOzRCQUNaQyxtQkFBWTt5QkFDYjt3QkFDRCxZQUFZLEVBQUU7NEJBQ1osdUJBQXVCOzRCQUN2QixrQkFBa0I7NEJBQ2xCLGlCQUFpQjs0QkFDakIsc0JBQXNCO3lCQUN2Qjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1AsdUJBQXVCOzRCQUN2QixzQkFBc0I7NEJBQ3RCLGtCQUFrQjs0QkFDbEIsaUJBQWlCO3lCQUFDO3FCQUNyQjs7bUNBL0JEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==