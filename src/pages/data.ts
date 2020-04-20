import UserPage from '../pages/user-page';
import PrivacyPage from '../pages/privacy-page';
import ConfirmPage from '../pages/confirm-page';

export interface IPage {
   name: string;
   path: string;
   component: React.ComponentClass | React.FunctionComponent;
}

const Pages:IPage[] = [
   {
      name: "Confirm",
      path: "/confirm",
      component: ConfirmPage
   },
   { 
      name: "Privacy",
      path: "/privacy",
      component: PrivacyPage
   },
   {
      name: "User", 
      path: "/",
      component: UserPage
   },
]

export default Pages;