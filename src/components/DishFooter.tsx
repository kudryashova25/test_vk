// кнопка цены и поделиться

import { FixedLayout, ButtonGroup, Button, Separator, Div } from '@vkontakte/vkui';

<FixedLayout vertical="bottom" filled >
    <Separator wibe />
    <Div>
        <ButtonGroup stretched >
            <Button size="1" stretched onClick={startCheckout} >
                заказать за {formatWithRubles(price) }
            </Button>
            <ShareButton link={getLinkToApp(pageHref) } />
        </ButtonGroup>
    </Div>
</FixedLayout>