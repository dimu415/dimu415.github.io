<template>
  <v-container fluid class="mb-10" >
    <div id="start"></div>
    <Introduction  />
    <v-divider :thickness="5"></v-divider>
    <v-container >
      <SkillsVue id="skills"/>
      <ArchivingVue/>
    </v-container>
    <webv id="project1"/>
    <gamev/>
    <guiv/>
    <Project id="project2"/>
    <div  class="speed-dial-position">
      <v-speed-dial 
      location="left top"
      transition="slide-x-reverse-transition">
      <template v-slot:activator="{ props: activatorProps }">
        <v-fab v-bind="activatorProps" size="small" icon="mdi-menu"></v-fab>
      </template>

      <v-btn key="1" @click="scrollToPosition('start')">소개</v-btn>
      <v-btn key="2" @click="scrollToPosition('skills')">스킬</v-btn>
      <v-btn key="3" @click="scrollToPosition('project1')">프로젝트-1</v-btn>
      <v-btn key="4" @click="scrollToPosition('project2')">프로젝트-2</v-btn>
    </v-speed-dial>
    </div>
  
  </v-container >
</template>

<script setup>
  import Introduction from '@/components/Introduction.vue'
  import ArchivingVue from '../components/Archiving.vue'
  import SkillsVue from '../components/Skills.vue'
  import Project from '../components/Project.vue'
  import gamev from '@/components/popol/game/GameVue.vue'
  import webv from '@/components/popol/web/WebVue.vue'
  import guiv from '@/components/popol/gui/GuiVue.vue'
  import {ref} from 'vue'

  const scrollToPosition = (id) => {
{
      let targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }
</script>
<style scoped>
.speed-dial-position {
  position: fixed;
  top: 50%;
  right: 5%; /* 예를 들어 왼쪽 여백이 50% */
  transform: translate(-50%, -50%); /* 중앙 정렬을 위한 트랜스폼 */
}

</style>