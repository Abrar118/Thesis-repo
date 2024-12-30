import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error/error";
import { ThemeProvider } from "./components/theme-provider";
import App from "./App";
import { ProfileLayout } from "./pages/profile/ProfileLayout";
import Dashboard from "./pages/profile/General/dashboard/Dashboard";
import General from "./pages/profile/General/General";
import DataSettings from "./pages/profile/General/data-settings/DataSettings";
import SentimentAnalysis from "./pages/profile/General/sentiment-analysis/SentimentAnalysis";
import PredictiveAnalysis from "./pages/profile/General/predictive-analysis/PredictiveAnalysis";
import MLModelTraining from "./pages/profile/General/model-training/ModelTraining";
import ReportingAndVisualization from "./pages/profile/General/reports/ReportAndVisualization";
import TeamsAndMessages from "./pages/profile/General/chat/TeamsAndMessages";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    ),
    children: [
      {
        path: "home",
        element: <div>Hello</div>,
        children: [],
      },
      {
        path: "profile",
        element: <ProfileLayout />,
        children: [
          {
            path: "general",
            element: <General />,
            children: [
              {
                path: "dashboard",
                element: <Dashboard />,
              },
              {
                path: "data-settings",
                element: <DataSettings />,
              },
              {
                path: "sentiment-analysis",
                element: <SentimentAnalysis />,
              },
              {
                path: "predictive-analysis",
                element: <PredictiveAnalysis />,
              },
              {
                path: "model-training",
                element: <MLModelTraining />,
              },
              {
                path: "data-visualization",
                element: <ReportingAndVisualization />,
              },
              {
                path: "teams",
                element: <TeamsAndMessages />,
              },
            ],
          },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export { router };
