<template>
  <v-card width="100%" height="100%" flat>
    <v-card  height="300">
      <v-img
      src="/im.jpg"
      class="align-center justify-center"
      cover
      >
        <div class="text-center white--text">
          <v-card-title class="headline text-h1">
            나의 개발 포트폴리오
          </v-card-title>
          <v-card-subtitle >
            다양한 기술을 익히며 웹,모바일게임,gui 프로젝트를 선보입니다.
          </v-card-subtitle>
        </div>
      </v-img>
    </v-card>
    <v-card   height="300" color="secondary">
    <div class="d-flex flex-no-wrap justify-space-between" flat>
      <v-avatar class="ma-3  mx-auto align-center justify-center" size="20%" rounded="0">
        <v-img
          src="/im.jpg"
        ></v-img>
      </v-avatar>
      <v-card width="40%" class=" mx-auto align-center justify-center" flat color="secondary">
        <div >
        <v-card-title class="text-h3  font-weight-bold  text-center"> 소개 </v-card-title>
        <v-card-text class="ma-2 text-subtitle-2 font-weight-bold  text-center">
          안녕하세요! 저는 웹, 모바일 게임, 그리고 GUI 개발 등 다양한 분야를 익히며 프로그래밍 역량을 키워가고 있는 신입 개발자입니다. 새로운 기술을 배우고 도전하는 것을 즐기며, 끊임없이 성장하기 위해 다양한 프로그래밍 언어와 도구를 공부하고 있습니다. 창의적인 문제 해결과 효율적인 코드 작성을 목표로, 사용자들에게 더 나은 경험을 제공할 수 있는 개발자가 되기 위해 노력하고 있습니다. 
        </v-card-text>
      </div>
      </v-card>
     
      
    </div>
  </v-card>
  </v-card>
  
</template>

<script>
export default {
  name: 'PortfolioCard'
};
</script>

<style scoped>
.text-center {
  text-align: center;
}
.white--text {
  color: white;
}
</style>
