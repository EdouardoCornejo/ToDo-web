import * as Redux from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { AppDispatch, RootState } from '../store';

export const useAppDispatch: () => AppDispatch = Redux.useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> =
  Redux.useSelector;

  