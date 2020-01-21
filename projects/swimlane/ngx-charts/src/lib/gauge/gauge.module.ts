import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { LinearGauge} from './linear-gauge.component';
import { Gauge} from './gauge.component';
import { GaugeArc} from './gauge-arc.component';
import { GaugeAxis} from './gauge-axis.component';
import { PieChartModule } from '../pie-chart/pie-chart.module';
import { BarChartModule } from '../bar-chart/bar-chart.module';

@NgModule({
  imports: [ChartCommonModule, PieChartModule, BarChartModule],
  declarations: [LinearGauge, Gauge, GaugeArc, GaugeAxis],
  exports: [LinearGauge, Gauge, GaugeArc, GaugeAxis]
})
export class GaugeModule {}
