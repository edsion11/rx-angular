import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SchedulingPriority } from '../../../../../../../../libs/template/src/lib/render-strategies/rxjs/scheduling';
import { schedulingHelper } from '../../../../shared/debug-helper/value-provider/scheduling-helper';
import { placeholderImg } from '../../../../shared/debug-helper/value-provider';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'rxa-ngif-hack',
  template: `
    <rxa-visualizer>
      <div visualizerHeader>
        <button mat-raised-button (click)="sh.tick(1, [500, 0])">
          delayed
        </button>
        <rxa-value-provider [changes$]="sh.ticks$" [buttons]="true" #valP="rxaValueProvider"></rxa-value-provider>
      </div>
      <img [src]="url" *rxLet="valP.imgUrl$; let url; suspense:sV;"/>
      <ng-template #sV><img [src]="placeholder"/></ng-template>
    </rxa-visualizer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreloadingTechniquesComponent {
  p = SchedulingPriority;
  sh = schedulingHelper();
  placeholder = this.domSanitizer.bypassSecurityTrustUrl(placeholderImg);

  constructor(public domSanitizer: DomSanitizer) {
  }


}
