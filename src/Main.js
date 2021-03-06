import MainNavBar from './MainNavBar';
import {Outlet} from "react-router-dom";
import {Container} from 'react-bootstrap/';
const Main = () => (
    <div>
    <MainNavBar />
    <Container className="mt-4">
    <Outlet/>
    </Container>
    </div>
);

export default Main;