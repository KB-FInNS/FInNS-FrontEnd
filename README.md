# FinNs - 금융 SNS 플랫폼 (Frontend)

> 금융 소비자들의 재테크 생활을 돕기 위한 금융 정보 기반 SNS 플랫폼입니다.  
> Vue.js를 활용해 사용자 친화적인 UI를 구현하고, Spring Boot 백엔드와 연동하여 금융 상품 정보를 공유할 수 있는 서비스를 제공합니다.

---

## 🧾 프로젝트 개요

- **프로젝트명**: FinNs (Finance + SNS)
- **개발 기간**: 2024.09 ~ 2024.10
- **참여 인원**: 총 6명 
- **수상**: KB국민은행 ‘IT’s Your Life’ 5기 부트캠프 **최우수상**

---

## 📌 주요 기능

- 금융 상품 비교 및 검색 (보험, 예적금, 펀드 등)
- 게시글 작성, 댓글, 좋아요 기능이 있는 커뮤니티
- 마이페이지: 내가 쓴 글/댓글, 좋아요한 글 확인
- 금융 데이터 시각화 및 분석 그래프 제공
- 사용자 맞춤 금융 정보 알림

---

## 🛠 기술 스택

- **Frontend**: Vue.js, Vuex, Vue Router, Axios
- **Backend**: Spring Boot, JPA, MySQL (→ [BackEnd Repo](https://github.com/KB-FInNS/FInNS-BackEnd))
- **배포**: Netlify (프론트), AWS EC2 (백엔드)

---

## 👨‍💻 담당 역할 (`@dydrltk`)

- Vue.js 기반 주요 페이지 UI 설계 및 구현
- Axios를 이용한 API 연동 처리
- Vuex로 상태관리 구현
- 반응형 웹 구현 및 UI 개선
- 금융 상품 검색 필터 기능 개발
- 협업: GitHub Flow 기반 브랜치 전략 운영

---

## 📁 프로젝트 구조

src/
├── assets/ # 이미지, 스타일 파일
├── components/ # 공통 UI 컴포넌트
├── pages/ # 각 화면별 Vue 파일
├── router/ # 라우터 설정
├── store/ # Vuex 상태 관리
└── App.vue # 루트 컴포넌트

## 📈 주요 성과

- 대용량 금융 데이터(1만건의 소비내역 + 금융 상품 정보 + 카드 정보)를 처리하기 위한 **커서 기반 페이지네이션 적용**
- 사용자 피드백 기반으로 UI/UX 개선
- 금융 크롤링 데이터를 기반으로 사용자 맞춤 콘텐츠 제공
- 실제 배포 환경에서의 테스트 및 배포 경험(Netlify 활용)

---

## 📸 주요 화면

![Image](https://github.com/user-attachments/assets/6e922fdd-3bab-49db-b5c1-e7043ea6d09a)

## 💬 협업 방식

- GitHub Issues + Projects로 기능 단위 태스크 관리
- Notion 기반 스프린트 회고 및 일정 공유
- Figma로 UI 프로토타입 제작 후 구현
- GitHub Flow 방식으로 브랜치 운영 및 PR 리뷰

---

## 📎 관련 링크

- 🔗 [백엔드 저장소](https://github.com/KB-FInNS/FInNS-BackEnd)
- 📑 발표 자료 [FInNS_portfolio.pdf](https://github.com/user-attachments/files/21430052/FInNS_portfolio.pdf)
- 🎓 부트캠프: KB국민은행 it's your life 5기
