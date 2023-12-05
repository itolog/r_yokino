import AppRouter from "@/router/AppRouter/AppRouter";

import useTheme from "@/assets/hooks/settings/useTheme.tsx";

function App() {
  useTheme();

  return <AppRouter />;
}

export default App;
