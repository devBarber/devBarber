import { createDrawerNavigator } from '@react-navigation/drawer';
import Agenda from "../Views/Agenda/agenda";
import CadastroBarbeiro from "../Views/CadastroBarbeiro/Cadastro";
import TabRoutes from './tab.routes'


const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen
                name='Pagina Inicial'
                component={TabRoutes}
            />
            <Drawer.Screen
                name="Agenda"
                component={Agenda}
            />
            <Drawer.Screen
            name='Cadastro Barbeiro'
            component={CadastroBarbeiro}
            />
        </Drawer.Navigator>
    )
}