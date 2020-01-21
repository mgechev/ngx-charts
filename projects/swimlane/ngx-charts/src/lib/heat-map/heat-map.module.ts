import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { HeatMapCell} from './heat-map-cell.component';
import { HeatCellSeries} from './heat-map-cell-series.component';
import { HeatMap} from './heat-map.component';

@NgModule({
  imports: [ChartCommonModule],
  declarations: [HeatMapCell, HeatCellSeries, HeatMap],
  exports: [HeatMapCell, HeatCellSeries, HeatMap]
})
export class HeatMapModule {}
