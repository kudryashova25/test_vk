// src/panels/Dishes/components/DishList/DishList.tsx 
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

const DishList = ({ dishes, currentTab }: Props) => {
    const routeNavigator = useRouteNavigator();

    const navigateToDish = (id: number) => {
        void routeNavigator.push(`/dish/${id}`);
    };

    return (
        {dishes.map((dish) => (
            <Dish dish={dish} currentTab={currentTab} key={dish.id} navigateToDish={navigateToDish} />
        ))}
    )
}
