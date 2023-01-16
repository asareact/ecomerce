import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [type, setType] = useState("");

  const handleToast = (type, msg) => {
    setOpen(true);
    setMsg(msg);
    setType(type);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const data = {
    open,
    handleToast,
    handleClose,
    msg,
    type,
  };

  return <ToastContext.Provider value={data}>{children}</ToastContext.Provider>;
};

const useToastContext = () => useContext(ToastContext);

export { ToastProvider, useToastContext };
export default ToastContext;
