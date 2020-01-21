import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { AdvancedPieChart} from './advanced-pie-chart.component';
import { PieLabel} from './pie-label.component';
import { PieArc} from './pie-arc.component';
import { PieChart} from './pie-chart.component';
import { PieGrid} from './pie-grid.component';
import { PieGridSeries} from './pie-grid-series.component';
import { PieSeries} from './pie-series.component';

@NgModule({
  imports: [ChartCommonModule],
  declarations: [
    AdvancedPieChart,
    PieLabel,
    PieArc,
    PieChart,
    PieGrid,
    PieGridSeries,
    PieSeries
  ],
  exports: [
    AdvancedPieChart,
    PieLabel,
    PieArc,
    PieChart,
    PieGrid,
    PieGridSeries,
    PieSeries
  ]
})
export class PieChartModule {}
