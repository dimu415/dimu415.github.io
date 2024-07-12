<template>
  <v-row class="d-flex  justify-space-between mx-auto ma-3">

    <v-col cols="6">
        <v-card color="black" class="h-100">
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="text-h5"> github </v-card-title>
                    <v-card-text class="ma-2">
                        <ul>
                            <li>과거 프로젝트,프로그램,앱 소스코드</li>
                            <li>혼자서 코딩 연습한 소스코드</li>
                            <li>배포를 위한 코드</li>
                        </ul>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        class="ms-2"
                        text="바로가기"
                        variant="outlined"
                        href="https://github.com/dimu415"
                      ></v-btn>
                    </v-card-actions>
                  </div>
                  <v-avatar class="ma-3" rounded="0" size="125">
                    <v-img
                      src="/Skills/github-remove.png"
                    ></v-img>
                  </v-avatar>
                </div>
              </v-card>
    </v-col>
    <v-col cols="6">
            <v-card color="#03B464" class="h-100">
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="text-h5"> blog </v-card-title>
                    <v-card-text class="ma-2"> 
                        <ul>
                            <li>공부한것을 나중에도 기억할 수 있게 저장</li>
                            <li>정보를 공유하기 위해</li>
                            .
                        </ul>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        class="ms-2"
                        text="바로가기"
                        variant="outlined"
                        href="https://blog.naver.com/PostList.naver?blogId=an_4_gel&tab=1"
                      ></v-btn>
                    </v-card-actions>
                  </div>
                  <v-avatar class="ma-3" rounded="0" size="125">
                    <v-img
                      src="/Skills/naver.jpg"
                    ></v-img>
                  </v-avatar>
                </div>
              </v-card>
    </v-col>

  </v-row>
  
</template>
<style scoped>
.text-center {
  text-align: center;
}
</style>