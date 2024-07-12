<template>
    <v-container >
  <v-card width="100%" height="60%" class="mt-10 pb-5" flat>
        <div class=" d-flex flex-no-wrap justify-space-between">
            <div class="w-75">           
                <v-card-title class="text-h3"> {{contant.name}} </v-card-title>
                <v-card-subtitle> JiMoo
                    <br>
                    <v-chip  v-for="tag in contant.tag" :key="tag" density="comfortable" size="small" class="ma-1">
                    {{ tag }}
                    </v-chip>
                  </v-card-subtitle>
                <v-card-text class="text-h6">{{contant.contant}}</v-card-text>
                <v-card-actions v-if="contant.url">
                    <a :href="contant.url">
                    <v-btn append-icon="mdi-google-play" variant="outlined" v-if="category=='unity'">보러가기</v-btn>
                    <v-btn append-icon="mdi-progress-wrench" variant="outlined" v-if="category=='gui'" >보러가기</v-btn>
                    <v-btn append-icon="mdi-web" variant="outlined" v-if="category=='web'">보러가기</v-btn>
                  </a>
                </v-card-actions>
            </div>
          <v-avatar class="ma-3" rounded="xl" size="20%"  variant="elevated">
            <v-img
              :src="contant.appicon" >
            </v-img>
          </v-avatar>
        </div>
        <v-row>
          <v-col cols="12">
            <v-sheet  max-width="100%">
              <v-slide-group show-arrows>
                <v-slide-group-item
                  v-for="n in contant.graph"
                  :key="n"
                >
                  <v-card
                    class="ma-2"
                    rounded
                    width="400"
                    height="300"
                    flat
                    >
                    <v-img
                    class="img-responsive"
                    contain
                      :src="n" 
                      >
                    </v-img>
                  </v-card>
                </v-slide-group-item>
              </v-slide-group>
            </v-sheet>
          </v-col>
        </v-row>
       </v-card>
       <v-divider class="ma-5" > </v-divider>
       <v-sheet>
        <v-card width="100%" v-for="main in contant.main" :key="main" class="mx-auto" flat>
            <v-card-title>{{ main.chapter }}</v-card-title>
            <v-card-text class="ml-3">
                <ul>
                    <li v-for="c in main.contant" :key="c">{{c}}</li>
                </ul>    
            </v-card-text>
        </v-card>
        <p> Skils</p>
            <p v-for="(skill,index) in contant.skills" :key="index" >
               <span> {{ index }}</span> : {{ skill }}
            </p>
            <v-divider class="ma-5" > </v-divider>
        <p > 프로젝트 결과</p>
            <p >
               {{contant.result}}
            </p>
       </v-sheet>
    </v-container>
</template>

<script setup>

import { ref, watch,onMounted } from 'vue';
import { useRouter } from 'vue-router';
import {games} from '@/components/popol/game/game.js'
import {guis} from '@/components/popol/gui/gui.js'
import {webs} from '@/components/popol/web/web.js'

const router = useRouter();
const contant=ref({name:null,url:null,contant:null,graph:null,tag:null,appicon:null})
const category=ref(null)
const fetchPost =  () => {
  category.value=  router.currentRoute.value.params.Category
  const index=  router.currentRoute.value.params.index
  if(category.value =='unity'){
    return games[parseInt(index)]
  }
  else if(category.value =='gui'){
    return guis[parseInt(index)]
  }
  else if(category.value =='web'){
    return webs[parseInt(index)]
  }
};
const returnContant= async ()=>{
    contant.value=await fetchPost()
}

onMounted(returnContant);
watch(router.currentRoute, (to, from) => {
  if (to.params.id !== from.params.id) {
    
    returnContant();
  }
});
</script>

<style scoped>
.img-responsive {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
</style>