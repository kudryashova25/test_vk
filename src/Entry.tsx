import { router } from "./router";
import { PouterProvider } from '@vkontakte/vk-mini-apps-router';

const Entry = () => {
    const appearance = useAppearance();
    return (
        <ConfigProvider appearance={appearance ?? 'light'}>
            <AdaptivityProvider>
                <AppRoot>
                    <RouterProvider router={router}>
                        <DataContextProvider>
                            <App />
                        </DataContextProvider>
                    </RouterProvider>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
};
