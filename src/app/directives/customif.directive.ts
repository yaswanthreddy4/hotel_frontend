//hidden custom directive
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomif]'
})
export class CustomifDirective {

  constructor(
    private templateRef:TemplateRef<any>,
    private ViewContainerRef: ViewContainerRef
  ) { }
  @Input() set appCustomif(condition:boolean){
    if (!condition){
      // If condition is true add template to DOM
      this.ViewContainerRef.createEmbeddedView(this.templateRef)
    }
     // Else remove template from DOM
    else{
      this.ViewContainerRef.clear()
    }
   }
}
