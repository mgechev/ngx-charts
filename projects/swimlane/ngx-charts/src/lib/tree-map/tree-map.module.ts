import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { TreeMapCell} from './tree-map-cell.component';
import { TreeMapCellSeries} from './tree-map-cell-series.component';
import { TreeMap} from './tree-map.component';

@NgModule({
  imports: [ChartCommonModule],
  declarations: [TreeMapCell, TreeMapCellSeries, TreeMap],
  exports: [TreeMapCell, TreeMapCellSeries, TreeMap]
})
export class TreeMapModule {}
