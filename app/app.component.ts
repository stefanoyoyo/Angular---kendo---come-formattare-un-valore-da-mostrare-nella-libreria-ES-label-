import { Component, LOCALE_ID, Inject } from "@angular/core";
import { IntlService, CldrIntlService } from "@progress/kendo-angular-intl";

@Component({
  selector: "my-app",
  template: `
    <div class="example-config">
      <label>
        Locale
        <select
          [value]="localeId"
          (change)="onLocaleChange($event.target.value)"
        >
          <option value="en-GB">en-GB</option>
          <option value="en-AU">en-AU</option>
          <option value="bg-BG">bg-BG</option>
          <option value="de-DE">de-DE</option>
        </select>
      </label>
    </div>
    <h3>Numbers</h3>
    <ul>
      <li>{{ number | kendoNumber: "c":localeId }}</li>
      <li>{{ intlService.formatNumber(number, "c") }}</li>
    </ul>
    <h3>Dates</h3>
    <ul>
      <li>{{ date | kendoDate: "d":localeId }}</li>
      <li>{{ intlService.formatDate(date, "d") }}</li>
      <li>{{ intlService.format('ciao {0:c}', ['aaaAAA']) }}</li>
    </ul>

    <kendo-datepicker [(value)]="date"></kendo-datepicker>
  `
})
export class AppComponent {
  public number = 42.123;
  public date = new Date();

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    public intlService: IntlService
  ) {}

  public onLocaleChange(locale: string): void {
    this.localeId = locale;
    (<CldrIntlService>this.intlService).localeId = locale;
  }
}
