import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { Card} from './card';
import { CardSeries} from './card-series';
import { NumberCard} from './number-card';

@NgModule({
  imports: [ChartCommonModule],
  declarations: [Card, CardSeries, NumberCard],
  exports: [Card, CardSeries, NumberCard]
})
export class NumberCardModule {}
