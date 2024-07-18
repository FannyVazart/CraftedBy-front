<script setup>

import { ref } from 'vue'
import {
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot, DropdownMenuSeparator,
  DropdownMenuTrigger
} from 'radix-vue'
import ProfileAvatar from '@/assets/ProfileAvatar.vue'
import { useUserStore } from '@/stores/UserStore.js'
const toggleState = ref(false)
const userStore = useUserStore()
const user = userStore.getUser
console.log("token drop", userStore.getUser)
function handleClick() {
  // eslint-disable-next-line no-alert
  alert('hello!')
}
</script>

<template>
  <DropdownMenuRoot v-model:open="toggleState">
    <DropdownMenuTrigger
      class="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-grass11 bg-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black"
      aria-label="Customise options"
    >
      <ProfileAvatar />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>

      <DropdownMenuContent
        class="min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
        :side-offset="5"
      >
        <DropdownMenuItem
          value="New Tab"
          class="group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
          @click="handleClick"
        >
          <p>{{ user.name.firstname }}, {{user.name.lastname}}</p>
        </DropdownMenuItem>
        <DropdownMenuSeparator class="h-[1px] bg-green6 m-[5px]" />
        <DropdownMenuItem
          value="New Tab"
          class="group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
          @click="handleClick"
        >
          Dashboard
        </DropdownMenuItem>

        <DropdownMenuItem
          value="New Tab"
          class="group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
          @click="handleClick"
        >
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator class="h-[1px] bg-green6 m-[5px]" />
        <DropdownMenuItem
          value="New Tab"
          class="group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
          @click="handleClick"
        >
          Sign out
        </DropdownMenuItem>
        <DropdownMenuArrow class="fill-white" />
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>