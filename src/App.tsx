import './App.css'
import {ThemeProvider, CssBaseline} from "@mui/material";
import {defaultTheme} from "./theme/theme.ts";
// import AppErrorBoundary from '/views/common/AppErrorBoundary.tsx';
// import {Route, Routes} from 'react-router-dom';

function App() {

    return (
        <ThemeProvider theme={defaultTheme}>
            {/*<AppErrorBoundary>*/}
            {/*    <CssBaseline/>*/}
            {/*    <Routes>*/}
            {/*        <Route element={<ProtectRouter/>}>*/}
            {/*            <Route path={'/'} element={<LandingPage/>}/>*/}
            {/*            <Route element={<Layout/>}>*/}
            {/*                <Route path={'/changeit1/*'} element={<ChangeitRouter1/>}/>*/}
            {/*                <Route path={'/changeit2/*'} element={<ChangeitRouter2/>}/>*/}
            {/*                <Route path={'/changeit3/*'} element={<ChangeitRouter3/>}/>*/}
            {/*            </Route>*/}
            {/*            <Route path={'*'} element={<NotFoundPage/>}/>*/}
            {/*        </Route>*/}
            {/*    </Routes>*/}
            {/*    <Dialogs/>*/}
            {/*    <Loading/>*/}
            {/*</AppErrorBoundary>*/}
        </ThemeProvider>
    )
}

export default App
