# Learn Zustand

파일럿 프로젝트에 도입하기로 예정된 라이브러리를 미리 학습하고자 Zustand 라이브러리를 활용한 화면을 구현합니다.

## Zustand 라이브러리 설치

```
npm install zustand
yarn add zustand
```

## Zustand 사용법

```
import { create } from "zustand";

interface CountStoreIF {
  count: number;
  increaseCount: () => void;
}

const useCountStore = create<CountStoreIF>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 }))
}));
```

## Zustand 공식문서

<a href="https://zustand-demo.pmnd.rs/" target="_blank">공식문서 바로가기</a>

## Zustand Demo 생성
![스크린샷 2024-07-25 오전 11 41 15](https://github.com/user-attachments/assets/fe9f8dde-5fab-4025-906f-f65da82a7198)

## Zustand Demo Link

<a href="https://jiwooproity.github.io/learn-zustand" target="_blank">Demo 바로가기</a>
