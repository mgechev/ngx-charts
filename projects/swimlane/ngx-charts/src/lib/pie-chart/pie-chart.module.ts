import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { AdvancedPieChart} from './advanced-pie-chart';
import { PieLabel} from './pie-label';
import { PieArc} from './pie-arc';
import { PieChart} from './pie-chart';
import { PieGrid} from './pie-grid';
import { PieGridSeries} from './pie-grid-series';
import { PieSeries} from './pie-series';

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
