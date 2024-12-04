// компонент для отображения названия блюда с кнопкой "лайк"

import { Title, CellButton, SimpleCell } from '@vkontakte/vkui';
import { Icon24Like, Icon24LikeOutLine} from '@vkontakte/icons';

const LikeIcon = isFavouriteAttr ? Icon24Like :
Icon24LikeOutLine;

<SimpleCell
    disabled
    after={
        <CellButton onClick={handleLikeBtnClick}>
            <LikeIcon className={styles.likeBtnIcon} />
        </CellButton>
    }>
        <Title level="2">
            {name}
        </Title>
    </SimpleCell>