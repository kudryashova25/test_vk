// структура приложения

import { View, Epic, SplitLayout, SplitCol} from '@vkontakte/vkui';
import { AppTabBar, AppModalRoot } from 'components';
// useActiveVkuiLocation- для определения активных компонентов
import {useActiveVkuiLocation, usePopout} from '@vkontakte/vk-mini-apps-router';



import styles from './App.module.css';

const App = () => {
  // Модуль 4. Разработка Урок 3. Роутинг #M4L3. Получение view и panel
  const{ view: activeView, panel: activePanel = EPanel.DISHES } =
    useActiveVkuiLocation();
  const routerPopout = usePopout();
  const dataContext = useContext(DataContext)
  const profile = dataContext?.data?.profile;
  const [adsBannerPadding, setAdsBannerPadding] = useState(0);

  useOndoardSlides();
  useProfile();
  enableSwipe();
  useGetUserActiveOrder();

  useEffect(() => {
    if (!profile?.is_ads_enabled) {
      return;
    }

    const checkBannerAds= async () => {
      const bannerAdsResult = await showBannerAds();
      setAdsBannerPadding(bannerAdsResult?.banner_height ?? 0);
    };

    checkBannerAds();
  }, [profile]);

/*
  Модуль 4. Разработка Урок 2. Знакомство с VKUI #M4L2.
  Структура приложения.
*/
return (
  <SplitLayout modal={<AppModalRoot />} popout={routerPopout}>
    <SplitCol className={styles.col}>
      <Epic
        activeStory={activeView ?? EView.DISHES}
        tabbar={
          <AppTabBar
          activeStory={activeView as EView}
          isHidden={activePanel === EPanel.DISH}
          />
        }
        >
          <View id={EView.DISHES} activePanel={activePanel}>
            <DishesPanel id={EPanel.PROFILE} />
            <AchievementsPanel id={EPanel.ACHIEVEMENTS} />
            <UserOrdersPanel id={EPanel.USER_ORDERS} />
            <NotificationPanel id={EPanel.NOTIFICATIONS} />
          </View>
          <View id={EView.RATING} activePanel={activePanel}>
            <RatingPanel
              id={EPanel.RATING}
              adsBannnerPadding={adsBannerPadding}
            />
          </View>
        </Epic>
    </SplitCol>
  </SplitLayout>
);
};

export default App;
