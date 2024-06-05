import { createContext, useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

interface ToastContextType {
  toastState: {
    message: string;
    type: string;
  };
  setToastState: (toast: { message: string; type: string }) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

function ToastProvider({ children }: any) {
  const [toastState, setToastState] = useState({
    message: '',
    type: '',
  });
  useEffect(() => {
    if (toastState.message !== '') {
      if (toastState.type === 'success') {
        toast.success(toastState.message);
      }
      if (toastState.type === 'error') {
        toast.error(toastState.message);
      }
      if (toastState.type === 'warning') {
        toast.warning(toastState.message);
      }
      if (toastState.type === 'info') {
        toast.info(toastState.message);
      }
    }
  }, [setToastState]);

  return (
    <ToastContext.Provider
      value={{
        toastState,
        setToastState,
      }}
    >
      {children}
      <ToastContainer
        position='top-center'
        autoClose={5000}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme='colored'
      />
    </ToastContext.Provider>
  );
}

export const useToastContext = () => useContext(ToastContext);

export { ToastProvider, ToastContext };
