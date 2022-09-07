import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { IntlModule } from "@progress/kendo-angular-intl";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";

import { AppComponent } from "./app.component";

import "@progress/kendo-angular-intl/locales/en/all";
import "@progress/kendo-angular-intl/locales/bg/all";
import "@progress/kendo-angular-intl/locales/de/all";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IntlModule,
    DateInputsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "en-AU"
    }
  ]
})
export class AppModule {}
