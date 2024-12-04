// настроить блюдо

import { Group, FormLayoutGroup, CheckBox, FormItem } from '@vkontakte/vkui';

<Group mode="plain">
    <FormLayoutGroup>
        <FormItem top="Настроить блюдо">
            {options.map((item, index) => (
                <Checkbox
                    onClick={ () => handleOptionChange(index)}
                    checked={item.is_selected}
                    key={item.id}
                    hasActive={false}
                    hasHover={false}
                >
                    {item.name}
                    <span className={styles.price}>
                        {formatWithRubles(item.price)}
                    </span>
                </Checkbox>
        </FormItem>
    </FormLayoutGroup> 
</Group>