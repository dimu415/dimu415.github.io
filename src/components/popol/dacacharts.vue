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
                    <v-card-title class="text-h5"> DecaCharts </v-card-title>

                    <v-card-text>이 웹 사이트는 Vue.js와 Vuetify를 사용하여 개발되었으며,<br>
                    사용자는 텍스트로 복잡한 순서도를 쉽게 만들 수 있고, <br>
                    직관적인 인터페이스를 통해 순서도를 빠르게 시각화할 수 있습니다. <br>
                    이 프로젝트는 사용자가 순서도를 만드는 과정에서 발생하는 <br>귀찮은 작업과 시간을 절약하는 데 중점을 두고 있습니다.</v-card-text>

                    <v-card-actions>
                    <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
                        
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn
                            text="자세히 보기"
                            v-bind="activatorProps"
                            variant="outlined"
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
                                    이 반응형웹 사이트는 Vue.js와 Vuetify를 사용하여 개발되었으며,<br>
                                     사용자는 텍스트로 복잡한 순서도를 쉽게 만들 수 있고,<br> 직관적인 인터페이스를 통해 순서도를 빠르게 시각화할 수 있습니다. <br>
                                     이 프로젝트는 사용자가 순서도를 만드는 과정에서 발생하는 <br>귀찮은 작업과 시간을 절약하는 데 중점을 두고 있습니다.
                                    
                                </v-list-item-title></v-list-item>

                                <v-list-item>
                                    <v-list-item-title> 주요기능</v-list-item-title>
                                <v-list-itme-subtitle>
                                    <li>순서도 시각화: 
                                        텍스트 또는 직관적인 사용자 인터페이스를 제공하여, 순서도를 쉽게 시각화하고 수정할 수 있습니다. 순서도 작성 시 필요한 작업과 시간을 최소화합니다.</li>
                                    <li>간단한 조작:
                                        처음 사용하는 사람들도 쉽게 이해하고 사용할 수 있는 간단한 조작 방식을 제공합니다. 사용자 경험을 극대화하기 위해 직관적인 UI/UX 디자인을 적용했습니다.</li>
                                    <li>인공지는 (개발중):
                                        특별한 조작없이 실험보고서 입력 시 실험 순서도 작성할 수 있게 인공지능을 활용하여 순서도를 그릴수있게 적용중입니다.</li>
                                </v-list-itme-subtitle>
                            </v-list-item>

                            <v-divider></v-divider>

                            <v-list-subheader>사용 기술 </v-list-subheader>

                            <v-list-item
                                subtitle="Vue 와 Vuetify 를 사용하여 반응형 웹사이트를 구현했습니다."
                                title="Vue & vuetify"
                            >
                            </v-list-item>
                            <v-list-item
                                title="Docker"
                            >
                            <v-list-itme-subtitle>
                                    <li>컨테이너화: Docker를 사용하여 Vue.js 애플리케이션과 Nginx를 각각 독립된 컨테이너로 패키징했습니다. 이를 통해 개발 환경과 운영 환경을 일관되게 유지할 수 있었습니다.</li>
                                    <li>편리한 관리: Docker-compose를 사용하여 여러 개의 컨테이너를 쉽게 관리할 수 있었습니다. docker-compose.yml 파일을 통해 컨테이너 설정을 코드로 관리하고,<br> docker-compose up 명령어 하나로 모든 서비스를 시작할 수 있었습니다.</li>
                                    <li>Nginx:
                                        Nginx는 정적 파일(HTML, CSS, JavaScript 등)을 매우 빠르게 서빙할 수 있습니다. Vue.js 애플리케이션의 빌드 결과물을 효율적으로 제공하고,<br>
                                        많은 트래픽을 안정적으로 처리할 수 있는 능력과 다양한 보안 기능을 제공하여, 웹 서버의 성능과 보안을 강화할 수 있어 Nginx를 사용했습니다.</li>
                                </v-list-itme-subtitle>
                            </v-list-item>
                            <v-list-item
                                title="AWS"
                            >
                            <v-list-itme-subtitle>
                                <li>AWS EC2: AWS 클라우드에서 가상 서버를 제공하는 서비스로, 애플리케이션을 실행할 수 있는 유연한 컴퓨팅 리소스를 제공합니다.</li>
                                <li>Route 53: AWS의 DNS 웹 서비스로, 도메인 이름을 IP 주소로 변환하여 인터넷 트래픽을 효율적으로 분산시킵니다.</li>
                                <li> 로드 밸런서: 여러 EC2 인스턴스에 트래픽을 분산시켜 가용성과 확장성을 높입니다.</li>
                                <li> 탄력적 IP(Elastic IP): 동적 클라우드 컴퓨팅을 위한 고정 IP 주소로, 장애 조치 및 재설정을 쉽게 합니다.</li>
                                </v-list-itme-subtitle>
                            </v-list-item>
                            <v-list-item
                                title="GitHub Actions"
                            >
                            <v-list-itme-subtitle>
                                GitHub Actions를 활용하여 CI/CD 파이프라인을 구축했습니다. 이를 통해 GitHub 저장소에 코드를 push할 때마다 AWS EC2 인스턴스에 자동으로 애플리케이션이 배포됩니다.
                                </v-list-itme-subtitle>
                            </v-list-item>
                            </v-list>
                        </v-card>
                        </v-dialog>
                </v-card-actions>
                <v-divider  inset></v-divider>
                <span>사용기술 :</span>
                <span> Vue,Vuetify,AWS,Docker,GitHub CI/CD
                </span>
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