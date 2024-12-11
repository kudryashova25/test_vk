// src/panels/Dish/DishPanel.tsx
import { useEffect, useState } from 'react';
import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  PanelProps,
} from '@vkontakte/vkui';
import { 
  useRouteNavigator,
  useFirstPageCheck,
  useParams,
  useMetaParams,
} from '@vkontakte/vk-mini-apps-router';

import { OrderInProgress } from 'components';
import { normalizeError } from 'helpers';
import { getDish } from 'api/dishes';
import { TDish } from 'panels/Dishes/types';
import { PanelContent } from './components';


const DishPanel = ({ id }: PanelProps) => {
    const routeNavigator = useRouteNavigator();
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [dish, setDish] = useState<TDish | null>(null);
    /* Модуль 4. Разработка Урок 3. Роутинг #M4L3. Получение path-параметров с помощью useParams */
    const params = useParams<'id'>();
    // params.id вернет нам 123 при переходе на /dish/123
    const dishId = params?.id;
    const isFirstPage = useisFirstPageCheck();
    const metaParams = useMetaParams<{ from: string }>();

  /*
    Модуль 4. Разработка Урок 8. Работа с внешним API #M4L8.
    Пример реализации работы с сервером.
  */
     

}
