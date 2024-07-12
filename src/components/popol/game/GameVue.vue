<template>
  <v-window
    v-model="onboarding"
    show-arrows="hover"
    class="window-background pa-10"
  >
  <div class="text-h2 font-weight-bold font-color" >모바일 게임</div>
    <v-window-item
      v-for=" ( game, n ) in games"
      :key="n"
    >
    <v-card  
    height="700" color="#2C3F42"  class="d-flex align-center justify-center">
    <v-row>
        <v-col cols="12" class="d-flex mx-auto align-center justify-center">
            <v-card color="#FEF3F0"  height="600" width="70%"
                class=" rounded-xl" 
                @click="navigateToAbout(`/Project/unity/${n}`)">
                <v-card-title class="text-h3">프로젝트 {{ n+1 }} : {{ game.name }}</v-card-title>
                <v-card-text class="d-flex align-center justify-center ">
                    <v-container class="d-flex align-center justify-center pt-10">
                        <v-timeline direction="horizontal" class="ma-5 pt-10 align-center justify-center">
                            <v-timeline-item v-for="(e,i) in game.ex" :key="i">
                                <template v-slot:opposite>
                                    <div class="text-h5 font-weight-black align-center justify-center">{{game.ex[i].title}}</div>
                                </template>
                                <div>
                                    <p class="text-subtitle-2 font-weight-bold  text-center">
                                        {{game.ex[i].contant}}
                                    </p>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-col>
       
      
    </v-row>
    
   </v-card>
     
    </v-window-item>
  </v-window>
</template>

<script setup>
    import {games} from './game'
    import {ref,shallowRef} from 'vue'
    import { useRouter } from 'vue-router';
const router = useRouter(); 
const onboarding= ref(0)
  const navigateToAbout = (path) => {
  
  router.push(path);
};

</script>

<style scoped>
.window-background {
  background-color: #2C3F42;
}
.font-color{
    color: #D2600F;
}
</style>