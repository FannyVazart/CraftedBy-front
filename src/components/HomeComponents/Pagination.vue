<script setup lang="ts">
import { Icon } from '@iconify/vue'
import {
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
  PaginationRoot
} from 'radix-vue'
</script>

<template>
  <PaginationRoot>
    <PaginationList v-slot="{ items }" class="flex items-end p-3" >
      <PaginationFirst class="w-9 h-9 border-2  border-black flex items-center justify-center ">
        <Icon icon="radix-icons:double-arrow-left" />
      </PaginationFirst>
      <PaginationPrev class="w-9 h-9 border-2 border-black flex items-center justify-center">
        <Icon icon="radix-icons:chevron-left" />
      </PaginationPrev>
      <template v-for="(page, index) in items">
        <PaginationListItem v-if="page.type === 'page'" :key="index" />
        <PaginationEllipsis v-else :key="page.type" :index="index">
          &#8230;
        </PaginationEllipsis>
      </template>
      <PaginationNext class="w-9 h-9 border-2 border-black flex items-center justify-center">
        <Icon icon="radix-icons:chevron-right" />
      </PaginationNext>
      <PaginationLast class="w-9 h-9 border-2 border-black flex items-center justify-center">
        <Icon icon="radix-icons:double-arrow-right" />
      </PaginationLast>
    </PaginationList>
  </PaginationRoot>
</template>