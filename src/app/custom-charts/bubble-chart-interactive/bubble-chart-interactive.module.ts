import { NgModule } from '@angular/core';
import { ChartCommonModule } from '@swimlane/ngx-charts//common/chart-common.module';
import { BubbleChartInteractive} from './bubble-chart-interactive.component';
import { BubbleSeriesInteractive} from './bubble-series-interactive.component';

export { BubbleChartInteractive, BubbleSeriesInteractive};

@NgModule({
  imports: [ChartCommonModule],
  declarations: [BubbleChartInteractive, BubbleSeriesInteractive],
  exports: [BubbleChartInteractive, BubbleSeriesInteractive]
})
export class BubbleChartInteractiveModule {}
