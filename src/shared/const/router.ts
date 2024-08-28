export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    STARTUP_AGENCY = 'startup-agency',
    DESIGN_STUDIO = 'design-studio',
    CREATIVE_PORTFOLIO ='creative-portfolio',
    MARKETING_AGENCY ='marketing-agency',
    TEAM ='team',
    TEAM_DETAILS ='team-details',
    CONTACT ='contact',
    FAQ ='faq',
    SERVICE ='service',
    SERVICE_DETAILS = 'service-details',
    PORTFOLIO ='portfolio',
    PORTFOLIO_DETAILS ='portfolio-details',
    BLOG ='blog',
    BLOG_DETAILS ='blog-details',
    // SETTINGS = 'settings',
    // PROFILE = 'profile',
    // ARTICLES = 'articles',
    // ARTICLE_DETAILS = 'article_details',
    // ARTICLE_CREATE = 'article_create',
    // ARTICLE_EDIT = 'article_edit',
    // ADMIN_PANEL = 'admin_panel',
    // FORBIDDEN = 'forbidden',
    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';


export const getRouteStartupAgency = () => '/startup-agency';
export const getRouteDesignStudio = () => '/design-studio';
export const getRouteCreativePortfolio = () => '/creative-portfolio';
export const getRouteMarketingAgency = () => '/marketing-agency';
export const getRouteTeam = () => '/team';
export const getRouteTeamDetails = () => '/team-details';
export const getRouteContact = () => '/contact';
export const getRouteFaq = () => '/faq';

export const getRouteService = () => '/service';
export const getRouteServiceDetails = () => '/service-details';

export const getRoutePortfolio = () => '/portfolio';
export const getRoutePortfolioDetails = () => '/portfolio-details';

export const getRouteBlog = () => '/blog';
export const getRouteBlogDetails = () => '/blog-details';


// export const getRouteSettings = () => '/settings';
// export const getRouteProfile = (id: string) => `/profile/${id}`;
// export const getRouteArticles = () => '/articles';
// export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
// export const getRouteArticleCreate = () => '/articles/new';
// export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
// export const getRouteAdmin = () => '/admin';
// export const getRouteForbidden = () => '/forbidden';
