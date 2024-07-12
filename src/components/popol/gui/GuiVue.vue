<template>
  <v-window
    v-model="onboarding"
    show-arrows="hover"
    class="pa-10"
  >
  <div class="text-h2 font-weight-bold" >GUI</div>
    <v-window-item
      v-for=" ( gui, n ) in guis"
      :key="n"
      
    >
    <v-sheet class="d-flex justify-center  align-center " color="secondary"> 
      
        <v-card  class="h-100 d-flex " flat width="70%" color="secondary"
        @click="navigateToAbout(`/Project/gui/${n}`)">
                <div class="d-flex flex-no-wrap justify-space-between">
                  <v-avatar class="ma-3" rounded="0" size="500">
                    <v-img
                      :src="gui.graph[1]"
                    ></v-img>
                  </v-avatar>
                  <div>
                    <v-card-title class="text-h5 font-weight-black"> {{gui.name}} </v-card-title>
                    <v-card-text class="ma-2">
                        <ul>
                            <li v-for="(e,i) in gui.ex" :key="i" class="mb-2"> <p class="text-h6">{{gui.ex[i].title}}</p>
                             <p class="text-body-1">{{gui.ex[i].contant}}</p></li>
                        </ul>
                    </v-card-text>
                  </div>
                </div>
              </v-card>
              
    </v-sheet>
    </v-window-item>
  </v-window>
</template>

<script setup>
    import {guis} from './gui'
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
  background-color: #2C3F42;
}
.font-color{
    color: #D2600F;
}
</style>