import useTheme from "@/hooks/settings/useTheme.tsx";

import AppRouter from "@/router/AppRouter/AppRouter";

function App() {
  useTheme();

  return <AppRouter />;
}

export default App;
