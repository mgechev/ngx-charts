import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { BubbleChart} from './bubble-chart.component';
import { BubbleSeries} from './bubble-series.component';

@NgModule({
  imports: [ChartCommonModule],
  declarations: [BubbleChart, BubbleSeries],
  exports: [BubbleChart, BubbleSeries]
})
export class BubbleChartModule {}
