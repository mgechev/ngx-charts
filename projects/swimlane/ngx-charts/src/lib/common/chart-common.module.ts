import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Chart} from './charts/chart.component';
import { BaseChart } from './base-chart.component';
import { AxesModule } from './axes/axes.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { CircleSeries} from './circle-series.component';
import { Circle} from './circle.component';
import { GridPanel} from './grid-panel.component';
import { GridPanelSeries} from './grid-panel-series.component';
import { SvgLinearGradient} from './svg-linear-gradient.component';
import { SvgRadialGradient} from './svg-radial-gradient.component';
import { Area} from './area.component';
import { CountUpDirective } from './count/count.directive';
import { TooltipArea } from './tooltip-area.component';
import { Timeline } from './timeline/timeline.component';
import { VisibilityObserver } from '../utils/visibility-observer';
import { Legend} from './legend/legend.component';
import { LegendEntry} from './legend/legend-entry.component';
import { ScaleLegend} from './legend/scale-legend.component';
import { AdvancedLegend} from './legend/advanced-legend.component';

const COMPONENTS = [
  Area,
  BaseChart,
  CountUpDirective,
  TooltipArea,
  Chart,
  Legend,
  LegendEntry,
  ScaleLegend,
  Circle,
  CircleSeries,
  GridPanel,
  GridPanelSeries,
  SvgLinearGradient,
  SvgRadialGradient,
  Timeline,
  AdvancedLegend
];

@NgModule({
  imports: [CommonModule, AxesModule, TooltipModule],
  declarations: [...COMPONENTS, VisibilityObserver],
  exports: [CommonModule, AxesModule, TooltipModule, ...COMPONENTS, VisibilityObserver]
})
export class ChartCommonModule {}
