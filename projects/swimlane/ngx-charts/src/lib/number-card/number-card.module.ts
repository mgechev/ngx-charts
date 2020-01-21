import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { Card} from './card.component';
import { CardSeries} from './card-series.component';
import { NumberCard} from './number-card.component';

@NgModule({
  imports: [ChartCommonModule],
  declarations: [Card, CardSeries, NumberCard],
  exports: [Card, CardSeries, NumberCard]
})
export class NumberCardModule {}
