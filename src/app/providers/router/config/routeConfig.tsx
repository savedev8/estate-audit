// import { UserRole } from '@/entities/User';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
// import { ProfilePage } from '@/pages/ProfilePage';
// import { ArticlesPage } from '@/pages/ArticlesPage';
// import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
// import { ArticleEditPage } from '@/pages/ArticleEditPage';
// import { AdminPanelPage } from '@/pages/AdminPanelPage';
// import { ForbiddenPage } from '@/pages/ForbiddenPage';
// import { NotFoundPage } from '@/pages/NotFoundPage';
import {
    AppRoutes,
    getRouteMain,
    getRouteAbout,
    getRouteStartupAgency,
    getRouteDesignStudio,
    getRouteCreativePortfolio,
    getRouteMarketingAgency,
    getRouteTeam,
    getRouteTeamDetails,
    getRouteContact,
    getRouteFaq,
    getRouteService,
    getRouteServiceDetails,
    getRoutePortfolio,
    getRoutePortfolioDetails,
    getRouteBlog,
    getRouteBlogDetails,
    // getRouteAdmin,
    // getRouteArticleCreate,
    // getRouteArticleDetails,
    // getRouteArticleEdit,
    // getRouteForbidden,
    // getRouteArticles,
    // getRouteProfile,
    // getRouteSettings,
} from '@/shared/const/router';
import { StartupAgencyPage } from '@/pages/StartupAgencyPage';
import { DesignStudioPage } from '@/pages/DesignStudioPage';
import { CreativePortfolioPage } from '@/pages/CreativePortfolioPage';
import { MarketingAgencyPage } from '@/pages/MarketingAgencyPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { TeamPage } from '@/pages/TeamPage/ui/TeamPage';
import { TeamDetailsPage } from '@/pages/TeamDetailsPage';
import { ContactPage } from '@/pages/ContactPage';
import { FaqPage } from '@/pages/FaqPage';
import { ServicePage } from '@/pages/ServicePage';
import { ServiceDetailsPage } from '@/pages/ServiceDetailsPage';
import { PortfolioPage } from '@/pages/PortfolioPage';
import { PortfolioDetailsPage } from '@/pages/PortfolioDetailsPage';
// import { AppRoutesProps } from '@/shared/types/router';
// import { SettingsPage } from '@/pages/SettingsPage';
import { BlogPage } from '@/pages/BlogPage';
import { BlogDetailsPage } from '@/pages/BlogDetailsPage';

export const routeConfig = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    // [AppRoutes.SETTINGS]: {
    //     path: getRouteSettings(),
    //     element: <SettingsPage />,
    // },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    [AppRoutes.STARTUP_AGENCY]: {
        path: getRouteStartupAgency(),
        element: <StartupAgencyPage />,
    },
    [AppRoutes.DESIGN_STUDIO]: {
        path: getRouteDesignStudio(),
        element: <DesignStudioPage />,
        authOnly: true,
    },

    [AppRoutes.CREATIVE_PORTFOLIO]: {
        path: getRouteCreativePortfolio(),
        element: <CreativePortfolioPage />,
    },
    [AppRoutes.MARKETING_AGENCY]: {
        path: getRouteMarketingAgency(),
        element: <MarketingAgencyPage />,
    },
    [AppRoutes.TEAM]: {
        path: getRouteTeam(),
        element: <TeamPage />,
    },
    [AppRoutes.TEAM_DETAILS]: {
        path: getRouteTeamDetails(),
        element: <TeamDetailsPage />,
    },
    [AppRoutes.CONTACT]: {
        path: getRouteContact(),
        element: <ContactPage />,
    },
    [AppRoutes.FAQ]: {
        path: getRouteFaq(),
        element: <FaqPage />,
    },
    [AppRoutes.SERVICE]: {
        path: getRouteService(),
        element: <ServicePage />,
    },
    [AppRoutes.SERVICE_DETAILS]: {
        path: getRouteServiceDetails(),
        element: <ServiceDetailsPage />,
    },
     [AppRoutes.PORTFOLIO]: {
        path: getRoutePortfolio(),
        element: <PortfolioPage />,
    },
    [AppRoutes.PORTFOLIO_DETAILS]: {
        path: getRoutePortfolioDetails(),
        element: <PortfolioDetailsPage />,
    },
     [AppRoutes.BLOG]: {
        path: getRouteBlog(),
        element: <BlogPage />,
    },
    [AppRoutes.BLOG_DETAILS]: {
        path: getRouteBlogDetails(),
        element: <BlogDetailsPage />,
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
