import mainReducer from './main/';
import dashboardReducers from './dashboard/';
import overlayReducers from './overlays/';

const templateReducers = {
    ...dashboardReducers,
    ...mainReducer,  
    ...overlayReducers,  
}

export default templateReducers;