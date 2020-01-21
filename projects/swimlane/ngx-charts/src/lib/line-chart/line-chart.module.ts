import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { Line} from './line.component';
import { LineChart} from './line-chart.component';
import { LineSeries} from './line-series.component';

@NgModule({
  imports: [ChartCommonModule],
  declarations: [Line, LineChart, LineSeries],
  exports: [Line, LineChart, LineSeries]
})
export class LineChartModule {}
