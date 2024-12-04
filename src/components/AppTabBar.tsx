// кнопки-ориентиры (профиль, блюда, рейтинг)

import { Tabbar, TabbarItem, Badge } from '@vkontakte/vkui';
import { Icon28CupOutline } from '@vkontakte/icons';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

const routeNavigator = useRouteNavigator();

<Tabbar>
    <TabbarItem
        onClick={ () => void routeNavigator.push('/raiting')
        selected={activeStory === EView.RAITING}}
        data-story={EView.RAITING}
        text="Рейтинг"
    >
        <Icon28CupOutline>

    </TabbarItem>
</Tabbar>