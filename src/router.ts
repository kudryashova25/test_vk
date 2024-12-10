// не забудь, тебе надо через командную строку произвести подключение
// https://dev.vk.com/ru/mini-apps/learning/course/4-development/3-navigation

/*
  Модуль 4. Разработка Урок 3. Роутинг #M4L3.
  Создание роутера и объявление маршрутов.
*/

import { createHashRouter } from '@vkontakte/vk-mini-apps-router';

export const router = createHashRouter([
    {
        path: '/',
        panel: EPanel.DISHES,
        view: EView.DISHES,
    },
    {
        path: '/dish-card/:id',
        modal: EModal.DISH,
        panel: EPanel.DISHES,
        view: EView.DISHES,
    },
    {
        path: '/dish/:id',
        panel: EPanel.DISH,
        view: EView.DISHES,
    },
    // order 
    {
        path: '/order/:id',
        panel: EPanel.ORDER,
        view: EView.DISHES,
    },
    {
        path: '/order-status/:id',
        panel: EPanel.ORDER,
        modal: EModal.ORDER_STATUS,
        view: EView.DISHES,
    },
    // profile 
    {
        path: '/profile',
        panel: EPanel.PROFILE,
        view: EView.PROFILE,
    },
    {
        path: '/profile/:userId/notifications',
        panel: EPanel.NOTIFICATIONS,
        view: EView.PROFILE,
    },
    {
        path: '/profile/:userId/orders',
        panel: EPanel.USER_ORDERS,
        view: EView.PROFILE,
    },
    {
        path: '/profile/:userId/ads_settings',
        panel: EPanel.PROFILE,
        modal: EModal.ADS_SETTINGS,
        view: EView.PROFILE,
    },
    {
        path: '/rating',
        panel: EPanel.RATING,
        view: EView.RATING,
    },
/*
    Модуль 4. Разработка Урок 4. Модальные окна #M4L4.
    Путь до модального окна с адресом.
*/    

])
