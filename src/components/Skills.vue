<template>
  <v-card width="100%"  height="100%" color="secondary" flat>
    <v-card-title class="text-center text-h2">Skills</v-card-title>
    <v-row v-for="(contantes,index) in Skills" :key="index" class="ma-4" justify="center">
        <h1 class="text-center  ">{{index }}</h1>
        <v-col cols="12">
            <v-card flat color="secondary">
                <v-row justify="center">
                    <v-col cols="2" v-for="contante in contantes" :key="contante" >
                        <v-card class="d-flex flex-column ma-1" min-height="100" max-height="100"  min-width="100" max-width="100" 
                        @click="ex_click(index,contante)"
                        >
                            <v-img
                            :src="`/Skills/${contante.img}`"
                            class="d-flex align-center justify-center"
                            width="100%"
                            aspect-ratio="1/1"
                            >
                            </v-img>
                                <v-card-subtitle class="text-center"> 
                                </v-card-subtitle>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row v-if="ex_index==index">
                    <v-col cols="3"></v-col>
                    <v-col cols="2">{{ex_name}}</v-col>
                    <v-col >{{ex_contante}}</v-col>
                </v-row>
            
            </v-card>
        </v-col>
        
       
    </v-row>
    
    
  </v-card>
</template>

<script setup>
import {ref} from 'vue'

const ex_index=ref()
const ex_name=ref('')
const ex_contante=ref('')

const ex_click=(index,contante)=>{
    if(contante.name==ex_name.value){
        ex_index.value=null
    }
    else{
        ex_index.value=index
        ex_name.value=contante.name
        ex_contante.value=contante.explanation
    }
     
}
const Skills=ref({
    'frontend':[{
        name:'vue',
        img:'vue.jpg',
        explanation:'사용 경험이 있으며, Vue.js를 활용하여 동적인 웹 애플리케이션을 구축했습니다.'
    },
    {
        name:'vuetify',
        img:'vuetify.png',
        explanation:'Vue.js의 UI 라이브러리로, 다양한 UI 컴포넌트를 사용하여 사용자 인터페이스를 구현했습니다.'
    },
    {
        name:'HTML/CSS',
        img:'html-css.png',
        explanation:'웹 페이지의 구조와 스타일링을 위한 기본적인 기술로, 다양한 프로젝트에서 사용했습니다.'
    },
    {
        name:'JavaScript',
        img:'js.png',
        explanation:'동적인 웹 페이지와 사용자 상호작용을 구현하는 데 사용했습니다.'
    },
],
'backend':[{
        name:'Flask',
        img:'flask.png',
        explanation:'Flask와 Vue.js를 함께 사용하여 프론트엔드와 백엔드를 통신하게 할 수 있게사용했습니다.'
    },
    {
        name:'Python',
        img:'python.png',
        explanation:'다양한 스크립트와 백엔드 로직을 구현하는 데 사용했습니다.'
    },
    {
        name:'MongoDB',
        img:'mongodb.png',
        explanation:'프로젝트에서 데이터 저장소로 활용했습니다.'
    },
],
'Cloud & DevOps':[{
        name:'AWS ',
        img:'aws.png',
        explanation:'EC2, S3,Route 53 등 다양한 AWS 서비스를 사용하여 애플리케이션을 배포하고 관리했습니다.'
    },
    {
        name:'Docker',
        img:'docker.png',
        explanation:'컨테이너화 기술을 통해 애플리케이션의 배포와 관리를 효율화했습니다.'
    },
],
'Version Control & Collaboration':[{
        name:'GitHub ',
        img:'github.png',
        explanation:'소스 코드 관리 및 협업을 위해,GitHub Actions 이용하여 지속적 통합 및 배포 파이프라인을 구축하였습니다. '
    },
    {
        name:'Notion',
        img:'notion.png',
        explanation:' 프로젝트 관리 및 문서화를 위한 도구로 활용했습니다.'
    },
    
],
'Big Data':[{
        name:'YOLO V8 ',
        img:'yolov8.jpg',
        explanation:'딥러닝 모델 구축 및 훈련을 위해 사용했습니다.'
    },
    {
        name:'Scikit-Learn',
        img:'Scikit-Learn.png',
        explanation:'다양한 머신러닝 알고리즘을 구현하고 평가하는 데 사용했습니다.'
    },
    {
        name:'Pandas',
        img:'pandas.png',
        explanation:'데이터 분석 및 전처리를 위한 라이브러리로 사용했습니다.'
    },
    
],
'Game Development':[{
        name:'Unity ',
        img:'unity.png',
        explanation:'2D 및 3D 게임 개발을 위한 엔진으로 사용했으며, 여러 게임 프로젝트를 진행했습니다'
    },
    {
        name:'PyQt ',
        img:'PyQt.png',
        explanation:' Python을 이용한 데스크탑 GUI 애플리케이션 개발을 위해 PyQt를 사용했습니다.'
    },
],

})
</script>

<style>
.text-center {
  text-align: center;
  text-justify: centers;
}
</style>