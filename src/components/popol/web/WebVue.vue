<template>
  <v-window
    v-model="onboarding"
    show-arrows="hover"
    class="window-background pa-10"
  >
  <div class="text-h2 font-weight-bold font-color" >웹 사이트</div>
    <v-window-item
      v-for=" ( web, n ) in webs"
      :key="n"
    >
    <v-card  class="d-flex align-center window-background justify-center ma-2" 
    flat height="h-100" min-height="300">
    <v-card   class=" window-background " flat width="50%" height="100%"  @click="navigateToAbout(`/Project/web/${n}`)">
      <v-card-title class="text-h3">프로젝트 {{ n+1 }} : {{ web.name }}</v-card-title>
      <v-card-text>
        <v-row>
          
          <v-col v-for="(e,i) in web.ex" :key="i">
              <v-card
                  class=" window-background "
                  flat
                  height="200">
                  <v-card-title class="text-h5 font-weight-black">
                  {{web.ex[i].title}}
                  </v-card-title>
                  <v-card-text class="text-body-1">
                      
                  {{web.ex[i].contant}}
                  </v-card-text>
              </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
       
    </v-card>
   
     
    </v-window-item>
  </v-window>
</template>

<script setup>
    import {webs} from './web'
    import {ref,shallowRef} from 'vue'
    import { useRouter } from 'vue-router';
const router = useRouter(); 
const onboarding= ref(0)
const PopolNames=ref(['unity','gui','web'])
  const navigateToAbout = (path) => {
  
  router.push(path);
};

</script>

<style scoped>
.window-background {
  background-color: #D2600F;
}
.font-color{
    color: #2C3F42;
}
</style>