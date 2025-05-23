/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { MenuAbout } from '../../menu-about/menu-about';
import { MenuSettings } from '../../menu-settings/menu-settings';

function getItems(
  context: MenuSettings | MenuAbout
): HTMLIxMenuSettingsItemElement[] | HTMLIxMenuAboutItemElement[] {
  return Array.from(
    context.el.querySelectorAll(
      context instanceof MenuSettings
        ? 'ix-menu-settings-item'
        : 'ix-menu-about-item'
    )
  );
}

export function setTab(context: MenuSettings | MenuAbout, label: string) {
  const { defaultPrevented } = context.tabChange.emit(label);

  if (defaultPrevented) {
    return;
  }

  context.activeTabLabel = label;
  context.items.forEach((i) => {
    i.style.display = 'none';
    if (i.label === context.activeTabLabel) {
      i.style.display = 'block';
    }
  });
}

export function initialize(context: MenuSettings | MenuAbout) {
  context.items = getItems(context);

  if (context.items.length) {
    const selectedLabel = context.activeTabLabel || context.items[0].label;
    if (selectedLabel) {
      setTab(context, selectedLabel);
    }
  }

  context.items.forEach((item) => {
    item.addEventListener('labelChange', (e: CustomEvent) => {
      context.items = getItems(context);

      if (e.detail.oldLabel === context.activeTabLabel) {
        context.activeTabLabel = e.detail.newLabel;
      }
    });
  });
}

export interface CustomLabelChangeEvent {
  name: string;
  oldLabel: string;
  newLabel: string;
}

export interface CustomCloseEvent {
  nativeEvent: MouseEvent;
  name: string;
}
