/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component, h, Prop } from '@stencil/core';
import { Buttons } from '../utils/button-variants';
import { getButtonClasses } from './base-button';

@Component({
  tag: 'cw-button',
  scoped: true,
  styleUrl: './button.scss',
})
export class Button {
  /**
   * Button varaint
   */
  @Prop() variant: Buttons = 'Primary';

  /**
   * Outline button
   */
  @Prop() outline = false;

  /**
   * Invisible button
   *
   * @deprecated use ghost property
   */
  @Prop() invisible = false;

  /**
   * Button with no background or outline
   */
  @Prop() ghost = false;

  /**
   * Show button as selected. Should be used with outline or invisible
   */
  @Prop() selected = false;

  /**
   * Disable the button
   */
  @Prop() disabled = false;

  render() {
    return (
      <button
        type="button"
        class={getButtonClasses(
          this.variant,
          this.outline,
          this.ghost || this.invisible,
          false,
          false,
          this.selected,
          this.disabled
        )}
      >
        <slot></slot>
      </button>
    );
  }
}
