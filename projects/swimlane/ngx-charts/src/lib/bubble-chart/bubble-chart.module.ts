import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { BubbleChart} from './bubble-chart';
import { BubbleSeries} from './bubble-series';

@NgModule({
  imports: [ChartCommonModule],
  declarations: [BubbleChart, BubbleSeries],
  exports: [BubbleChart, BubbleSeries]
})
export class BubbleChartModule {}
