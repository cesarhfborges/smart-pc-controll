import {Component, forwardRef, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-btn-toggle',
  templateUrl: './btn-toggle.component.html',
  styleUrls: ['./btn-toggle.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BtnToggleComponent),
    multi: true
  }]
})
export class BtnToggleComponent implements OnInit, ControlValueAccessor {

  @Input('loading') loading: boolean = false;

  private opts: {
    value: boolean,
    disabled: boolean,
  } = {
    value: false,
    disabled: false,
  };

  constructor() {
  }

  get options(): any {
    return this.opts;
  }

  public get myValue(): boolean {
    return this.opts.value;
  }

  public set myValue(v: boolean) {
    if (v !== this.opts.value && !this.loading) {
      this.opts.value = v;
      this.onChange(v);
    }
  }

  ngOnInit(): void {
  }

  onChange = (_) => {
  };
  onTouched = () => {
  };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.opts.disabled = isDisabled;
  }

  writeValue(value: any): void {
    this.myValue = value;
  }

  toggle(): void {
    this.myValue = !this.myValue;
  }
}
