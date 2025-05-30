/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxDatePicker } from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxDatePicker],
  template: `
    <ix-date-picker [from]="fromDate" [to]="toDate"></ix-date-picker>
  `,
})
export default class DatepickerRange {
  fromDate = '2022/12/15';
  toDate = '2022/12/24';
}
