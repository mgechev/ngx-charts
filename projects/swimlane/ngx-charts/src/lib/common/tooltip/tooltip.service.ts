import { Injectable } from '@angular/core';
import { InjectionService } from './injection.service';
import { TooltipContent} from './tooltip';
import { InjectionRegisteryService } from './injection-registery.service';
@Injectable()
export class TooltipService extends InjectionRegisteryService<TooltipContent> {
  type: any = TooltipContent;

  constructor(injectionService: InjectionService) {
    super(injectionService);
  }
}
