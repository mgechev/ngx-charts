import { NgModule } from '@angular/core';
import { AreaChart} from './area-chart';
import { AreaChartNormalized } from './area-chart-normalized';
import { AreaChartStacked} from './area-chart-stacked';
import { AreaSeries} from './area-series';
import { ChartCommonModule } from '../common/chart-common.module';

@NgModule({
  imports: [ChartCommonModule],
  declarations: [AreaChart, AreaChartNormalized, AreaChartStacked, AreaSeries],
  exports: [AreaChart, AreaChartNormalized, AreaChartStacked, AreaSeries]
})
export class AreaChartModule {}
