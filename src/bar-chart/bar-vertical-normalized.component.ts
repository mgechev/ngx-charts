import {
  Component,
  Input,
  Output,
  EventEmitter,
  trigger,
  style,
  transition,
  animate,
  ChangeDetectionStrategy
} from '@angular/core';
import { calculateViewDimensions, ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';
import d3 from '../d3';

@Component({
  selector: 'ngx-charts-bar-vertical-normalized',
  template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)"
      (legendLabelClick)="onClick($event)">
      <svg:g [attr.transform]="transform" class="bar-chart chart">
        <svg:g ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          (dimensionsChanged)="updateXAxisHeight($event)">
        </svg:g>
        <svg:g ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          (dimensionsChanged)="updateYAxisWidth($event)">
        </svg:g>
        <svg:g
          *ngFor="let group of results; trackBy:trackBy"
          [@animationState]="'active'"
          [attr.transform]="groupTransform(group)">
          <svg:g ngx-charts-series-vertical
            type="normalized"
            [xScale]="xScale"
            [yScale]="yScale"
            [activeEntries]="activeEntries"
            [colors]="colors"
            [series]="group.series"
            [dims]="dims"
            [gradient]="gradient"
            (select)="onClick($event, group)"
            (activate)="onActivate($event, group)"
            (deactivate)="onDeactivate($event, group)"
          />
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('animationState', [
      transition('* => void', [
        style({
          opacity: 1,
          transform: '*',
        }),
        animate(500, style({opacity: 0, transform: 'scale(0)'}))
      ])
    ])
  ]
})
export class BarVerticalNormalizedComponent extends BaseChartComponent {

  @Input() legend = false;
  @Input() xAxis;
  @Input() yAxis;
  @Input() showXAxisLabel;
  @Input() showYAxisLabel;
  @Input() xAxisLabel;
  @Input() yAxisLabel;
  @Input() gradient: boolean;
  @Input() showGridLines: boolean = true;
  @Input() activeEntries: any[] = [];
  @Input() schemeType: string;

  @Output() activate: EventEmitter<any> = new EventEmitter();
  @Output() deactivate: EventEmitter<any> = new EventEmitter();

  dims: ViewDimensions;
  groupDomain: any[];
  innerDomain: any[];
  valueDomain: any[];
  xScale: any;
  yScale: any;
  transform: string;
  colors: ColorHelper;
  margin = [10, 20, 10, 20];
  xAxisHeight: number = 0;
  yAxisWidth: number = 0;
  legendOptions: any;

  update(): void {
    super.update();

    this.zone.run(() => {
      this.dims = calculateViewDimensions({
        width: this.width,
        height: this.height,
        margins: this.margin,
        showXAxis: this.xAxis,
        showYAxis: this.yAxis,
        xAxisHeight: this.xAxisHeight,
        yAxisWidth: this.yAxisWidth,
        showXLabel: this.showXAxisLabel,
        showYLabel: this.showYAxisLabel,
        showLegend: this.legend,
        legendType: this.schemeType
      });

      this.formatDates();

      this.groupDomain = this.getGroupDomain();
      this.innerDomain = this.getInnerDomain();
      this.valueDomain = this.getValueDomain();

      this.xScale = this.getXScale();
      this.yScale = this.getYScale();

      this.setColors();
      this.legendOptions = this.getLegendOptions();

      this.transform = `translate(${ this.dims.xOffset } , ${ this.margin[0] })`;
    });
  }

  getGroupDomain() {
    let domain = [];
    for (let group of this.results) {
      if (!domain.includes(group.name)) {
        domain.push(group.name);
      }
    }

    return domain;
  }

  getInnerDomain() {
    let domain = [];
    for (let group of this.results) {
      for (let d of group.series) {
        if (!domain.includes(d.name)) {
          domain.push(d.name);
        }
      }
    }

    return domain;
  }

  getValueDomain() {
    return [0, 100];
  }

  getXScale() {
    let spacing = 0.1;
    return d3.scaleBand()
      .rangeRound([0, this.dims.width])
      .paddingInner(spacing)
      .domain(this.groupDomain);
  }

  getYScale() {
    return d3.scaleLinear()
      .range([this.dims.height, 0])
      .domain(this.valueDomain);
  }

  groupTransform(group) {
    return `translate(${this.xScale(group.name)}, 0)`;
  }

  onClick(data, group) {
    if (group) {
      data.series = group.name;
    }
    this.select.emit(data);
  }

  trackBy(index, item) {
    return item.name;
  }

  setColors(): void {
    let domain;
    if (this.schemeType === 'ordinal') {
      domain = this.innerDomain; 
    } else {
      domain = this.valueDomain;
    }

    this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
  }

  getLegendOptions() {
    let opts = {
      scaleType: this.schemeType,
      colors: undefined,
      domain: []
    };
    if (opts.scaleType === 'ordinal') {
      opts.domain = this.innerDomain;
      opts.colors = this.colors;
    } else {
      opts.domain = this.valueDomain;
      opts.colors = this.colors.scale;
    }

    return opts;
  }

  updateYAxisWidth({width}) {
    this.yAxisWidth = width;
    this.update();
  }

  updateXAxisHeight({height}) {
    this.xAxisHeight = height;
    this.update();
  }
  
  onActivate(event, group) {
    let item = Object.assign({}, event);
    if (group) {
      item.series = group.name;
    }

    const idx = this.activeEntries.findIndex(d => {
      return d.name === item.name && d.value === item.value && d.series === item.series;
    });
    if (idx > -1) {
      return;
    }
    
    this.activeEntries = [ item, ...this.activeEntries ];
    this.activate.emit({ value: item, entries: this.activeEntries });
  }

  onDeactivate(event, group) {
    let item = Object.assign({}, event);
    if (group) {
      item.series = group.name;
    }

    const idx = this.activeEntries.findIndex(d => {
      return d.name === item.name && d.value === item.value && d.series === item.series;
    });

    this.activeEntries.splice(idx, 1);
    this.activeEntries = [...this.activeEntries];

    this.deactivate.emit({ value: event, entries: this.activeEntries });
  }
  
}
