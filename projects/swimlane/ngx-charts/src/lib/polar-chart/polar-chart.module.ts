import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { PolarChart} from './polar-chart';
import { PolarSeries} from './polar-series';
import { PieChartModule } from '../pie-chart/pie-chart.module';
import { LineChartModule } from '../line-chart/line-chart.module';

@NgModule({
  imports: [ChartCommonModule, PieChartModule, LineChartModule],
  declarations: [PolarChart, PolarSeries],
  exports: [PolarChart, PolarSeries]
})
export class PolarChartModule {}
