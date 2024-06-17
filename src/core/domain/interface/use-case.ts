import { NavigateFunction } from 'react-router';
import { AppDispatch, RootState } from '../../presentation/store/store';


export interface GenericUseCase<Args, Response> {
  execute(args?: Args): Response;
}

export interface ReduxDispatch {
  dispatch: AppDispatch;
}

export interface ReduxGetStore {
  getStore: () => RootState;
}

export interface Navigate {
  navigate: NavigateFunction;
}

export interface ReduxDispatchAndNavigate extends ReduxDispatch, Navigate {}

export interface ReduxDispatchAndReduxGetStore
  extends ReduxDispatch,
    ReduxGetStore {}
