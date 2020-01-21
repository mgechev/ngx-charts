import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { Bar} from './bar.component';
import { BarHorizontal} from './bar-horizontal.component';
import { BarHorizontal2D} from './bar-horizontal-2d.component';
import { BarHorizontalNormalized} from './bar-horizontal-normalized.component';
import { BarHorizontalStacked} from './bar-horizontal-stacked.component';
import { BarVertical} from './bar-vertical.component';
import { BarVertical2D} from './bar-vertical-2d.component';
import { BarVerticalNormalized} from './bar-vertical-normalized.component';
import { BarVerticalStacked} from './bar-vertical-stacked.component';
import { SeriesHorizontal } from './series-horizontal.component';
import { SeriesVertical} from './series-vertical.component';
import { BarLabel} from './bar-label.component';

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
