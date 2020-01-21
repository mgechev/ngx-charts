import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { Line} from './line';
import { LineChart} from './line-chart';
import { LineSeries} from './line-series';

@NgModule({
  imports: [ChartCommonModule],
  declarations: [Line, LineChart, LineSeries],
  exports: [Line, LineChart, LineSeries]
})
export class LineChartModule {}
