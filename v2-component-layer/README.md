# 📝 Vue.js Todo-List Project (v2.0)

> **단일 컴포넌트 구조를 컴포넌트 계층화(Layering)로 리팩토링한 Vue 3 프로젝트입니다.**

---

### 🚀 1. 프로젝트 개요
- **목적**: Vue.js의 핵심인 `Props`와 `Custom Events(Emit)`를 활용한 컴포넌트 간 데이터 통신 실습함.
- **주요 특징**:
  - `Vite` 빌드 도구를 활용한 빠르고 가벼운 개발 환경 구축함.
  - **컴포넌트 분리**: `App` → `Input` / `List` / `Item` 구조로 책임을 분산함.
  - **UI Framework**: `Bootstrap 5` 모듈화를 통해 반응형 레이아웃 구현함.

---

### 🛠️ 2. 기술 스택 (Tech Stack)
- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **Styling**: Bootstrap 5 (Installed via npm)
- **Package Manager**: npm

---

### 📦 3. 설치 및 실행 방법 (Setup)

#### 🔹 의존성 모듈 설치
Vite로 프로젝트 생성 후 아래 명령어를 통해 필요한 라이브러리를 설치함.
```bash
# 프로젝트 폴더 이동
cd v2-todo-app

# 기본 패키지 및 Bootstrap 5 설치
npm install
npm install bootstrap