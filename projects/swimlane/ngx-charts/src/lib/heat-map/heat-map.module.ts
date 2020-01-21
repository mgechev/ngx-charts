import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { HeatMapCell} from './heat-map-cell';
import { HeatCellSeries} from './heat-map-cell-series';
import { HeatMap} from './heat-map';

@NgModule({
  imports: [ChartCommonModule],
  declarations: [HeatMapCell, HeatCellSeries, HeatMap],
  exports: [HeatMapCell, HeatCellSeries, HeatMap]
})
export class HeatMapModule {}
