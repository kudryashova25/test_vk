import{ useSearchParams } from '@vkontakte/vk-mini-apps-router';

const DishTabs = ({ currentTab, currentDishesSegment }:
    Props) => {
        const [params, setParams] = useSearchParams();

            const handleSegmentChange = (value: ESegmentControl) => {
                value === ESegmentControl.LIST
                ? params.set('segment', ESegmentControl.LIST)
                : params.delete('segment');
                setParams(params);
            };
    }
