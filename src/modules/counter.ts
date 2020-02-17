const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;
// 액션 선언.
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff
});
//액션 생성 함수 선언 . 추후 컨테이너 컴포넌트에서 불러와서 사용.
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;
// ReturnType 은 함수에서 반환하는 타입을 가져올 수 있는 유틸 타입.
type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0
};

const counter = (state: CounterState = initialState, action: CounterAction) => {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

export default counter;
