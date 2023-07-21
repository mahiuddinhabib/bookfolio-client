import { Toaster } from "react-hot-toast";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />
      <MainLayout />
    </div>
  );
}

export default App;
