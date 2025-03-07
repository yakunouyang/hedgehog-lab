import React from "react";
import {StyledEngineProvider, ThemeProvider} from "@mui/material/styles";
import "./App.css";
import {SnackbarProvider} from "notistack";
import {labTheme} from "./themes/labTheme";
import {BrowserRouter} from "react-router-dom";
import {RoutePage} from "./route/route";
import {RecoilRoot} from "recoil";
import {Box} from "@mui/material";
import {useAuth} from "./hooks/useAuth";
import {useEffectOnce} from "react-use";

const ThemePage = () => {
    const {me} = useAuth()

    useEffectOnce(() => {
        me()
    })

    return (
        <ThemeProvider theme={labTheme('light')}>
            <RoutePage/>
        </ThemeProvider>
    );
};


const App = (): React.ReactElement => {
    return (
        <div className="App">
            {/*// @ts-ignore */}
            <RecoilRoot>
                <React.Suspense fallback={'loading...'}>
                    <BrowserRouter>
                        <SnackbarProvider maxSnack={3}>
                            <StyledEngineProvider injectFirst>
                                <Box sx={{pb: 1}}>
                                    <ThemePage/>
                                </Box>
                            </StyledEngineProvider>
                        </SnackbarProvider>
                    </BrowserRouter>
                </React.Suspense>
            </RecoilRoot>
        </div>
    );
};

export default App;
