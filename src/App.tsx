import { View, Epic, SplitLayout, SplitCol} from '@vkontakte/vkui';
import { AppTabBar, AppModalRoot } from 'components';
import {useActiveVkuiLocation, usePopout} from '@vkontakte/vk-mini-apps-router';

const { view: activeView, panel: activePanel = EPanel.DISHES } = useActiveVkuiLocation();
const routerPopout = usePopout();

<SplitLayout modal={<AppModalRoot />} popout={routerPopout}>
  <SplitCol>
    <Epic
      activeStory={activeView ?? EView.DISHES}
      tabbar={<AppTabBar activeStory={activeView as EView} />}
      isHidden={activePanel === EPanel.DISH}
    >
      <View id={EView.DISHES} activePanel = {activePanel} >
      <DishesPanel id={EPanel.DISHES} />
      <DishesPanel id={EPanel.DISH} />
      <OrderPanel id={EPanel.ORDER} />
      </View>
    </Epic>
  </SplitCol>
</SplitLayout>
