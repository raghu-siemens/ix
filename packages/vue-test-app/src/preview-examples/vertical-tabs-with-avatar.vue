<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import {
  iconGlobe,
  iconHome,
  iconStar,
  iconUserProfile,
} from '@siemens/ix-icons/icons';
import {
  IxMenu,
  IxMenuAvatar,
  IxMenuAvatarItem,
  IxMenuItem,
} from '@siemens/ix-vue';
</script>

<style scoped src="./vertical-tabs-with-avatar.css"></style>

<template>
  <IxMenu>
    <IxMenuAvatar top="john.doe@company.com" bottom="Administrator">
      <IxMenuAvatarItem
        :icon="iconUserProfile"
        label="User profile..."
      ></IxMenuAvatarItem>
    </IxMenuAvatar>
    <IxMenuItem home-tab :tab-icon="iconHome"> &nbsp; Home&nbsp; </IxMenuItem>
    <IxMenuItem :tab-icon="iconGlobe"> Normal Tab </IxMenuItem>
    <IxMenuItem :tab-icon="iconStar" disabled>
      &nbsp; Disabled Tab&nbsp;
    </IxMenuItem>
    <IxMenuItem :tab-icon="iconStar"> With other Icon </IxMenuItem>
  </IxMenu>
</template>
