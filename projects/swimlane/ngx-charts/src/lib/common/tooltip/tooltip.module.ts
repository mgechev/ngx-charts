import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipDirective } from './tooltip.directive';
import { TooltipContent} from './tooltip';
import { TooltipService } from './tooltip.service';

import { InjectionService } from './injection.service';

@NgModule({
  declarations: [TooltipContent, TooltipDirective],
  providers: [InjectionService, TooltipService],
  exports: [TooltipContent, TooltipDirective],
  imports: [CommonModule],
  entryComponents: [TooltipContent]
})
export class TooltipModule {}
