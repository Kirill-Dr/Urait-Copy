import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { HelpPage } from "./pages/HelpPage";
import { NewsPage } from "./pages/NewsPage";
import { GroupStudentsPage } from "./pages/GroupStudentsPage";
import { CourseWorkPage } from "./pages/CourseWorkPage";
import { TemplatePage } from "./pages/TemplatePage";

export const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/group-students",
      element: <GroupStudentsPage />,
      id: 2,
    },
    {
      link: "work-course",
      element: <CourseWorkPage />,
      id: 3,
    },
    {
      link: "template-work-programs",
      element: <TemplatePage />,
      id: 4,
    },
    {
      link: "/news",
      element: <NewsPage />,
      id: 5,
    },
    {
      link: "/help",
      element: <HelpPage />,
      id: 6,
    },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};
