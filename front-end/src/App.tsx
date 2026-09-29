import { AppRoutes } from './routes/AppRoutes';
import { ErrorBoundary } from './shared/components/ErrorBoundary';

const App = () => {
  return (
    <>
      <ErrorBoundary fallback={<h1>Error in App Routes</h1>}>
        <AppRoutes />
      </ErrorBoundary>
    </>
  );
};
export default App;
