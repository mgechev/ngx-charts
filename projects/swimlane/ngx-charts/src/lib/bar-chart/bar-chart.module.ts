import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { Bar} from './bar';
import { BarHorizontal} from './bar-horizontal';
import { BarHorizontal2D} from './bar-horizontal-2d';
import { BarHorizontalNormalized} from './bar-horizontal-normalized';
import { BarHorizontalStacked} from './bar-horizontal-stacked';
import { BarVertical} from './bar-vertical';
import { BarVertical2D} from './bar-vertical-2d';
import { BarVerticalNormalized} from './bar-vertical-normalized';
import { BarVerticalStacked} from './bar-vertical-stacked';
import { SeriesHorizontal } from './series-horizontal';
import { SeriesVertical} from './series-vertical';
import { BarLabel} from './bar-label';

@NgModule({
  imports: [ChartCommonModule],
  declarations: [
    Bar,
    BarHorizontal,
    BarHorizontal2D,
    BarHorizontalNormalized,
    BarHorizontalStacked,
    BarVertical,
    BarVertical2D,
    BarVerticalNormalized,
    BarVerticalStacked,
    BarLabel,
    SeriesHorizontal,
    SeriesVertical
  ],
  exports: [
    Bar,
    BarHorizontal,
    BarHorizontal2D,
    BarHorizontalNormalized,
    BarHorizontalStacked,
    BarVertical,
    BarVertical2D,
    BarVerticalNormalized,
    BarVerticalStacked,
    BarLabel,
    SeriesHorizontal,
    SeriesVertical
  ]
})
export class BarChartModule {}
