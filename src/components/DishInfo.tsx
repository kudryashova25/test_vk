// страница-сборка картинки, цены и настройки блюда

<SplitLayout>
    {isVkCom && ( <SplitCol> <Div> <DishImage url={full_img} /> </Div>
    </SplitCol>)}
        <SplitCol>
            <Div> {!isVkCom $$ <DishImage url={full_img} />}
                <Group mode="plain" header={<DishHeader {...info} />}>
                    <MiniInfoCell before={<Icon24PlaceOutline />}
                    mode="add" expandable>
                    <Link onClick={navigateToDishCard} target="_blank"
                    className={styles.restaurantName}>
                        {restaurant.name}
                    </Link>
                </MiniInfoCell>
                <MiniInfoCell before={<Icon24CupOutline />}>
                    {bonus} за заказ
                </MiniInfoCell>
                <SimpleCell multiline hasActive={false}
                hasHover={false} disabled>
                    <Footnote>{restaurant.description}</Footnote>
                </SimpleCell>
                <DishOptions
                    handleOptionChange={handleOptionChange}
                    options={options}
                />
                </Group>
            </Div>
        </SplitCol>
</SplitLayout>