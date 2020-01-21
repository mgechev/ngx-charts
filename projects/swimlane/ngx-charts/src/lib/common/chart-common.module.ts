import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Chart} from './charts/chart';
import { BaseChart } from './base-chart';
import { AxesModule } from './axes/axes.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { CircleSeries} from './circle-series';
import { Circle} from './circle';
import { GridPanel} from './grid-panel';
import { GridPanelSeries} from './grid-panel-series';
import { SvgLinearGradient} from './svg-linear-gradient';
import { SvgRadialGradient} from './svg-radial-gradient';
import { Area} from './area';
import { CountUp } from './count/count';
import { TooltipArea } from './tooltip-area';
import { Timeline } from './timeline/timeline';
import { VisibilityObserver } from '../utils/visibility-observer';
import { Legend} from './legend/legend';
import { LegendEntry} from './legend/legend-entry';
import { ScaleLegend} from './legend/scale-legend';
import { AdvancedLegend} from './legend/advanced-legend';

const COMPONENTS = [
  Area,
  BaseChart,
  CountUp,
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
