import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-slate-100 dark:bg-slate-800 dark:text-white static">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
