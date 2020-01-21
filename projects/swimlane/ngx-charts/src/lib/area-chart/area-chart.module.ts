import { NgModule } from '@angular/core';
import { AreaChart} from './area-chart.component';
import { AreaChartNormalized } from './area-chart-normalized.component';
import { AreaChartStacked} from './area-chart-stacked.component';
import { AreaSeries} from './area-series.component';
import { ChartCommonModule } from '../common/chart-common.module';

@NgModule({
  imports: [ChartCommonModule],
  declarations: [AreaChart, AreaChartNormalized, AreaChartStacked, AreaSeries],
  exports: [AreaChart, AreaChartNormalized, AreaChartStacked, AreaSeries]
})
export class AreaChartModule {}
