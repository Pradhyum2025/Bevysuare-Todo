'use client';
import appStore from '@/redux/reducer';
import { Provider } from 'react-redux';


export default function Providers({ children }) {
  return <Provider store={appStore}>{children}</Provider>;
}
