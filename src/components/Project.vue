<template>
  <v-row>
    <!-- all projects
    <v-row >
      <v-col cols="4" v-for="(projects,index) in  AllProject()" :key="index">
            <v-list  lines="two">
              <v-list-item
                v-for="(project, i) in projects"
                :key="i"
                :value="project"
                color="primary"
                 :prepend-avatar="project.appicon"
              >
              
              <v-list-item-title class="text-h6">{{project.name}}</v-list-item-title>
              </v-list-item>
            </v-list>
      </v-col>
    </v-row> -->
    <v-col cols='12' class="mt-10" v-for="(popol,index) in [games,guis,webs]" :key="index">
  
      <v-sheet  max-width="100%" color="secondary">
        <h1 class="text-overline font-weight-black " style="font-size: 48px;">{{PopolNames[index]}} </h1>
        <v-slide-group show-arrows   
        next-icon="mdi-arrow-right-circle"
        prev-icon="mdi-arrow-left-circle">
          <v-slide-group-item
            v-for="(contant,n) in popol"
            :key="n"
          >
          <v-card
          color="secondary"
            class="ma-2 rounded-lg"
            width="400"
            @click="navigateToAbout(`/Project/${PopolNames[index]}/${n}`)"
          >
            <v-img
              :src="contant.unnamed"
              cover
            >
            </v-img>
            
            <v-card width="100%" height="100%" flat class="pa-1">
                <div class=" d-flex flex-no-wrap ">
                  <v-avatar  rounded="xl" size="20%"  variant="elevated">
                    <v-img
                      :src="contant.appicon" >
                    </v-img>
                  </v-avatar>
                    <div>           
                        <p class="ml-5  text-button"> {{contant.name}} </p>
                    </div>
                 
                </div>
            </v-card>
          </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </v-col>

  </v-row>
  
</template>

<script setup>
import {ref,shallowRef} from 'vue'
import { useRouter } from 'vue-router';
import {games} from './popol/game/game.js'
import {guis} from './popol/gui/gui.js'
import {webs} from './popol/web/web.js'
const router = useRouter(); 

const PopolNames=ref(['unity','gui','web'])
  const navigateToAbout = (path) => {
  
  router.push(path);
};
const AllProject=()=>{
  const array = [...games, ...guis, ...webs];
  const chunks = [];
    for (let i = 0; i < array.length; i += 3) {
        chunks.push(array.slice(i, i + 3));
    }
    return chunks

}
</script>

<style>
.text-overline.font-weight-black {
    font-size: 48px;
}
</style>