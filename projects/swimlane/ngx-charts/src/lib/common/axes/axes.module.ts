import { NgModule } from '@angular/core';
import { AxisLabel} from './axis-label';
import { XAxis} from './x-axis';
import { XAxisTicks} from './x-axis-ticks';
import { YAxis} from './y-axis';
import { YAxisTicks} from './y-axis-ticks';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [AxisLabel, XAxis, XAxisTicks, YAxis, YAxisTicks],
  exports: [AxisLabel, XAxis, XAxisTicks, YAxis, YAxisTicks]
})
export class AxesModule {}
