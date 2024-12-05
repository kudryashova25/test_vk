// src/panels/Dish/DishPanel.tsx
import { useParams } from '@vkontakte/vk-mini-apps-router';

const DishPanel = () => {
    const params = useParams<'id'>();
    // params.id вернет нам 123 при переходе на /dish/123
    // ... 
}
