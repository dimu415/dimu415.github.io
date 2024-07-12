<template>
    <v-row>
        <v-col cols="12">
            <v-card color="white" flat>
                <div class="d-flex flex-no-wrap justify-space-between">
                  <v-avatar class="ma-3" rounded="0" size="50%">
                    <v-img
                      src="/deca.png"
                    ></v-img>
                  </v-avatar>
                  <div>
                    <v-card-title>Graph to Data</v-card-title>
                    <v-card-text>그림 데이터를 수치 데이터로 변환시키는 사이트이며  <br>
                    그래프 이미지를 넣어놓으면 별도의 작업 없이도 추출할 수 있게 만들었습니다.  <br>추가적인 작업을 통해 정확도를 높일 수 있습니다.
                    </v-card-text>
                <v-card-actions>
                    <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
                        
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn
                            variant="outlined"
                            text="자세히 보기"
                            v-bind="activatorProps"
                            ></v-btn>
                        </template>
                        <v-card>
                            <v-toolbar>
                                <v-spacer></v-spacer>
                                <v-toolbar-items>
                                    <v-btn icon="mdi-close" @click="dialog = false"></v-btn>
                                </v-toolbar-items>
                            </v-toolbar>

                            <v-list lines="two" subheader>
                                <v-list-subheader>URL <a href="https://decacharts.com/">https://decacharts.com/</a></v-list-subheader>

                                <v-list-item><v-list-item-title>
                                    사용자가 다양한 형태의 그래프 이미지를 업로드하면, 해당 이미지를 분석하여 수치형 데이터를 추출합니다.
                                    이를 통해 사용자는 이미지 형태로 제공된 데이터를 실제로 분석하거나 활용할 수 있는 형식으로 변환할 수 있습니다.
                                    
                                </v-list-item-title></v-list-item>

                                <v-list-item>
                                    <v-list-item-title> 주요기능</v-list-item-title>
                                <v-list-itme-subtitle>
                                    <li>이미지 업로드: 사용자는 웹 인터페이스를 통해 그래프 이미지를 업로드할 수 있습니다.</li>
                                    <li>이미지 분석 및 처리: 업로드된 이미지는 이미지 처리 알고리즘을 통해 분석됩니다. 이 과정에는 그래프의 축, 데이터 포인트, 레이블 등을 식별하는 작업이 포함됩니다.</li>
                                    <li>수치형 데이터 추출: 분석된 이미지로부터 그래프의 데이터 포인트를 추출하여 수치형 데이터로 변환합니다. 이 데이터는 CSV, JSON 등의 형식으로 저장되거나 다운로드할 수 있습니다.</li>

                                </v-list-itme-subtitle>
                            </v-list-item>

                            <v-divider></v-divider>

                            <v-list-subheader>기술 스택 </v-list-subheader>

                            <v-list-item

                                title="Vue & vuetify"
                            >
                            <v-list-subtitle>Vue.js와 Vuetify를 사용하여 사용자 인터페이스를 구현했습니다. 사용자에게 직관적이고 사용하기 쉬운 인터페이스를 제공하기 위해 Vuetify의 다양한 UI 컴포넌트를 활용했습니다.</v-list-subtitle>
                            </v-list-item>
                            <v-list-item
                                title="python"
                            >
                            <v-list-itme-subtitle>
                                    <li>Flask: Vue.js와 비동기 통신을 이용하여 서버로부터 데이터를 받아오는 기능을 구현 했습니다.
                                        Flask를 사용하여 이미지 업로드 및 처리를 위한 API를 구현했습니다. Flask는 경량 웹 프레임워크로, 빠르고 효율적인 백엔드 개발을 가능하게 했습니다.</li>
                                    <li>이미지 처리: Python의 OpenCV 및 NumPy 라이브러리를 사용하여 이미지 처리 및 데이터 추출 알고리즘을 구현했습니다. 이 라이브러리들은 이미지의 픽셀 단위 분석과 수학적 연산을 효율적으로 처리할 수 있도록 도와줍니다.</li>
                                </v-list-itme-subtitle>
                            </v-list-item>
                            
                            </v-list>
                        </v-card>
                        </v-dialog>
                </v-card-actions>
                <v-divider  inset></v-divider>
                <span>사용기술 :</span>
                <span> Vue,Vuetify,flask,python</span>
                  </div>
                  </div>
            </v-card>
        </v-col>
    </v-row>


</template>

<script>
 export default {
    data: () => ({
      length: 3,
      window: 0,
      dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
    }),
  }
</script>

<style>

</style>