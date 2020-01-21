import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { TreeMapCell} from './tree-map-cell';
import { TreeMapCellSeries} from './tree-map-cell-series';
import { TreeMap} from './tree-map';

@NgModule({
  imports: [ChartCommonModule],
  declarations: [TreeMapCell, TreeMapCellSeries, TreeMap],
  exports: [TreeMapCell, TreeMapCellSeries, TreeMap]
})
export class TreeMapModule {}
